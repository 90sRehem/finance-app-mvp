import { MainAccount } from "@/domain/user/entities/MainAccount";
import { Name } from "@/domain/user/valueObjects/Name";
import { MainAccountFactory } from "@/tests/factories/mainAccountFactory";
import { UserFactory } from "@/tests/factories/userFactory";

describe("MainAccount tests", () => {
  it("should create a MainAccount", () => {
    const mainAccount = MainAccountFactory.create();
    expect(mainAccount).toBeInstanceOf(MainAccount);
    expect(mainAccount).toHaveProperty("id");
    expect(mainAccount.isValid()).toBe(true);
  });

  it("should not be able to create a MainAccount with invalid data", () => {
    const invalidMainAccount = MainAccountFactory.create({
      user: UserFactory.create(),
      name: new Name({ firstName: "", lastName: "" }),
    });
    expect(invalidMainAccount.isInvalid()).toBe(true);
  });
});
