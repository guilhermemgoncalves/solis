import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { FileSystemService } from '../../../core/services/file-system/file-system.service';
import {ImageMongoRepository} from "./repository/image.mongo.repository";
import {MongooseModule} from "@nestjs/mongoose";
import {ImageSchema, Image} from "./models/image.model";

@Module({
  controllers: [ImageController],
  providers: [ImageService, FileSystemService, ImageMongoRepository],
  imports: [ MongooseModule.forFeature([
    { name: Image.name, schema: ImageSchema }
  ])],
})
export class ImageModule {}
