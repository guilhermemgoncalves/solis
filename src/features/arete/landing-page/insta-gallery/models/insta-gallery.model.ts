import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class InstaGallery extends Document {
    @Prop({ required: true })
    key: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    link: string;
}

export const InstaGallerySchema = SchemaFactory.createForClass(InstaGallery);