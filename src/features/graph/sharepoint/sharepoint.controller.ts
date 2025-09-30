import { Controller, Post, Body } from '@nestjs/common';
import { SharePointService } from './sharepoint.service';

@Controller('sharepoint')
export class SharePointController {
  constructor(private readonly sharePointService: SharePointService) {}

  @Post('upload')
  async uploadFile(
      @Body('fileName') fileName: string,
      @Body('fileContent') fileContent: string,
      @Body('folderPath') folderPath: string,
  ) {
    const bufferContent = Buffer.from(fileContent, 'base64'); // Converte o conteúdo base64 para Buffer
    return this.sharePointService.uploadFileToSharePoint(fileName, bufferContent, folderPath);
  }
}