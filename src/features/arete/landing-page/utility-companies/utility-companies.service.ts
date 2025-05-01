import { Injectable } from '@nestjs/common';
import {UtilityCompany} from "./models/utility-company.model";
import { UtilityCompanyMongoRepository } from './repository/utility-company-repository';
import {UtilityCompaniesImageDto} from "./utility-companies-image.dto";


@Injectable()
export class UtilityCompaniesService {

    constructor(private readonly repository: UtilityCompanyMongoRepository) {}

    async saveImages(images: UtilityCompaniesImageDto[]) {
        await this.repository.deleteAll()
        for (const image of images) {
            await this.save(image);
        }
    }

    async save(imageDto: UtilityCompaniesImageDto) {
        return this.repository.create(imageDto as UtilityCompany);
    }

    async list(): Promise<UtilityCompany[]> {
        return this.repository.findAll();
    }
}
