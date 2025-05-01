import { Injectable, NotFoundException } from '@nestjs/common';
import { ApplicationImageDto } from './dtos/application-image.dto';
import { randomUUID } from 'crypto';
import { FileSystemService } from '../../../core/services/file-system/file-system.service';
import { ImageMongoRepository } from './repository/image.mongo.repository';
import {Image} from "./models/image.model";

@Injectable()
export class ImageService {
  constructor(
    private readonly fileManager: FileSystemService,
    private readonly imageRespository: ImageMongoRepository,
  ) {}

  async getImage(key: string): Promise<ApplicationImageDto> {
    const image = await this.imageRespository.findById(key);

    if (image) {
      return image;
    }

    throw new NotFoundException(`Image ${key} not found`);
  }

  async listImages(): Promise<ApplicationImageDto[]> {
    return await this.imageRespository.findAll();
  }

  generateKey(): string {
    return randomUUID();
  }

  async persistImage(uploadedImages: ApplicationImageDto) {

    const images: Image = uploadedImages as Image;
    await this.imageRespository.create(images);
    return uploadedImages;
  }

  getImageContent(image: ApplicationImageDto): Buffer {
    const imageName = image.key + '.' + image.extension;
    return this.fileManager.getImage(imageName);
  }

  async saveImages(files: Array<Express.Multer.File>) {
    for (const file of files) {
      const imageDto: ApplicationImageDto = {
        key: this.generateKey(),
        extension: file.mimetype.split('/')[1],
        name: file.originalname,
      };

      this.fileManager.saveImage(file, imageDto.key, imageDto.extension);
      await this.persistImage(imageDto);
    }
  }
}
