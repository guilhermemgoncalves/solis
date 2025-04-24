import { Module } from '@nestjs/common';
import { UtilityCompaniesService } from './utility-companies.service';
import { UtilityCompaniesController } from './utility-companies.controller';

@Module({
  controllers: [UtilityCompaniesController],
  providers: [UtilityCompaniesService],
})
export class UtilityCompaniesModule {}
