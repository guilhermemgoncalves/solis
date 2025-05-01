import { Injectable } from '@nestjs/common';
import {InstagramImageDto} from "./instagram-image.dto";
import {InstaGallery} from "./models/insta-gallery.model";
import {InstaGalleryMongoRepository} from "./repository/insta-gallery-repository";

@Injectable()
export class InstaGalleryService {

    constructor(private readonly repository: InstaGalleryMongoRepository) {}

    async saveImages(images: InstagramImageDto[]) {
        await this.repository.deleteAll()
        for (const image of images) {
            await this.save(image);
        }
    }

    async save(imageDto: InstagramImageDto) {
        return this.repository.create(imageDto as InstaGallery);
    }

    async list(): Promise<InstaGallery[]> {
        return this.repository.findAll();
    }
}
