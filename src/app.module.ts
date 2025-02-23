import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';

import TeacherModule from './modules/teachers/teacher.module';
import CourseModule from './modules/course/course.module';
import GroupModule from './modules/group/group.module';
import StudentModule from './modules/student/student.module';
import PaymentModule from './modules/payment/payment.module';
@Module({
  imports: [
    PaymentModule,
    StudentModule,
    GroupModule,
    TeacherModule,
    CourseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('db_url'),
        dbName: 'cisco',
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
