import { Credential } from "./Credential";

export interface CredentialRepository {
  add(entity: Credential): Promise<void>;
  all(): Promise<Credential[]>;
}
