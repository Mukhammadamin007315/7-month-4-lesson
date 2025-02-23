import {
  IsArray,
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  Max,
  Min,
} from 'class-validator';

class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsMongoId()
  @IsNotEmpty()
  courseId: string;
  @IsMongoId()
  @IsNotEmpty()
  teacherId: string;
  @IsObject()
  @IsNotEmpty()
  schedule: {
    days: (
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'saturday'
      | 'sunday'
    )[];
    startTime: string; // "14:00"
    endTime: string; // "16:00"
  };
  @IsNumber()
  @IsNotEmpty()
  @Min(10)
  @Max(25)
  maxStudents: number;
  @IsInt()
  @IsNotEmpty()
  startDate: Date;
  @IsInt()
  @IsNotEmpty()
  endDate: Date;
  @IsArray()
  @IsNotEmpty()
  students: string[]; // studentIds
  status: 'planned' | 'active' | 'completed';
}
export default CreateGroupDto;
