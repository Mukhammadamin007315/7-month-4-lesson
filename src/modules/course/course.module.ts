import { Module } from '@nestjs/common';
import CourseService from './course.service';
import CourseController from './course.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './models/course.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
class CourseModule {}
export default CourseModule;
