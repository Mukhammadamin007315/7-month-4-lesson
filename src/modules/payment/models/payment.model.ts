import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Payment {
  @Prop({ required: true })
  studentId: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true })
  courseId: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true, min: 0, default: 0 })
  amount: number;
  @Prop({ required: true })
  paymentType: 'cash' | 'card';
  @Prop({ default: 'pending' })
  status: 'pending' | 'completed' | 'cancelled';
}
export const PaymentSchema = SchemaFactory.createForClass(Payment);
