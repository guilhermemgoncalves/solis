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
import * as fs from "node:fs";
import * as path from "node:path";
import * as process from "node:process";

@Controller('api/image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get(':key')
  public getImage(@Param('key') key: string, @Res() res: Response) {
    const image = this.imageService.getImage(key);
    const imgPath = path.join(process.cwd(), 'uploads', image.key + '.' + image.format);
    const imageBuffer = fs.readFileSync(imgPath);

    res.setHeader('Content-Type', `image/${image.format}`);
    res.send(imageBuffer);
  }

  @Get()
  public listImages() {
    return this.imageService.listImages()
        .map((image) => {
      return image;
    });
  }

  @Post('upload')
  @UseInterceptors(AnyFilesInterceptor())
  public uploadImages(@UploadedFiles() files: Array<Express.Multer.File>) {
    const uploadDir = path.join(process.cwd(), 'uploads');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const uploadedImages = files.map((file) => {
      const key = this.imageService.generateKey();
      const fileExtension = file.mimetype.split('/')[1]; // Apenas a extensão, sem ponto
      const filePath = path.join(uploadDir, `${key}.${fileExtension}`); // Corrigido para incluir o ponto aqui

      fs.writeFileSync(filePath, file.buffer);

      return {
        key,
        format: fileExtension,
        name: file.originalname,
      };
    });

    this.imageService.saveImages(uploadedImages);

    return { message: 'Imagens enviadas com sucesso!', uploadedImages };
  }
}
