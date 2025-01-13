import { PropsWithChildren } from "react";
import { ListCredential } from "./core/application/ListCredentials";
import { CredentialListContext } from "./features/CredentialList/CredentialListContext";
import { MemoryCredentialRepository } from "./repositories/MemoryCredentialRepository";

export function CredentialProviders({ children }: PropsWithChildren) {
  return (
    <CredentialListContext.Provider
      value={{
        listCredential: new ListCredential(new MemoryCredentialRepository()),
      }}
    >
      {children}
    </CredentialListContext.Provider>
  );
}
