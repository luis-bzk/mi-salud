export class UpdatePaymentMethodDto {
  public id: number;
  public image: string;
  public name: string;
  public description: string;

  constructor(id: number, image: string, name: string, description: string) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
  }

  static create(
    params: { [key: string]: string },
    body: { [key: string]: any },
  ): [string?, UpdatePaymentMethodDto?] {
    const { id } = params;
    const { image, name, description } = body;

    const parsedId = parseInt(id, 10);

    if (!id) return ['El ID es requerido'];
    if (isNaN(parsedId)) return ['El ID no es valido'];

    if (!image) return ['La imagen es requerida'];
    if (image.length > 1000)
      return ['La imagen no puede tener mas de 1000 caracteres'];

    if (!name) return ['El nombre es requerido'];
    if (name.length > 100)
      return ['El nombre no puede tener mas de 100 caracteres'];

    if (!description) return ['La descripción es requerida'];
    if (description.length > 300)
      return ['La descripción no puede tener mas de 100 caracteres'];

    return [
      undefined,
      new UpdatePaymentMethodDto(
        parsedId,
        image,
        name.toLowerCase(),
        description.toLowerCase(),
      ),
    ];
  }
}
