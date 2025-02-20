import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './models/course.model';
import { Model } from 'mongoose';
import CreateCourseDto from './dto/course.dto';

@Injectable()
class CourseService {
  constructor(
    @InjectModel(Course.name) private readonly courseModel: Model<Course>,
  ) {}
  async addCourse(body: CreateCourseDto) {
    const findCourse = await this.courseModel.findOne({ name: body.name });
    if (findCourse) {
      throw new ConflictException('course already been existed');
    }
    const createCourse = await this.courseModel.create(body);
    return createCourse;
  }
}
export default CourseService;
