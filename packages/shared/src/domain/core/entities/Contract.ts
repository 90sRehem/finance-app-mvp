import { Notification } from "./Notification";

export class Contract {
  private _notifications: Array<Notification> = new Array<Notification>();

  /**
   * Creates a new notification and adds it to the beginning of the notifications list.
   *
   * @param {string} property - The property to assign to the new notification.
   * @param {string} message - The message to assign to the new notification.
   * @return {void} This function does not return a value.
   */
  protected result(property: string, message: string): void {
    this._notifications.unshift(new Notification(property, message));
  }

  /**
   * Returns the notifications array.
   *
   * @return {Array<Notification>} The notifications array.
   */
  public get notifications(): Array<Notification> {
    return this._notifications;
  }

  /**
   * Checks if a value is required and adds a notification if it is empty.
   *
   * @param {unknown} value - The value to check if it is required.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The message to use for the notification.
   * @return {Contract} - The current Contract object.
   */
  public isRequired(
    value: unknown,
    property: string,
    message: string,
  ): Contract {
    const isEmptyString = typeof value === "string" && value.length === 0;
    const isEmptyArray = Array.isArray(value) && value.length === 0;

    if (!value || isEmptyString || isEmptyArray) {
      this._notifications.push(new Notification(property, message));
    }

    return this;
  }

  /**
   * Checks if the given value is not null.
   *
   * @param {unknown} value - The value to be checked.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to be displayed if the value is null.
   * @return {Contract} This method returns the current Contract instance.
   */
  public isNotNull(
    value: unknown,
    property: string,
    message: string,
  ): Contract {
    if (value === null) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if a given string is not empty.
   *
   * @param {string} value - The string to be checked.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to be returned if the string is empty.
   * @returns {Contract} - The current instance of the Contract class.
   */
  public isNotEmptyString(
    value: string,
    property: string,
    message: string,
  ): Contract {
    if (value.trim() === "") {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if a string is not null or empty.
   *
   * @param {string} value - The string to check.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to display if the string is null or empty.
   * @return {Contract} - The Contract object for method chaining.
   */
  public isNotNullOrEmptyString(
    value: string | null,
    property: string,
    message: string,
  ): Contract {
    if (!value) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if two values are equal and logs a result.
   *
   * @param {unknown} value1 - The first value to compare.
   * @param {unknown} value2 - The second value to compare.
   * @param {string} property - The property being compared.
   * @param {string} message - The message to log if the values are not equal.
   * @return {Contract} The current instance of the Contract class.
   */
  public areEquals(
    value1: unknown,
    value2: unknown,
    property: string,
    message: string,
  ): Contract {
    if (value1 !== value2) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if a given value is between the maximum and minimum values.
   *
   * @param {number} value - The value to be checked.
   * @param {number} max - The maximum value.
   * @param {number} min - The minimum value.
   * @param {string} property - The property name.
   * @param {string} message - The error message.
   * @return {Contract} The current contract instance.
   */
  public isBetweenMaxMin(
    value: number,
    max: number,
    min: number,
    property: string,
    message: string,
  ): Contract {
    const isValueOutOfRange = value <= min || value >= max;
    if (isValueOutOfRange) {
      this.result(property, message);
    }

    return this;
  }

  /**
   * Checks if the length of the given value is between the specified maximum and minimum values.
   *
   * @param {string} value - The value to be checked.
   * @param {number} max - The maximum length allowed.
   * @param {number} min - The minimum length allowed.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to be displayed if the length is not valid.
   * @return {Contract} - The current instance of the Contract object.
   */
  public isLengthBetweenMaxMin(
    value: string,
    max: number,
    min: number,
    property: string,
    message: string,
  ): Contract {
    const isLengthValid = value && value.length > min && value.length < max;
    if (!isLengthValid) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if a given string has a maximum length.
   *
   * @param {string} value - The string to be checked.
   * @param {number} maxLength - The maximum length allowed.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to be displayed if the string exceeds the maximum length.
   * @return {Contract} The current instance of the Contract class.
   */
  public hasMaxLength(
    value: string,
    maxLength: number,
    property: string,
    message: string,
  ): Contract {
    if (value && value.length > maxLength) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if a given string has a minimum length.
   *
   * @param {string} value - The string to check.
   * @param {number} minLength - The minimum length required.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to display if the string length is less than the minimum length.
   * @return {Contract} The current contract instance.
   */
  public hasMinLength(
    value: string,
    minLength: number,
    property: string,
    message: string,
  ): Contract {
    if (value && value.length < minLength) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if the given value is bigger than the minimum value.
   *
   * @param {number} value - The value to be checked.
   * @param {number} min - The minimum value.
   * @param {string} property - The name of the property.
   * @param {string} message - The error message.
   * @return {Contract} The current instance of the Contract class.
   */
  public isBiggerThan(
    value: number,
    min: number,
    property: string,
    message: string,
  ): Contract {
    if (value < min) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Checks if the given value is less than the specified maximum value.
   *
   * @param {number} value - The value to be checked.
   * @param {number} max - The maximum value.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to be displayed if the value is greater than the maximum.
   * @return {Contract} The current instance of the Contract class.
   */
  public isLessThan(
    value: number,
    max: number,
    property: string,
    message: string,
  ): Contract {
    if (value > max) {
      this.result(property, message);
    }

    return this;
  }

  /**
   * Checks if the length of a given value is exactly equal to a specified size.
   *
   * @param {string} value - The value to check the length of.
   * @param {number} size - The size that the value's length should be equal to.
   * @param {string} property - The name of the property being validated.
   * @param {string} message - The error message to display if the value's length is not equal to the specified size.
   * @return {Contract} The current instance of the Contract class.
   */
  public isExactlyLength(
    value: string,
    size: number,
    property: string,
    message: string,
  ): Contract {
    if (value && value.length !== size) {
      this.result(property, message);
    }
    return this;
  }

  /**
   * Validates the provided email and triggers a result if it is invalid.
   *
   * @param {string} email - The email to be validated.
   * @param {string} property - The property name for the result.
   * @param {string} message - The message for the result.
   * @return {Contract} - The current instance of the Contract class.
   */
  public validateEmail(
    email: string,
    property: string,
    message: string,
  ): Contract {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isEmailValid) {
      this.result(property, message);
    }

    return this;
  }

  /**
   * Determines if the given value is a valid URL.
   *
   * @param {string} value - The value to be checked.
   * @param {string} property - The name of the property being checked.
   * @param {string} message - The error message to be used if the value is not a valid URL.
   * @returns {Contract} The current instance of the Contract class.
   */
  public isUrl(value: string, property: string, message: string): Contract {
    const urlRegex = new RegExp(
      /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d+))?(\/[-a-z\d%_.~+]*)?(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i,
    );

    if (value && !urlRegex.test(value)) {
      this.result(property, message);
    }

    return this;
  }

  /**
   * Checks if the given value is a valid URL.
   *
   * @param {string} value - The value to be checked.
   * @param {string} property - The name of the property being validated.
   * @param {string} message - The error message to be displayed if the value is not a valid URL.
   * @return {Contract} The current instance of the Contract object.
   */
  public isNotUrl(value: string, property: string, message: string): Contract {
    const urlRegex = new RegExp(
      /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:(\d+))?(\/[-a-z\d%_.~+]*)?(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i,
    );

    if (value && urlRegex.test(value)) {
      this.result(property, message);
    }

    return this;
  }

  /**
   * Checks if a given value is alphanumeric.
   *
   * @param {string} value - The value to be checked.
   * @param {string} property - The property being checked.
   * @param {string} message - The error message to be displayed if the value is not alphanumeric.
   * @return {Contract} The current instance of the Contract class.
   */
  public isAlphanumeric(
    value: string,
    property: string,
    message: string,
  ): Contract {
    const alphanumericRegex = /^[a-z0-9]+$/i;
    const isAlphanumeric = alphanumericRegex.test(value);

    if (isAlphanumeric) {
      this.result(property, message);
    }

    return this;
  }

  public isNumber(value: number, property: string, message: string): Contract {
    if (!Number.isNaN(value)) {
      this.result(property, message);
    }
    return this;
  }

  public isEmail(value: string, property: string, message: string): Contract {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!isEmailValid) {
      this.result(property, message);
    }
    return this;
  }
}
