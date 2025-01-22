import { useEffect, useState } from "react";
import { BusSubscriber } from "../../core/application/BusSubscriber";

export function useEventBus({ bus, eventName }: Props) {
  const [eventId, setEventId] = useState<string>(crypto.randomUUID());

  useEffect(
    () => bus.subscribe(eventName, () => setEventId(crypto.randomUUID())),
    []
  );

  return eventId;
}

type Props = {
  bus: BusSubscriber;
  eventName: string;
};
