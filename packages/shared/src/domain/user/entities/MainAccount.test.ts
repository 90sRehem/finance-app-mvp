import { MainAccount } from "@/domain/user/entities/MainAccount";
import { Email } from "@/domain/user/valueObjects/Email";
import { Name } from "@/domain/user/valueObjects/Name";
import { Password } from "@/domain/user/valueObjects/Password";
import { MainAccountFactory } from "@/tests/factories/mainAccountFactory";

describe("MainAccount tests", () => {
  it("should create a MainAccount", () => {
    const mainAccount = MainAccountFactory.create();
    expect(mainAccount).toBeInstanceOf(MainAccount);
    expect(mainAccount).toHaveProperty("id");
    expect(mainAccount.isValid()).toBe(true);
  });

  it("should not be able to create a MainAccount with invalid data", () => {
    const invalidMainAccount = MainAccountFactory.create({
      email: new Email({ address: "" }),
      password: new Password({ value: "" }),
      name: new Name({ firstName: "", lastName: "" }),
    });
    expect(invalidMainAccount.isInvalid()).toBe(true);
  });
});
