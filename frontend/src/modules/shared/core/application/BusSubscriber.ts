export interface BusSubscriber {
  subscribe(name: string, handler: BusHandler): void;
}

export type BusHandler = (message?: any) => void;
