import { Body, Controller, Get, Post } from '@nestjs/common';
import UsersService from './users.service';
import CreateUserDto from './dto/user.dto';

@Controller()
class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('users')
  getUsers() {
    return this.userService.getUsers();
  }
  @Post('user')
  async addUser(@Body() userDto: CreateUserDto) {
    const data = await this.userService.addUser(userDto);
    return data;
  }
}
export default UsersController;
