import { Injectable } from '@nestjs/common';
import {InstagramImageDto} from "./instagram-image.dto";
import {instaGallery} from "../../../../assets/mocks/mocks";

@Injectable()
export class InstaGalleryService {

    saveImages(images: InstagramImageDto[]){
        instaGallery.splice(0, instaGallery.length);

        images.forEach((image) => {
            this.save(image);
        });
    }


    save(image: InstagramImageDto) {
        instaGallery.push(image);
    }

    list(): InstagramImageDto[] {
        return instaGallery;
    }
}
