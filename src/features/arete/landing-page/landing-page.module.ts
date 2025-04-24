import { Module } from '@nestjs/common';
import {InstaGalleryModule} from "./insta-gallery/insta-gallery.module";
import {CustomersModule} from "./customers/customers.module";
import {UtilityCompaniesModule} from "./utility-companies/utility-companies.module";

@Module({
    imports: [InstaGalleryModule, CustomersModule, UtilityCompaniesModule]
})
export class LandingPageModule {}
