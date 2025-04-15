import {Controller, Get, Param, Res} from '@nestjs/common';
import { Response } from 'express';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}


  @Get(':key')
  public getImage(@Param('key')key: string, @Res() res: Response) {

    const image = this.imageService.getImage(key);

    const imageBuffer = Buffer.from(image, 'base64');

    res.setHeader('Content-Type', 'image/png');

    res.send(imageBuffer);
  }

}
