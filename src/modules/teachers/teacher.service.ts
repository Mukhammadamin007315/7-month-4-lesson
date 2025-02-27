import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './models/teacher.model';
import mongoose, { Model } from 'mongoose';
import CreateTeacherDto from './dto/teacher.dto';
import { Group } from '../group/models/group.model';

@Injectable()
class TeachersService {
  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
    @InjectModel(Group.name) private readonly groupModel: Model<Group>,
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
  async getTeacherCoursesById(teacherId: any) {
    const courses = await this.groupModel.find({ teacherId });
    const total = courses.length;
    return { courses, total };
  }
}
export default TeachersService;
