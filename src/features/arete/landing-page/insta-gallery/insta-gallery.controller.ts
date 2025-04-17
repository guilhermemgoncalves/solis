import {Controller, Get} from '@nestjs/common';
import { InstaGalleryService } from './insta-gallery.service';

@Controller('api/insta-gallery')
export class InstaGalleryController {

  constructor(private readonly instaGalleryService: InstaGalleryService) {}

  @Get()
  public list() {
    return this.instaGalleryService.list();
  }
}
