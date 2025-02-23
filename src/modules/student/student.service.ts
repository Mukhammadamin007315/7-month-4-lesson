import { BadRequestException, Injectable } from '@nestjs/common';
import CreateStudentDto from './dto/student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './models/student.model';
import { Model } from 'mongoose';

@Injectable()
class StudentService {
  constructor(
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
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
}
export default StudentService;
