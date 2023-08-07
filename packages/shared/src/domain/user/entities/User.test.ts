import { Email } from "@/domain/user/valueObjects/Email";
import { Password } from "@/domain/user/valueObjects/Password";
import { UserFactory } from "@/tests/factories/userFactory";

describe("User tests", () => {
  beforeEach(() => {});
  it("should be able to create a new User with valid data", () => {
    const user = UserFactory.create();
    expect(user).toHaveProperty("id");
    expect(user.isValid()).toBe(true);
  });

  it("should not be able to create a new User with invalid data", () => {
    const invalidUser = UserFactory.create({
      email: new Email({ address: "" }),
      password: new Password({ value: "" }),
    });
    expect(invalidUser.isInvalid()).toBe(true);
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

  it("should be able to update the email property", () => {
    const user = UserFactory.create();
    const updatedEmail = new Email({
      address: "john.doe@example.com",
    });
    user.email = updatedEmail;

    expect(user.email.address).toBe(updatedEmail.address);
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
