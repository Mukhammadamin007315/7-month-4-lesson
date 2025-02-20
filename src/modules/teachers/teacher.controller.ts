import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateTeacherDto from './dto/teacher.dto';
import TeachersService from './teacher.service';

@Controller()
class TeachersController {
  constructor(private readonly teacherService: TeachersService) {}
  @Post('teachers')
  async addTeacher(@Body() data: CreateTeacherDto) {
    const teachers = await this.teacherService.addTeacher(data);
    return {
      status: true,
      data: teachers,
      message: 'Oqituvchi muvaffaqiyatli yaratildi',
    };
  }

  @Get('teachers/:teacherId/courses')
  async getTeacherById(@Param('teacherId') teacherId: any) {
    return;
  }
}
export default TeachersController;
