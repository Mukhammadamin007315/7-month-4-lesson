import { Module } from '@nestjs/common';
import TeachersService from './teacher.service';
import TeachersController from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './models/teacher.model';
import GroupModule from '../group/group.module';

@Module({
  imports: [
    GroupModule,
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
  ],
  controllers: [TeachersController],
  providers: [TeachersService],
})
class TeacherModule {}
export default TeacherModule;
