import { Guid } from "@/domain/core/value-objects/Guid";
import { User, type UserProps } from "@/domain/user/entities/User";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";
import { faker } from "@faker-js/faker";

export class UserFactory {
  static create(propsToOverride: Partial<UserProps> = {}, id?: Guid): User {
    const user = new User(
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
        accountType: "main",
        mainAccountId: null,
        subAccounts: [],
        ...propsToOverride,
      },
      id,
    );

    return user;
  }
}
