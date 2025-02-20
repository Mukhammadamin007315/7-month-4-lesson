import { HttpException, Injectable } from '@nestjs/common';
import CreateUserDto from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  getUsers() {}
  async addUser(userDto: CreateUserDto) {
    const findUser = await this.userModel.findOne({
      username: userDto.username,
    });
    if (!findUser) {
      const user = await this.userModel.create(userDto);
      const token = this.jwtService.sign({ user_id: user._id });
      return token;
    }
    throw new HttpException('username already been existed', 400);
  }
}
export default UsersService;
