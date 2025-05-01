import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from '../models/image.model';
import {GenericRepository} from "../../../../core/repository/generic-repository";

@Injectable()
export class ImageMongoRepository extends GenericRepository<Image> {
  constructor(@InjectModel(Image.name) model: Model<Image>) {
    super(model);
  }
}
