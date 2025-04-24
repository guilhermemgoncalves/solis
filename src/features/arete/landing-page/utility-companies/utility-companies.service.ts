import { Injectable } from '@nestjs/common';
import {UtilityCompaniesImageDto} from "./utility-companies-image.dto";
import {customersGallery, utilityCompaniesGallery} from "../../../../assets/mocks/mocks";

@Injectable()
export class UtilityCompaniesService {

    saveImages(images: UtilityCompaniesImageDto[]){
        utilityCompaniesGallery.splice(0, customersGallery.length);

        images.forEach((image) => {
            this.save(image);
        });
    }

    save(image: UtilityCompaniesImageDto) {
        utilityCompaniesGallery.push(image);
    }

    list(): UtilityCompaniesImageDto[] {
        return utilityCompaniesGallery;
    }
}
