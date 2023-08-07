import { Guid } from "@/domain/core/value-objects/Guid";
import { User, type UserProps } from "@/domain/user/entities/User";
import { Email } from "@/domain/user/valueObjects/Email";
import { Password } from "@/domain/user/valueObjects/Password";
import { faker } from "@faker-js/faker";

export class UserFactory {
  static create(propsToOverride: Partial<UserProps> = {}, id?: Guid): User {
    const user = new User(
      {
        email: new Email({
          address: faker.internet.email(),
        }),
        password: new Password({
          value: faker.internet.password(),
        }),
        ...propsToOverride,
      },
      id,
    );

    return user;
  }
}
