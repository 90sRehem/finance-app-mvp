import { randomUUID } from "node:crypto";

/**
 * Represents a globally unique identifier (GUID).
 */
export class Guid {
  private _value: string;

  /**
   * Initializes a new instance of the `Guid` class.
   * @param value The string value of the GUID.
   */
  constructor(value: string) {
    this._value = value;
  }

  /**
   * Returns the string representation of the GUID.
   * @returns The string representation of the GUID.
   */
  public toString(): string {
    return this._value.toString();
  }

  /**
   * Returns a new instance of the `Guid` class with the same value as the current instance.
   * @returns A new instance of the `Guid` class with the same value as the current instance.
   */
  public toValue(): Guid {
    return new Guid(this._value);
  }

  /**
   * Generates a new GUID.
   * @returns A new instance of the `Guid` class with a randomly generated value.
   */
  static create(): Guid {
    const value = randomUUID();
    return new Guid(value);
  }

  /**
   * Determines whether the specified `Guid` object is equal to the current `Guid` object.
   * @param id The `Guid` object to compare with the current `Guid` object.
   * @returns `true` if the specified `Guid` object is equal to the current `Guid` object; otherwise, `false`.
   */
  public equals(id: Guid): boolean {
    if (id._value === this._value) return true;

    return false;
  }
}
