import { Module } from '@nestjs/common';
import { ImageModule } from './image/image.module';
import { LandingPageModule } from './landing-page/landing-page.module';

@Module({
  imports: [ImageModule,  LandingPageModule]
})
export class AreteModule {}
