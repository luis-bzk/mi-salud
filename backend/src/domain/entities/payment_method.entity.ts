export class PaymentMethod {
  constructor(
    public id: number,
    public image: string,
    public name: string,
    public description: string,
    public created_date: Date,
    public record_status: string,
  ) {}
}
