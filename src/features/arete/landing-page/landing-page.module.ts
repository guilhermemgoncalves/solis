import { Module } from '@nestjs/common';
import {InstaGalleryModule} from "./insta-gallery/insta-gallery.module";

@Module({
    imports: [InstaGalleryModule,]
})
export class LandingPageModule {}
