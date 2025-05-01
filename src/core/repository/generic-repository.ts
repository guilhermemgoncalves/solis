import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class GenericRepository<T> {
    constructor(protected readonly model: Model<T>) {}

    async create(data: T): Promise<T> {
        const model = new this.model(data);
        return model.save() as Promise<T>;
    }

    async findAll(): Promise<T[]> {
        return this.model.find().exec();
    }

    async findById(id: string): Promise<T | null> {
        return this.model.findOne({key:id}).exec();
    }

    async delete(id: string): Promise<T | null> {
        return this.model.findByIdAndDelete(id).exec();
    }

    deleteAll() {
        return this.model.deleteMany({}).exec();
    }
}
