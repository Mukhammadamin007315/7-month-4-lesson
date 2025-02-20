import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
enum UserRole {
  user,
  admin,
  superadmin,
}
class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  username: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsEnum(UserRole)
  @IsNotEmpty()
  @IsString()
  role: string;
  @IsNumber()
  balance: number;
}
export default CreateUserDto;
