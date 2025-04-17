import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { FileSystemService } from '../../../core/services/file-system/file-system.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService, FileSystemService],
})
export class ImageModule {}
