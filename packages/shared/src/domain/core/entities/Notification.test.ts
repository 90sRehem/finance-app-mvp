import { Notification } from "@/domain/core/entities/Notification";

describe("Notification tests", () => {
  it("should create an instance of Notification", () => {
    const notification = new Notification("property1", "message1");
    expect(notification).to.be.an.instanceof(Notification);
  });

  it("should have the correct property value", () => {
    const notification = new Notification("property2", "message2");
    expect(notification.property).to.equal("property2");
  });

  it("should have the correct message value", () => {
    const notification = new Notification("property3", "message3");
    expect(notification.message).to.equal("message3");
  });
});
