import { Injectable } from '@nestjs/common';
import {CustomersImageDto} from "./customers-image.dto";
import {customersGallery} from "../../../../assets/mocks/mocks";

@Injectable()
export class CustomersService {

    saveImages(images: CustomersImageDto[]){
        customersGallery.splice(0, customersGallery.length);

        images.forEach((image) => {
            this.save(image);
        });
    }

    save(image: CustomersImageDto) {
        customersGallery.push(image);
    }

    list(): CustomersImageDto[] {
        return customersGallery;
    }
}
