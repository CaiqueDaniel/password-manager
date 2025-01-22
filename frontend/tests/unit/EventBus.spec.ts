import { EventBus } from "~/modules/shared/infra/services/EventBus";

describe("EventBus unit tests", () => {
  it("should be able to subscribe", () => {
    const sut = EventBus.getInstance();
    const testHandler = vitest.fn();

    sut.subscribe("test", testHandler);
    sut.dispatch("test");

    expect(testHandler).toHaveBeenCalled();
  });
});
