import { BaseEntity } from "@/domain/core/entities/BaseEntity";
import { Guid } from "@/domain/core/value-objects/Guid";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";

export type MainAccountProps = {
  name: Name;
  email: Email;
  password: Password;
  userId: Guid;
};

export class MainAccount extends BaseEntity<MainAccountProps> {
  constructor(props: MainAccountProps, id?: Guid) {
    super(props, id);
    this.addNotifications([
      ...this._props.email.notifications,
      ...this._props.password.notifications,
      ...this._props.name.notifications,
    ]);
  }

  public get name(): Name {
    return this._props.name;
  }

  public set name(value: Partial<Name>) {
    this._props.name.firstName = value.firstName || this._props.name.firstName;
    this._props.name.lastName = value.lastName || this._props.name.lastName;
    this.touch();
  }

  public get email(): Email {
    return this._props.email;
  }

  public get password(): Password {
    return this._props.password;
  }

  public get userId(): Guid {
    return this._props.userId;
  }
}
