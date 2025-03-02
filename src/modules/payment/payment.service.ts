import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment } from './models/payment.model';
import { Model } from 'mongoose';
import CreatePaymentDto from './dto/payment.dto';

@Injectable()
class PaymentService {
  constructor(
    @InjectModel(Payment.name) private readonly paymentModel: Model<Payment>,
  ) {}
  async addPayment(body: CreatePaymentDto) {
    const data = await this.paymentModel.create({
      ...body,
      status: 'completed',
    });
    return data;
  }
}

export default PaymentService;
