import {Body, Controller, Get, Post} from '@nestjs/common';
import { InstaGalleryService } from './insta-gallery.service';
import {InstagramImageDto} from "./instagram-image.dto";

@Controller('api/insta-gallery')
export class InstaGalleryController {

  constructor(private readonly instaGalleryService: InstaGalleryService) {}

  @Get()
  public list() {
    return this.instaGalleryService.list();
  }

  @Post()
  public save(@Body() body: Array<InstagramImageDto>) {
    return this.instaGalleryService.saveImages(body);
  }
}
