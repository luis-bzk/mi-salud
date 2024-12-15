export class GetProvinceDto {
  public id: number;

  constructor(id: number) {
    this.id = id;
  }

  static create(params: { [key: string]: string }): [string?, GetProvinceDto?] {
    const { id } = params;
    const parsedId = parseInt(id, 10);

    // make validation
    if (!id) return ['El ID de la provincia es requerido'];
    if (isNaN(parsedId)) return ['El ID de la provincia no es válido'];

    return [undefined, new GetProvinceDto(parsedId)];
  }
}