import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import CreateStudentDto from './dto/student.dto';
import StudentService from './student.service';

@Controller()
class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Post('students')
  async addStudent(@Body() body: CreateStudentDto) {
    try {
      const data = await this.studentService.addStudent(body);
      return {
        status: true,
        data: data,
        message: 'Talaba muvaffaqiyatli yaratildi',
      };
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
  @Get('students/:studentId/payments')
  async getStudentPaymentsById(@Param('studentId') studentId: string) {
    try {
      const data = await this.studentService.getStudentPaymentsById(studentId);
      return data;
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
}

export default StudentController;
