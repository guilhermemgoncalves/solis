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
  public getImage(@Param('key') key: string, @Res() res: Response) {
    const image = this.imageService.getImage(key);

    const imageBuffer = Buffer.from(image.content, 'base64');

    res.setHeader('Content-Type', `image/${image.format}`);

    res.send(imageBuffer);
  }

  @Get()
  public listImages() {
    return this.imageService.listImages().map((image) => {
      image.content = '';
      return image;
    });
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor()) // 'images' é o nome do campo no FormData
  public uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
    const uploadedImages = files.map((file) => ({
      key: this.imageService.generateKey(),
      content: file.buffer.toString('base64'),
      format: file.mimetype.split('/')[1],
      name: file.originalname,
    }));
    this.imageService.saveImages(uploadedImages);

    return { message: 'Imagens enviadas com sucesso!', uploadedImages };
  }
}
