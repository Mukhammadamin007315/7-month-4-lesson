import { Module } from '@nestjs/common';
import GroupController from './group.controller';
import GroupsService from './group.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './models/group.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  controllers: [GroupController],
  providers: [GroupsService],
})
class GroupModule {}

export default GroupModule;
