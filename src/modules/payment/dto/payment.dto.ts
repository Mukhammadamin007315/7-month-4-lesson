import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
enum Enum {
  cash,
  card,
}

class CreatePaymentDto {
  @IsMongoId()
  @IsNotEmpty()
  studentId: string;
  @IsMongoId()
  @IsNotEmpty()
  courseId: string;
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsString()
  @IsNotEmpty()
  @IsEnum(Enum)
  paymentType: 'cash' | 'card';
  status: 'pending' | 'completed' | 'cancelled';
}
export default CreatePaymentDto;
