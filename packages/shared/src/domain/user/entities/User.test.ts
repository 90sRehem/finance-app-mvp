import { Email } from "@/domain/user/valueObjects/Email";
import { Password } from "@/domain/user/valueObjects/Password";
import { Name } from "@/domain/user/valueObjects/Name";
import { UserFactory } from "@/domain/user/factories/userFactory";

describe("User tests", () => {
  beforeEach(() => {});
  it("should be able to create a new User with valid data", () => {
    const user = UserFactory.create();
    expect(user).toHaveProperty("id");
    expect(user.isValid()).toBe(true);
  });

  it("should not be able to create a new User with invalid data", () => {
    const invalidUser = UserFactory.create({
      name: new Name({ firstName: "", lastName: "" }),
      email: new Email({ address: "" }),
      password: new Password({ value: "" }),
    });
    expect(invalidUser.isInvalid()).toBe(true);
  });

  it("should get the firstName property", () => {
    const name = new Name({
      firstName: "John",
      lastName: "Doe",
    });
    const user = UserFactory.create({
      name,
    });
    expect(user.name.firstName).toBe(name.firstName);
  });

  it("should be able to update the name property", () => {
    const user = UserFactory.create();
    const updatedName = "Jane";
    user.name = { firstName: updatedName };

    expect(user.name.firstName).toBe(updatedName);
    expect(user).toHaveProperty("updatedAt");
    expect(user.updatedAt).toBeInstanceOf(Date);
  });

  it("should get the lastName property", () => {
    const user = UserFactory.create();
    user.name.update({
      lastName: "Doe",
    });
    expect(user.name.lastName).toBe("Doe");
  });

  it("should get the email property", () => {
    const email = new Email({
      address: "john.doe@example.com",
    });
    const user = UserFactory.create({
      email,
    });
    expect(user.email.address).toBe(email.address);
  });

  it("should get the password property", () => {
    const password = new Password({
      value: "123456",
    });
    const user = UserFactory.create({
      password,
    });
    expect(user.password.value).toBe(password.value);
  });

  it("should be able to update the password property", () => {
    const user = UserFactory.create();
    const updatedPassword = new Password({
      value: "123456",
    });
    user.password = updatedPassword;

    expect(user.password.value).toBe(updatedPassword.value);
  });
});
