import { Injectable } from '@nestjs/common';
import {InstagramImageDto} from "./instagram-image.dto";
import {instaGallery} from "../../../../assets/mocks/mocks";

@Injectable()
export class InstaGalleryService {



    save(image: InstagramImageDto) {
        instaGallery.push(image);
    }

    list(): InstagramImageDto[] {
        return instaGallery;
    }
}
