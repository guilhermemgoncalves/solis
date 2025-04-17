import { Module } from '@nestjs/common';
import { InstaGalleryService } from './insta-gallery.service';
import { InstaGalleryController } from './insta-gallery.controller';

@Module({
  controllers: [InstaGalleryController],
  providers: [InstaGalleryService],
})
export class InstaGalleryModule {}
