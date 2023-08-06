import { Contract } from "@/domain/core/entities/Contract";
import { ValueObject } from "@/domain/core/value-objects/ValueObject";

type NameProps = {
  firstName: string;
  lastName: string;
};

export class Name extends ValueObject<NameProps> {
  constructor(props: NameProps) {
    super(props);

    this.addNotification(
      new Contract()
        .isNotNull(props.firstName, "Name", "Name must not be null")
        .isNotNull(props.lastName, "Name", "Name must not be null"),
    );
  }
  /**
   * Get the first name.
   *
   * @return {string} The first name.
   */
  public get firstName(): string {
    return this._props.firstName;
  }

  /**
   * Sets the value of the firstName property.
   *
   * @param {string} value - The new value for the firstName property.
   */
  public set firstName(value: string) {
    this._props.firstName = value;
  }

  /**
   * Get the last name.
   *
   * @return {string} The last name.
   */
  get lastName(): string {
    return this._props.lastName;
  }

  /**
   * Sets the value of the lastName property.
   *
   * @param {string} value - The new value for the lastName property.
   */
  public set lastName(value: string) {
    this._props.lastName = value;
  }

  /**
   * Returns the full name of the person.
   *
   * @return {string} The full name of the person.
   */
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Updates the properties of the Name object with the provided values.
   *
   * @param {Partial<NameProps>} props - The partial object containing the properties to update.
   * @return {Name} - The updated Name object.
   */
  public update(props: Partial<NameProps>): Name {
    const firstName = props.firstName ?? this._props.firstName;
    const lastName = props.lastName ?? this._props.lastName;

    this._props.firstName = firstName;
    this._props.lastName = lastName;

    return this;
  }
}
