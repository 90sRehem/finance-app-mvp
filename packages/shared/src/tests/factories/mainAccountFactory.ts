import { Guid } from "@/domain/core/value-objects/Guid";
import {
  MainAccount,
  type MainAccountProps,
} from "@/domain/user/entities/MainAccount";
import { Name } from "@/domain/user/valueObjects/Name";
import { UserFactory } from "@/tests/factories/userFactory";
import { faker } from "@faker-js/faker";

export class MainAccountFactory {
  static create(
    propsToOverride: Partial<MainAccountProps> = {},
    id?: Guid,
  ): MainAccount {
    const mainAccount = new MainAccount(
      {
        name: new Name({
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
        }),
        user: UserFactory.create(),
        subAccounts: [],
        ...propsToOverride,
      },
      id,
    );

    return mainAccount;
  }
}
