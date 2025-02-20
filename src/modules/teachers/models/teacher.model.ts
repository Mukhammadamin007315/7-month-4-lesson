import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Teacher {
  @Prop({ required: true })
  fullName: string;
  @Prop({ required: true, unique: true })
  phone: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  subjects: string[];
  @Prop({ required: true })
  salary: number;
  @Prop({ required: true, min: 3 })
  experienceYears: number;
  @Prop({ default: 'inactive' })
  status: 'active' | 'inactive';
  //timestamp createdAt va updateAt qilganligi uchun ularni yozmadim
}
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
