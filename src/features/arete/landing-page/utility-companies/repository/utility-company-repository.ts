import { Injectable } from '@nestjs/common';
import { GenericRepository } from 'src/core/repository/generic-repository';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {UtilityCompany} from "../models/utility-company.model";

@Injectable()
export class UtilityCompanyMongoRepository extends GenericRepository<UtilityCompany> {
    constructor(@InjectModel(UtilityCompany.name) model: Model<UtilityCompany>) {
        super(model);
    }
}