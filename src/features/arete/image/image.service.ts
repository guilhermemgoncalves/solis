import { Injectable, NotFoundException } from '@nestjs/common';
import { ApplicationImageDto } from './dtos/application-image.dto';
import { applicationImages } from '../../../assets/mocks/mocks';
import { randomUUID } from 'crypto';
import {FileSystemService} from "../../../core/services/file-system/file-system.service";


@Injectable()
export class ImageService {
  constructor(private readonly fileManager: FileSystemService) {}

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

      this.fileManager.saveImage(file, imageDto.key, imageDto.extension);
      this.persistImage(imageDto);
    });
  }
}
