import { BusDispacher } from "../../core/application/BusDispacher";
import {
  BusSubscriber,
  BusHandler,
} from "../../core/application/BusSubscriber";

export class EventBus implements BusSubscriber, BusDispacher {
  private readonly handlers = new Map<string, BusHandler[]>();
  private static instance?: EventBus;

  private constructor() {}

  static getInstance() {
    if (EventBus.instance) return EventBus.instance;
    EventBus.instance = new EventBus();
    return EventBus.instance;
  }

  subscribe(name: string, handler: BusHandler): void {
    const handlers = this.handlers.get(name) ?? [];

    handlers.push(handler);
    this.handlers.set(name, handlers);
    console.log(this.handlers);
  }

  dispatch(name: string, message?: any): void {
    const handlers = this.handlers.get(name) ?? [];
    handlers.forEach((handler) => handler(message));
  }

  clear() {
    this.handlers.clear();
  }
}
