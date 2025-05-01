import { Module } from '@nestjs/common';
import { InstaGalleryService } from './insta-gallery.service';
import { InstaGalleryController } from './insta-gallery.controller';
import {MongooseModule} from "@nestjs/mongoose";
import { InstaGallery, InstaGallerySchema } from './models/insta-gallery.model';
import {InstaGalleryMongoRepository} from "./repository/insta-gallery-repository";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InstaGallery.name, schema: InstaGallerySchema }
    ])
  ],
  controllers: [InstaGalleryController],
  providers: [InstaGalleryService, InstaGalleryMongoRepository],
})
export class InstaGalleryModule {}
