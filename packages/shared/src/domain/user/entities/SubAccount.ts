import { BaseEntity } from "@/domain/core/entities/BaseEntity";
import { Guid } from "@/domain/core/value-objects/Guid";
import { MainAccount } from "@/domain/user/entities/MainAccount";
import { User } from "@/domain/user/entities/User";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";

type SubAccountProps = {
  user: User;
  mainAccount: MainAccount;
  name: Name;
};

export class SubAccount extends BaseEntity<SubAccountProps> {
  constructor(props: SubAccountProps, id?: Guid) {
    super(props, id);
    this.addNotifications([
      ...this._props.user.notifications,
      ...this._props.mainAccount.notifications,
      ...this._props.name.notifications,
    ]);
  }

  public get email(): Email {
    return this._props.user.email;
  }

  public get name(): Name {
    return this._props.name;
  }

  public get userId(): Guid {
    return this._props.user.id;
  }

  public get mainAccountId(): Guid {
    return this._props.mainAccount.id;
  }

  public get password(): Password {
    return this._props.user.password;
  }
}
