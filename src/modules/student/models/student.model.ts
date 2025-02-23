import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ versionKey: false, timestamps: true })
export class Student {
  @Prop({ required: true, unique: true })
  fullName: string;
  @Prop({ required: true, unique: true })
  phone: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  birthDate: Date;
  @Prop({ required: true })
  courses: string[]; // kurslar ID lari
  @Prop({ default: 'inactive' })
  status: 'active' | 'inactive';
}

export const StudentSchema = SchemaFactory.createForClass(Student);
