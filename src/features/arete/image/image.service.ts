import {Injectable, NotFoundException} from '@nestjs/common';
import {ApplicationImageDto} from "./dtos/application-image.dto";
import {applicationImages} from "../../../assets/mocks/mocks";

@Injectable()
export class ImageService {

    getImage(key: string): string {
        const image = this.listImages().find(img => img.key === key)?.content;

        if (image) {
            return image;
        }

        throw new NotFoundException(`Image ${key} not found`);
    }


    listImages(): ApplicationImageDto[] {
        return applicationImages;
    }

}
