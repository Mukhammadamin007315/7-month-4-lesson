import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import PaymentService from './payment.service';
import CreatePaymentDto from './dto/payment.dto';

@Controller()
class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Post('payments')
  async addPayment(@Body() body: CreatePaymentDto) {
    try {
      const data = await this.paymentService.addPayment(body);
      return {
        status: true,
        data: data,
        message: "To'lov muvaffaqiyatli yaratildi",
      };
    } catch ({ message }) {
      throw new BadRequestException(message);
    }
  }
}

export default PaymentController;
