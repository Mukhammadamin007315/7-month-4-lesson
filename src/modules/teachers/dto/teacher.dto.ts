import {
  IsArray,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

class CreateTeacherDto {
  @IsString()
  @MinLength(5)
  @IsNotEmpty()
  fullName: string;
  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  phone: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  subjects: string[];
  @IsNumber()
  @IsNotEmpty()
  salary: number;
  @IsNumber()
  @IsNotEmpty()
  @Min(3)
  experienceYears: number;
  status: 'active' | 'inactive';
}
export default CreateTeacherDto;
