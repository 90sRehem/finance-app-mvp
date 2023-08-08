import { Name } from "@/domain/user/valueObjects/Name";
import { SubAccountFactory } from "@/tests/factories/SubAccountFactory";

describe("SubAccount tests", () => {
  it("should be able to create a new SubAccount with valid data", () => {
    const subAccount = SubAccountFactory.create();
    expect(subAccount).toHaveProperty("id");
    expect(subAccount.isValid()).toBe(true);
  });

  it("should not be able to create a new SubAccount with invalid data", () => {
    const invalidSubAccount = SubAccountFactory.create({
      name: new Name({ firstName: "", lastName: "" }),
    });
    expect(invalidSubAccount.isInvalid()).toBe(true);
  });

  it("should be able to update the password property", async () => {
    const subAccount = SubAccountFactory.create();
    const value = "newPassword";
    subAccount.updatePassword(value);
    const isEqual = await subAccount.password.compare(value);
    expect(isEqual).toBe(true);
  });

  it("should be able to update the email property", () => {
    const subAccount = SubAccountFactory.create();
    const value = "newEmail";
    subAccount.updateEmail(value);
    expect(subAccount.email.address).toBe(value);
  });

  it("should be able to update the name property", () => {
    const subAccount = SubAccountFactory.create();
    const firstName = "newName";
    subAccount.name.firstName = firstName;

    expect(subAccount.name.firstName).toBe(firstName);
  });
});
