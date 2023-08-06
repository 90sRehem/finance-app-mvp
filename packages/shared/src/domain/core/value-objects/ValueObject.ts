import { Notifiable } from "@/domain/core/entities/Notifiable";
import { IValueObject } from "@/domain/core/interfaces/IValueObject";

export abstract class ValueObject<T extends IValueObject> extends Notifiable {
  protected readonly _props: T;

  constructor(props: T) {
    super();
    this._props = props;
  }
}
