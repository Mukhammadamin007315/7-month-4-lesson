import { BadRequestException, Injectable } from '@nestjs/common';
import CreateStudentDto from './dto/student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './models/student.model';
import mongoose, { Model } from 'mongoose';
import { Payment } from '../payment/models/payment.model';

@Injectable()
class StudentService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
  ) {}
  async addStudent(body: CreateStudentDto) {
    const findStudent = await this.studentModel.findOne({
      fullName: body.fullName,
    });
    if (findStudent) {
      throw new BadRequestException('student already been existed');
    }
    const data = await this.studentModel.create(body);
    return data;
  }
  async getStudentPaymentsById(studentId: string) {
    const objectId = new mongoose.Types.ObjectId(studentId);
    const findStudent = await this.paymentModel.aggregate([
      { $match: { studentId: new mongoose.Types.ObjectId(objectId) } },
      {
        $group: {
          _id: null,
          payments: { $push: '$$ROOT' },
          total: { $sum: 1 },
          totalAmount: { $sum: '$amount' },
        },
      },
      {
        $project: {
          _id: 0,
          success: { $literal: true },
          data: {
            payments: '$payments',
            total: '$total',
            totalAmount: '$totalAmount',
          },
        },
      },
    ]);
    return findStudent[0];
  }
}
export default StudentService;
