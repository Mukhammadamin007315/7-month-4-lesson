import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Payment, PaymentSchema } from './models/payment.model';
import PaymentController from './payment.controller';
import PaymentService from './payment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
  exports: [MongooseModule],
})
class PaymentModule {}

export default PaymentModule;
