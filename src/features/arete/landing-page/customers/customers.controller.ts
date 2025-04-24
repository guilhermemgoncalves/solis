import {Body, Controller, Get, Post} from '@nestjs/common';
import { CustomersService } from './customers.service';
import {CustomersImageDto} from "./customers-image.dto";

@Controller('api/customers')
export class CustomersController {

  constructor(private readonly customersService: CustomersService) {}

  @Get()
  public list() {
    return this.customersService.list();
  }

  @Post()
  public save(@Body() body: Array<CustomersImageDto>) {
    return this.customersService.saveImages(body);
  }
}
