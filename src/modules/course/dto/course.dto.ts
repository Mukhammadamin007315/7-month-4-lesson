import {
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(15)
  name: string;
  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  description: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNumber()
  @IsNotEmpty()
  duration: number; //oylarda
  @IsNumber()
  @IsNotEmpty()
  maxStudents: number;
  @IsInt()
  @IsNotEmpty()
  startDate: number;
  status: 'active' | 'inactive';
}
export default CreateCourseDto;
