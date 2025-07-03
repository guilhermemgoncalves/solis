import {Injectable, Logger} from '@nestjs/common';
import * as qs from 'qs';
import axios from "axios";
import {Client} from "@microsoft/microsoft-graph-client";

@Injectable()
export class AuthService {

    private readonly logger = new Logger(AuthService.name);

    private async getAccessToken(): Promise<string> {
        const tenantId = process.env.AZURE_TENANT_ID;
        const clientId = process.env.AZURE_CLIENT_ID;
        const clientSecret = process.env.AZURE_CLIENT_SECRET;
        const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

        const payload = qs.stringify({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
            scope: 'https://graph.microsoft.com/.default',
        });

        try {
            const response = await axios.post(tokenEndpoint, payload, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            });

            this.logger.log('Token Graph obtido com sucesso');

            return response.data.access_token;
        } catch (error) {
            this.logger.error('Erro ao obter token do Microsoft Graph', error.response?.data || error.message);
            throw new Error('Falha na autenticação com Microsoft Graph');
        }

    }

    public async getGraphClient(): Promise<Client> {
        const accessToken = await this.getAccessToken();

        return Client.init({
            authProvider: (done) => {
                done(null, accessToken);
            },
        });
    }


}
