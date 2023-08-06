import { Contract } from "@/domain/core/entities/Contract";
import { ValueObject } from "@/domain/core/value-objects/ValueObject";

interface EmailProps {
  address: string;
}

export class Email extends ValueObject<EmailProps> {
  constructor(props: EmailProps) {
    super(props);
    this.addNotification(
      new Contract()
        .isNotNull(props.address, "Email", "Email must not be null")
        .isEmail(props.address, "Email", "Email must be a valid email"),
    );
  }

  public get address(): string {
    return this._props.address;
  }
}
