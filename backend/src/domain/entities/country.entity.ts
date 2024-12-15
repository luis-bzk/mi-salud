export class Country {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public prefix: string,
    public created_date: Date,
    public record_status: string,
  ) {}
}