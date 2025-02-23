import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Mongoose } from 'mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Group {
  constructor() {}
  @Prop({ required: true, unique: true })
  name: string;
  @Prop({ required: true })
  courseId: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true })
  teacherId: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true, type: Object })
  schedule: {
    days: (
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'saturday'
      | 'sunday'
    )[];
    startTime: string; // "14:00"
    endTime: string; // "16:00"
  };
  @Prop({ required: true })
  maxStudents: number;
  @Prop({ required: true })
  startDate: Date;
  @Prop({ required: true })
  endDate: Date;
  @Prop({ required: true })
  students: string[]; // studentIds
  @Prop({ required: true })
  status: 'planned' | 'active' | 'completed';
}
export const GroupSchema = SchemaFactory.createForClass(Group);
