import { Guid } from "./Guid";

describe("Guid", () => {
  test("should create a new instance with the provided value", () => {
    const value = "123e4567-e89b-12d3-a456-426614174000";
    const guid = new Guid(value);

    expect(guid.toString()).toBe(value);
  });

  test("should generate a new instance with a random value", () => {
    const guid = Guid.create();

    expect(guid.toString()).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    );
  });

  test("should return a new instance with the same value", () => {
    const value = "123e4567-e89b-12d3-a456-426614174000";
    const guid1 = new Guid(value);
    const guid2 = guid1.toValue();

    expect(guid2).toBeInstanceOf(Guid);
    expect(guid2.toString()).toBe(value);
    expect(guid2).not.toBe(guid1);
  });

  test("should return true when comparing two equal Guid instances", () => {
    const value = "123e4567-e89b-12d3-a456-426614174000";
    const guid1 = new Guid(value);
    const guid2 = new Guid(value);

    expect(guid1.equals(guid2)).toBe(true);
  });

  test("should return false when comparing two different Guid instances", () => {
    const value1 = "123e4567-e89b-12d3-a456-426614174000";
    const value2 = "11111111-2222-3333-4444-555555555555";
    const guid1 = new Guid(value1);
    const guid2 = new Guid(value2);

    expect(guid1.equals(guid2)).toBe(false);
  });
});
