import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from './models/customer.model';
import { CustomerMongoRepository } from './repository/customer-repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema }
    ])
  ],
  controllers: [CustomersController],
  providers: [CustomersService, CustomerMongoRepository],
})
export class CustomersModule {}