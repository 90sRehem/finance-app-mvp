import { BaseEntity } from "@/domain/core/entities/BaseEntity";
import { Guid } from "@/domain/core/value-objects/Guid";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";

type AccountType = "main" | "sub";

export interface UserProps {
  name: Name;
  email: Email;
  password: Password;
  accountType: AccountType;
  mainAccountId?: Guid | null;
  subAccounts?: User[];
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

  public get accountType(): AccountType {
    return this._props.accountType;
  }

  public set accountType(value: AccountType) {
    this._props.accountType = value;
  }

  public get mainAccountId(): Guid | null {
    return this._props.mainAccountId ?? null;
  }

  private set mainAccountId(value: Guid | null) {
    this._props.mainAccountId = value;
  }

  public get subAccounts(): User[] {
    return this._props.subAccounts ?? [];
  }

  public set subAccounts(value: User[]) {
    this._props.subAccounts = value;
  }
}
