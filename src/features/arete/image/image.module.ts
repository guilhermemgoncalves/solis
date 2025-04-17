import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { FileSystemService } from '../../../core/services/file-system/file-system.service';
import {InstaGalleryService} from "../landing-page/insta-gallery/insta-gallery.service";

@Module({
  controllers: [ImageController],
  providers: [ImageService, FileSystemService, InstaGalleryService],
})
export class ImageModule {}
