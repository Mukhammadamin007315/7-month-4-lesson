import { Module } from '@nestjs/common';
import GroupController from './group.controller';
import GroupsService from './group.service';
import { Group, GroupSchema } from './models/group.model';
import { MongooseModule } from '@nestjs/mongoose';
import StudentModule from '../student/student.module';

@Module({
  imports: [
    StudentModule,
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  controllers: [GroupController],
  providers: [GroupsService],
  exports: [MongooseModule],
})
class GroupModule {}

export default GroupModule;
