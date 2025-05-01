import { Injectable } from '@nestjs/common';
import { CustomersImageDto } from "./customers-image.dto";
import { CustomerMongoRepository } from './repository/customer-repository';
import { Customer } from './models/customer.model';

@Injectable()
export class CustomersService {
    constructor(private readonly repository: CustomerMongoRepository) {}

    async saveImages(images: CustomersImageDto[]) {
        await this.repository.deleteAll()
        for (const image of images) {
            await this.save(image);
        }
    }

    async save(imageDto: CustomersImageDto) {
        return this.repository.create(imageDto as Customer);
    }

    async list(): Promise<Customer[]> {
        return this.repository.findAll();
    }
}