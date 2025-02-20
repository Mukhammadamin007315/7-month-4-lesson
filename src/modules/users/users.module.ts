import { Module } from '@nestjs/common';
import UsersController from './users.controller';
import UsersService from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          global: true,
          secret: configService.get<string>('jwt_secret_key'),
          signOptions: { expiresIn: '1h' },
        };
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
class UsersModule {}
export default UsersModule;
