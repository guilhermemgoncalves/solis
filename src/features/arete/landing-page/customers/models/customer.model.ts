import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
    @Prop({ required: true })
    key: string;

    @Prop({ required: true })
    description: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);