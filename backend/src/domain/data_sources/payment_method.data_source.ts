import {
  CreatePaymentMethodDto,
  DeletePaymentMethodDto,
  GetAllPaymentMethodsDto,
  GetPaymentMethodDto,
  UpdatePaymentMethodDto,
} from '../dtos/payment_method';
import { PaymentMethod } from '../entities';

export abstract class PaymentMethodDataSource {
  abstract create(
    createPaymentMethodDto: CreatePaymentMethodDto,
  ): Promise<PaymentMethod>;

  abstract update(
    updatePaymentMethodDto: UpdatePaymentMethodDto,
  ): Promise<PaymentMethod>;

  abstract get(
    getPaymentMethodDto: GetPaymentMethodDto,
  ): Promise<PaymentMethod>;

  abstract getAll(
    getAllPaymentMethodsDto: GetAllPaymentMethodsDto,
  ): Promise<PaymentMethod[]>;

  abstract delete(
    deletePaymentMethodDto: DeletePaymentMethodDto,
  ): Promise<PaymentMethod>;
}
