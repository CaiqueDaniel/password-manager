import { createContext } from "react";
import { useContextHandler } from "../../../shared/infra/hooks/useContextHandler";
import { CreateCredential } from "../../core/application/CreateCredential";

export const CredentialFormContext = createContext<Context | undefined>(
  undefined
);

export function useCredentialFormContext() {
  return useContextHandler<Context>(CredentialFormContext);
}

type Context = {
  createCredential: CreateCredential;
};
