import { Injectable, NotFoundException } from '@nestjs/common';
import { ApplicationImageDto } from './dtos/application-image.dto';
import { applicationImages } from '../../../assets/mocks/mocks';
import { randomUUID } from 'crypto';
import {FileSystemService} from "../../../core/services/file-system/file-system.service";
import {InstaGalleryService} from "../landing-page/insta-gallery/insta-gallery.service";
import {InstagramImageDto} from "../landing-page/insta-gallery/instagram-image.dto";


@Injectable()
export class ImageService {
  constructor(
      private readonly fileManager: FileSystemService,
      private readonly instaGalleryService: InstaGalleryService,
  ) {}

  getImage(key: string): ApplicationImageDto {
    const image = this.listImages().find((img) => img.key === key);

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

  persistImage(uploadedImages: ApplicationImageDto) {
    applicationImages.push(uploadedImages);
    return uploadedImages;
  }

  getImageContent(image: ApplicationImageDto): Buffer {
    const imageName = image.key + '.' + image.extension
    return this.fileManager.getImage(imageName);
  }

  saveImages(files: Array<Express.Multer.File>) {
    files.forEach((file) => {
      const imageDto: ApplicationImageDto = {
        key: this.generateKey(),
        extension: file.mimetype.split('/')[1],
        name: file.originalname,
      };

      const instaImage : InstagramImageDto ={
        key: imageDto.key,
        description: 'Instagram post image',
        link: 'https://www.instagram.com/p/DBcmW7psNc_/?img_index=1'
      }

      this.fileManager.saveImage(file, imageDto.key, imageDto.extension);
      this.persistImage(imageDto);
    });
  }
}
