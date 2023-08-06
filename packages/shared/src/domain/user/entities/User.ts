import { BaseEntity } from "@/domain/core/entities/BaseEntity";
import { Guid } from "@/domain/core/value-objects/Guid";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";

export interface UserProps {
  name: Name;
  email: Email;
  password: Password;
}

export class User extends BaseEntity<UserProps> {
  constructor(props: UserProps, id?: Guid) {
    super(props, id);
    this.addNotifications([
      ...this._props.name.notifications,
      ...this._props.email.notifications,
      ...this._props.password.notifications,
    ]);
  }

  get name(): Name {
    return this._props.name;
  }

  public set name(value: Partial<Name>) {
    this._props.name.firstName = value.firstName || this._props.name.firstName;
    this._props.name.lastName = value.lastName || this._props.name.lastName;
    this.touch();
  }

  // public updateName(name: Partial<{ firstName: string; lastName: string }>) {
  //   const updatedName = this._props.name.update(name);
  //   this._props.name = updatedName;
  //   this.touch();
  // }

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
