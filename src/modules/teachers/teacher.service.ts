import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './models/teacher.model';
import { Model } from 'mongoose';
import CreateTeacherDto from './dto/teacher.dto';

@Injectable()
class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
  ) {}
  async addTeacher(body: CreateTeacherDto) {
    const findTeacher = await this.teacherModel.findOne({
      fullName: body.fullName,
    });
    if (findTeacher) {
      throw new ConflictException('teacher already been existed');
    }
    const createTeacher = await this.teacherModel.create(body);
    return createTeacher;
  }
  async getTeacherById(teacherId: any) {}
}

export default TeachersService;
