import { Email } from "@/domain/user/valueObjects/Email";

const validEmail = new Email({
  address: "test@example.com",
});

const invalidEmail = new Email({
  address: "",
});

describe("Email tests", () => {
  it("should create a valid email", () => {
    expect(validEmail.isInvalid()).toBe(false);
  });

  it("should throw an error for an invalid email", () => {
    expect(invalidEmail.isInvalid()).toBe(true);
  });
});
