// TODO test the hash method

import { Password } from "@/domain/user/valueObjects/Password";

let password: Password;
const value = "123456";

describe("Password tests", () => {
  beforeAll(() => {
    password = new Password({
      value,
    });
  });

  it("should return true if the password matches the stored value", async () => {
    const result = await password.compare(value);

    expect(result).toBeTruthy();
  });

  it("should return false if the password does not match the stored value", async () => {
    const result = await password.compare("123457");

    expect(result).toBeFalsy();
  });
});
