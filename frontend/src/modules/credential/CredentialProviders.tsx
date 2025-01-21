import { PropsWithChildren } from "react";
import { ListCredential } from "./core/application/ListCredentials";
import { CredentialListContext } from "./features/CredentialList/CredentialListContext";
import { MemoryCredentialRepository } from "./repositories/MemoryCredentialRepository";
import { CreateCredential } from "./core/application/CreateCredential";
import { CredentialFormContext } from "./features/CredentialForm/CredentialFormContext";

export function CredentialProviders({ children }: PropsWithChildren) {
  const repository = new MemoryCredentialRepository();

  return (
    <CredentialListContext.Provider
      value={{
        listCredential: new ListCredential(repository),
      }}
    >
      <CredentialFormContext.Provider
        value={{ createCredential: new CreateCredential(repository) }}
      >
        {children}
      </CredentialFormContext.Provider>
    </CredentialListContext.Provider>
  );
}
