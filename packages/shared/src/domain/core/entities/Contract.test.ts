import { Contract } from "./Contract";

describe("Contract tests", () => {
  let contract: Contract;

  beforeEach(() => {
    contract = new Contract();
  });

  it("should add a notification if value is empty string on isRequired", () => {
    contract.isRequired("", "name", "Name is required");
    expect(contract.notifications.length).toBe(1);
    expect(contract.notifications[0]).toEqual({
      property: "name",
      message: "Name is required",
    });
  });

  it("should add a notification if value is empty array on isRequired", () => {
    contract.isRequired([], "items", "Items are required");
    expect(contract.notifications.length).toBe(1);
    expect(contract.notifications[0]).toEqual({
      property: "items",
      message: "Items are required",
    });
  });

  it("should add a notification if value is falsy on isRequired", () => {
    contract.isRequired(null, "age", "Age is required");
    expect(contract.notifications.length).toBe(1);
    expect(contract.notifications[0]).toEqual({
      property: "age",
      message: "Age is required",
    });
  });

  it("should not add a notification if value is not empty string on isRequired", () => {
    contract.isRequired("John", "name", "Name is required");
    expect(contract.notifications.length).toBe(0);
    expect(contract.notifications).toEqual([]);
  });

  it("should add a notification if value is null", () => {
    contract.isNotNull(null, "age", "Age is required");
    expect(contract.notifications.length).toBe(1);
    expect(contract.notifications[0]).toEqual({
      property: "age",
      message: "Age is required",
    });
  });

  it("should not add a notification when the string is not empty", () => {
    const value = "Hello";
    const property = "name";
    const message = "Name should not be empty";

    contract.isNotEmptyString(value, property, message);

    expect(contract.notifications).toEqual([]);
  });

  it("should add a notification when the string is empty", () => {
    const value = "";
    const property = "name";
    const message = "Name should not be empty";

    contract.isNotEmptyString(value, property, message);

    expect(contract.notifications).toEqual([
      { property: "name", message: "Name should not be empty" },
    ]);
  });

  it("should add a notification when the string contains only whitespace characters", () => {
    const value = "   ";
    const property = "name";
    const message = "Name should not be empty";

    contract.isNotEmptyString(value, property, message);

    expect(contract.notifications).toEqual([
      { property: "name", message: "Name should not be empty" },
    ]);
  });

  it("should add a notification when the string is null or empty", () => {
    contract.isNotNullOrEmptyString("", "empty string", "is empty string");
    contract.isNotNullOrEmptyString(null, "null value", "is null value");

    expect(contract.notifications.length).toBe(2);
    expect(contract.notifications).toContainEqual({
      property: "empty string",
      message: "is empty string",
    });
    expect(contract.notifications).toContainEqual({
      property: "null value",
      message: "is null value",
    });
  });
});
