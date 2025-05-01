import { Module } from '@nestjs/common';
import { UtilityCompaniesService } from './utility-companies.service';
import { UtilityCompaniesController } from './utility-companies.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {UtilityCompany, UtilityCompanySchema} from "./models/utility-company.model";
import {UtilityCompanyMongoRepository} from "./repository/utility-company-repository";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UtilityCompany.name, schema: UtilityCompanySchema }
    ])
  ],
  controllers: [UtilityCompaniesController],
  providers: [UtilityCompaniesService, UtilityCompanyMongoRepository],
})
export class UtilityCompaniesModule {}
