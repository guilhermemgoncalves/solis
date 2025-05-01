import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Image extends Document {
    @Prop({ required: true })
    key: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    extension: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);