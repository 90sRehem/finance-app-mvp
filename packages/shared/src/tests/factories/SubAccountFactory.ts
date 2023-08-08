import { Guid } from "@/domain/core/value-objects/Guid";
import { MainAccount } from "@/domain/user/entities/MainAccount";
import {
  SubAccount,
  type SubAccountProps,
} from "@/domain/user/entities/SubAccount";
import { User } from "@/domain/user/entities/User";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";
import { faker } from "@faker-js/faker";

const user = new User({
  email: new Email({
    address: faker.internet.email(),
  }),
  password: new Password({
    value: faker.internet.password(),
  }),
});

const mainAccount = new MainAccount(
  {
    name: new Name({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    }),
    email: new Email({
      address: faker.internet.email(),
    }),
    password: new Password({
      value: faker.internet.password(),
    }),
    userId: user.id,
  },
  Guid.create(),
);

export class SubAccountFactory {
  static create(
    propsToOverride: Partial<SubAccountProps> = {},
    id?: Guid,
  ): SubAccount {
    const subAccount = new SubAccount(
      {
        name: new Name({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        }),
        mainAccount,
        user,
        ...propsToOverride,
      },
      id,
    );

    return subAccount;
  }
}
