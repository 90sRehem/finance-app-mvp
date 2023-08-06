import { Contract } from "@/domain/core/entities/Contract";
import { ValueObject } from "@/domain/core/value-objects/ValueObject";
import bcrypt from "bcrypt";

type PasswordProps = {
  value: string;
};

export class Password extends ValueObject<PasswordProps> {
  constructor(props: PasswordProps) {
    super(props);
    this.addNotification(
      new Contract()
        .isNotNull(props.value, "Password", "Password must not be null")
        .hasMinLength(
          props.value,
          6,
          "Password",
          "Password must be at least 6 characters long",
        ),
    );
    this.hashPassword(props.value);
  }

  /**
   * Get the value of the property.
   *
   * @return {string} The value of the property.
   */
  public get value(): string {
    return this._props.value;
  }

  /**
   * Hashes the given password and updates the value of `_props`.
   *
   * @param {string} password - The password to be hashed.
   * @return {Promise<void>} - A promise that resolves when the password is hashed.
   */
  private hashPassword(password: string): void {
    try {
      const hash = bcrypt.hashSync(password, 10);
      this._props.value = hash;
    } catch (error) {
      // @ts-expect-error error is unknown
      this.addNotification("error", error.message);
    }
  }

  /**
   * Compares a password with the stored value.
   *
   * @param {string} password - The password to compare.
   * @return {Promise<boolean>} A promise that resolves to true if the password matches the stored value, false otherwise.
   */
  public async compare(password: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, this._props.value);
    } catch (error) {
      // @ts-expect-error error is unknown
      this.addNotification("error", error.message);
      return false;
    }
  }
}
