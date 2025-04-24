import {Body, Controller, Get, Post} from '@nestjs/common';
import { UtilityCompaniesService } from './utility-companies.service';
import {UtilityCompaniesImageDto} from "./utility-companies-image.dto";

@Controller('api/utility-companies')
export class UtilityCompaniesController {

  constructor(private readonly utilityCompaniesService: UtilityCompaniesService) {}

  @Get()
  public list() {
    return this.utilityCompaniesService.list();
  }

  @Post()
  public save(@Body() body: Array<UtilityCompaniesImageDto>) {
    return this.utilityCompaniesService.saveImages(body);
  }
}
