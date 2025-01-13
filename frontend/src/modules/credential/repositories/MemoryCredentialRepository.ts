import { Credential } from "../core/domain/Credential";
import { CredentialRepository } from "../core/domain/CredentialRepository";

export class MemoryCredentialRepository implements CredentialRepository {
  private items: Map<string, Credential> = new Map();

  constructor() {
    this.add(new Credential("Site", "Usuário x", "1234", crypto.randomUUID()));
  }

  async add(entity: Credential): Promise<void> {
    this.items.set(entity.id ?? "", entity);
  }

  async all(): Promise<Credential[]> {
    return Array.from(this.items.values());
  }
}
