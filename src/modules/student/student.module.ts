import { Module } from '@nestjs/common';
import StudentService from './student.service';
import StudentController from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './models/student.model';
import PaymentModule from '../payment/payment.module';

@Module({
  imports: [
    PaymentModule,
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
class StudentModule {}
export default StudentModule;
