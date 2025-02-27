import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateGroupDto from './dto/group.dto';
import { Group } from './models/group.model';

@Injectable()
class GroupsService {
  constructor(
    @InjectModel(Group.name) private readonly groupModel: Model<Group>,
  ) {}
  async addGroup(body: CreateGroupDto) {
    const findGroup = await this.groupModel.findOne({ name: body.name });
    if (findGroup) {
      throw new BadRequestException('group already been existed');
    }
    const data = await this.groupModel.create(body);
    return data;
  }
  async addStudentToGroup(studentId: string, groupId: string) {
    const findStudentToGroup = await this.groupModel.findOne({
      students: studentId,
    });
    if (findStudentToGroup) {
      throw new BadRequestException('student already been existed');
    }
    const findGroupAndUpdate = await this.groupModel.findByIdAndUpdate(
      groupId,
      {
        $push: { students: studentId },
      },
      { returnDocument: 'after' },
    );
    return findGroupAndUpdate;
  }
}
export default GroupsService;
