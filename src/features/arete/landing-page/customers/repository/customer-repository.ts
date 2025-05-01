import { Injectable } from '@nestjs/common';
import { GenericRepository } from 'src/core/repository/generic-repository';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Customer} from "../models/customer.model";

@Injectable()
export class CustomerMongoRepository extends GenericRepository<Customer> {
    constructor(@InjectModel(Customer.name) model: Model<Customer>) {
        super(model);
    }
}