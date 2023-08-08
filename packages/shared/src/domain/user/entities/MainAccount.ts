import { BaseEntity } from "@/domain/core/entities/BaseEntity";
import { Guid } from "@/domain/core/value-objects/Guid";
import { SubAccount } from "@/domain/user/entities/SubAccount";
import { User } from "@/domain/user/entities/User";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";

export type MainAccountProps = {
  name: Name;
  user: User;
  subAccounts: SubAccount[];
};

export class MainAccount extends BaseEntity<MainAccountProps> {
  constructor(props: MainAccountProps, id?: Guid) {
    super(props, id);
    this.addNotifications([
      ...this._props.user.notifications,
      ...this._props.name.notifications,
      ...this._props.subAccounts.flatMap(
        (subAccount) => subAccount.notifications,
      ),
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
    return this._props.user.email;
  }

  public get password(): Password {
    return this._props.user.password;
  }

  public get userId(): Guid {
    return this._props.user.id;
  }

  public get subAccounts(): SubAccount[] {
    return this._props.subAccounts;
  }

  public set subAccount(subAccount: SubAccount) {
    this._props.subAccounts.push(subAccount);
  }
}
