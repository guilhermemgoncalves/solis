import { Injectable } from '@nestjs/common';
import { GenericRepository } from 'src/core/repository/generic-repository';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {InstaGallery} from "../models/insta-gallery.model";

@Injectable()
export class InstaGalleryMongoRepository extends GenericRepository<InstaGallery> {
    constructor(@InjectModel(InstaGallery.name) model: Model<InstaGallery>) {
        super(model);
    }
}