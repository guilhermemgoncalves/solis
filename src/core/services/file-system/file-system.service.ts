import { Injectable } from '@nestjs/common';
import * as fs from 'node:fs';
import * as path from 'node:path';

@Injectable()
export class FileSystemService {

    saveImage(file: Express.Multer.File, key: string, extension: string) {
        const uploadDir = path.join(process.cwd(), 'uploads');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        const filePath = path.join(uploadDir, `${key}.${extension}`);

        fs.writeFileSync(filePath, file.buffer);
    }

    getImage(imageName: string): Buffer<ArrayBufferLike> {
        const imgPath = path.join(process.cwd(), 'uploads', imageName);
        return fs.readFileSync(imgPath);
    }
}
