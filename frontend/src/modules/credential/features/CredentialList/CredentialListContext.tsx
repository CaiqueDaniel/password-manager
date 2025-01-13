import { createContext } from "react";
import { useContextHandler } from "../../../shared/infra/hooks/useContextHandler";
import { ListCredential } from "../../core/application/ListCredentials";

export const CredentialListContext = createContext<Context | undefined>(
  undefined
);

export function useCredentialListContext() {
  return useContextHandler<Context>(CredentialListContext);
}

type Context = {
  listCredential: ListCredential;
};
