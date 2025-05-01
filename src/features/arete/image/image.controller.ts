import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { ImageService } from './image.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';


@Controller('api/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':key')
  public async getImage(@Param('key') key: string, @Res() res: Response) {
    const image = await this.imageService.getImage(key);
    const imageBuffer = this.imageService.getImageContent(image)
    res.setHeader('Content-Type', `image/${image.extension}`);
    res.send(imageBuffer);
  }

  @Get()
  public async listImages() {
    return await this.imageService.listImages();
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  public async uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
    await this.imageService.saveImages(files)
    return { message: 'Imagens enviadas com sucesso!' };
  }
}
