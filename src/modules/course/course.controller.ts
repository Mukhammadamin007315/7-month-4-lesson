import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import CourseService from './course.service';
import CreateCourseDto from './dto/course.dto';

@Controller()
class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Post('courses')
  async addCourse(@Body() body: CreateCourseDto) {
    try {
      const course = await this.courseService.addCourse(body);
      return {
        status: true,
        data: course,
        message: 'Kurs muvaffaqiyatli yaratildi',
      };
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
}
export default CourseController;
