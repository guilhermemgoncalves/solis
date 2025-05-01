import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersImageDto } from "./customers-image.dto";
import { Customer } from './models/customer.model';

@Controller('api/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  public async list(): Promise<Customer[]> {
    return this.customersService.list();
  }

  @Post()
  public async save(@Body() body: CustomersImageDto[]): Promise<void> {
    await this.customersService.saveImages(body);
  }
}