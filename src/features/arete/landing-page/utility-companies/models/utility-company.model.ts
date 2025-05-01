import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UtilityCompany extends Document {
    @Prop({ required: true })
    key: string;

    @Prop({ required: true })
    description: string;
}

export const UtilityCompanySchema = SchemaFactory.createForClass(UtilityCompany);