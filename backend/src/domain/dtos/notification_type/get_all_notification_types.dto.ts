import { IQuery } from '../../../utils';

export class GetAllNotificationTypesDto {
  public limit: number;
  public offset: number;

  constructor(limit: number, offset: number) {
    this.limit = limit;
    this.offset = offset;
  }

  static create(query: IQuery) {
    const { limit, offset } = query;

    const parsedLimit = limit
      ? isNaN(parseInt(limit, 10))
        ? null
        : parseInt(limit, 10)
      : null;

    const parsedOffset = offset
      ? isNaN(parseInt(offset, 10))
        ? null
        : parseInt(offset, 10)
      : null;

    return [
      undefined,
      new GetAllNotificationTypesDto(parsedLimit!, parsedOffset!),
    ];
  }
}
