import {Injectable, NotFoundException} from '@nestjs/common';
import {ApplicationImageDto} from "./dtos/application-image.dto";
import { applicationImages } from '../../../assets/mocks/mocks';
import { randomUUID } from 'crypto';

@Injectable()
export class ImageService {

    getImage(key: string): ApplicationImageDto {
        const image = this.listImages().find(img => img.key === key);

        if (image) {
            return image;
        }

        throw new NotFoundException(`Image ${key} not found`);
    }


    listImages(): ApplicationImageDto[] {
        return applicationImages;
    }

    generateKey(): string {
        return randomUUID();
    }

    saveImages(uploadedImages: ApplicationImageDto[]) {
        uploadedImages.forEach((image) => {
            applicationImages.push(image);
        });
        return uploadedImages;
    }
}
