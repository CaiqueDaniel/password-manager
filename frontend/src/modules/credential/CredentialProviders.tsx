import { PropsWithChildren, useMemo } from "react";
import { ListCredential } from "./core/application/ListCredentials";
import { CredentialListContext } from "./features/CredentialList/CredentialListContext";
import { MemoryCredentialRepository } from "./repositories/MemoryCredentialRepository";
import { CreateCredential } from "./core/application/CreateCredential";
import { CredentialFormContext } from "./features/CredentialForm/CredentialFormContext";
import { EventBus } from "../shared/infra/services/EventBus";
import { useEventBus } from "../shared/infra/hooks/useEventBus";

export function CredentialProviders({ children }: PropsWithChildren) {
  const bus = EventBus.getInstance();
  const repository = useMemo(() => new MemoryCredentialRepository(), []);

  return (
    <CredentialListContext.Provider
      value={{
        listCredential: new ListCredential(repository),
        credentialListId: useEventBus({
          bus,
          eventName: "credential-list-updated",
        }),
      }}
    >
      <CredentialFormContext.Provider
        value={{
          createCredential: new CreateCredential(repository, bus),
        }}
      >
        {children}
      </CredentialFormContext.Provider>
    </CredentialListContext.Provider>
  );
}
