import { Guid } from "@/domain/core/value-objects/Guid";
import {
  MainAccount,
  type MainAccountProps,
} from "@/domain/user/entities/MainAccount";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";
import { faker } from "@faker-js/faker";

export class MainAccountFactory {
  static create(
    propsToOverride: Partial<MainAccountProps> = {},
    id?: Guid,
  ): MainAccount {
    const mainAccount = new MainAccount(
      {
        email: new Email({
          address: faker.internet.email(),
        }),
        password: new Password({
          value: faker.internet.password(),
        }),
        name: new Name({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        }),
        userId: propsToOverride.userId || Guid.create(),
        ...propsToOverride,
      },
      id,
    );

    return mainAccount;
  }
}
