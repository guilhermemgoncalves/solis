import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SharePointService {
  constructor(private readonly authService: AuthService) {}

  private async getSiteId(): Promise<string> {
    const client = await this.authService.getGraphClient();
    const hostname = 'wqry1.sharepoint.com';
    const siteName = 'solis';

    const site = await client.api(`/sites/${hostname}:/sites/${siteName}`).get();
    return site.id;
  }

  private async getDriveId(siteId: string): Promise<string> {
    const client = await this.authService.getGraphClient();

    // Obtém todos os drives do site (bibliotecas de documentos)
    const defaultDrive = await client.api(`/sites/${siteId}/drive`).get();

    if (!defaultDrive) {
      throw new Error(`Nenhuma Document Library encontrada para o siteId: ${siteId}`);
    }

    return defaultDrive.id;
  }

  public async uploadFileToSharePoint(fileName: string, fileContent: Buffer, folderPath: string): Promise<any> {
    const client = await this.authService.getGraphClient();
    const siteId = await this.getSiteId();
    const driveId = await this.getDriveId(siteId);

    try {
      const response = await client
          .api(`/sites/${siteId}/drives/${driveId}/root:/${folderPath}/${fileName}:/content`)
          .put(fileContent);

      return response;
    } catch (error) {
      throw new Error(`Erro ao fazer upload do arquivo para o SharePoint: ${error.message}`);
    }
  }
}