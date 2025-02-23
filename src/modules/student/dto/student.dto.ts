import {
  IsArray,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;
  @IsPhoneNumber('UZ')
  @IsNotEmpty()
  phone: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsInt()
  @IsNotEmpty()
  birthDate: number;
  @IsArray()
  @IsNotEmpty()
  courses: string[]; // kurslar ID lari
  status: 'active' | 'inactive';
}
export default CreateStudentDto;
