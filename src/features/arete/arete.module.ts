import { Module } from '@nestjs/common';
import { ImageModule } from './image/image.module';
import { InstaGalleryModule } from './landing-page/insta-gallery/insta-gallery.module';

@Module({
  imports: [ImageModule, InstaGalleryModule]
})
export class AreteModule {}
