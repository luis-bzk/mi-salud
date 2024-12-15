export class CreatePaymentMethodDto {
  public image: string;
  public name: string;
  public description: string;

  constructor(image: string, name: string, description: string) {
    this.image = image;
    this.name = name;
    this.description = description;
  }

  static create(body: {
    [key: string]: any;
  }): [string?, CreatePaymentMethodDto?] {
    const { image, name, description } = body;

    if (!image) return ['La imagen es requerida'];
    if (image.length > 1000)
      return ['La imagen no puede tener mas de 1000 caracteres'];

    if (!name) return ['El nombre es requerido'];
    if (name.length > 100)
      return ['El nombre no puede tener mas de 100 caracteres'];

    if (!description) return ['La descripción es requerida'];
    if (description.length > 300)
      return ['La descripción no puede tener mas de 100 caracteres'];

    return [undefined, new CreatePaymentMethodDto(image, name, description)];
  }
}
