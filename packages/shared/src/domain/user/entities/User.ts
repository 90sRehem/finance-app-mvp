import { BaseEntity } from "@/domain/core/entities/BaseEntity";
import { Guid } from "@/domain/core/value-objects/Guid";
import { Email } from "@/domain/user/valueObjects/Email";
import { Password } from "@/domain/user/valueObjects/Password";

export interface UserProps {
  email: Email;
  password: Password;
}

export class User extends BaseEntity<UserProps> {
  constructor(props: UserProps, id?: Guid) {
    super(props, id);
    this.addNotifications([
      ...this._props.email.notifications,
      ...this._props.password.notifications,
    ]);
  }

  get email(): Email {
    return this._props.email;
  }

  public set email(value: Email) {
    this._props.email = value;
    this.touch();
  }

  get password(): Password {
    return this._props.password;
  }

  public set password(value: Password) {
    this._props.password = value;
    this.touch();
  }
}
