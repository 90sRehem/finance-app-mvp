import { Guid } from "../value-objects/Guid";
import { Notifiable } from "./Notifiable";

/**
 * Represents a base entity.
 *
 * @template Props - The type of properties associated with the entity.
 */
export abstract class BaseEntity<Props> extends Notifiable {
  private _id: Guid;
  protected _props: Props;
  private _createdAt: Date;
  private _updatedAt?: Date;

  /**
   * Creates an instance of BaseEntity.
   *
   * @param {Props} props - The properties of the entity.
   * @param {Guid} id - The id of the entity (optional).
   */
  public constructor(props: Props, id?: Guid) {
    super();
    this._id = id ?? Guid.create();
    this._props = props;
    this._createdAt = new Date();
  }

  /**
   * Get the id of the entity.
   *
   * @return {Guid} The id of the entity.
   */
  get id(): Guid {
    return this._id;
  }

  /**
   * Get the created date of the entity.
   *
   * @return {Date} The created date of the entity.
   */
  get createdAt(): Date {
    return this._createdAt;
  }

  /**
   * Get the updated date of the entity.
   *
   * @return {Date} The updated date of the entity.
   */
  get updatedAt(): Date | undefined {
    return this._updatedAt;
  }

  /**
   * Update the updatedAt property with the current date and time.
   */
  public touch(): void {
    this._updatedAt = new Date();
  }

  /**
   * Check if this entity is equal to another entity.
   *
   * @param {BaseEntity<Props>} entity - The entity to compare.
   * @return {boolean} True if the entities are equal, false otherwise.
   */
  public equals(entity?: BaseEntity<Props>): boolean {
    if (entity === this) return true;
    if (entity?._id === this._id) return true;
    return false;
  }
}
