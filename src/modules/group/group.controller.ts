import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Post,
} from '@nestjs/common';
import CreateGroupDto from './dto/group.dto';
import GroupsService from './group.service';

@Controller()
class GroupController {
  constructor(private readonly groupService: GroupsService) {}
  @Post('groups')
  async addGroup(@Body() body: CreateGroupDto) {
    try {
      const data = await this.groupService.addGroup(body);
      return {
        status: true,
        data: data,
        message: 'group muvaffaqiyatli yaratildi',
      };
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
  @Post('groups/:groupId/students')
  async addStudentToGroup(
    @Body() studentId: string,
    @Param('groupId') groupId: string,
  ) {
    try {
      const data = await this.groupService.addStudentToGroup(
        studentId,
        groupId,
      );
      return {
        status: true,
        data: { group: data },
        message: "Talaba guruhga muvaffaqiyatli qo'shildi",
      };
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
}
export default GroupController;
