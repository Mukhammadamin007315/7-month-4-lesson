import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class User {
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop({ default: 0 })
  balance: number;
  @Prop()
  role: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
