import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Course {
  @Prop({ unique: true, required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  duration: number; // oylarda
  @Prop()
  status: 'active' | 'inactive';
  //timestamp createdAt va updateAt qilganligi uchun ularni yozmadim
}

export const CourseSchema = SchemaFactory.createForClass(Course);
