import { UseCase } from "~/modules/shared/core/application/UseCase";
import { CredentialRepository } from "../domain/CredentialRepository";
import { Credential } from "../domain/Credential";

export class CreateCredential
  implements UseCase<CreateCredentialInput, Promise<void>>
{
  constructor(private readonly repository: CredentialRepository) {}

  async execute(input: CreateCredentialInput): Promise<void> {
    await this.repository.add(new Credential(input.origin, input.username));
  }
}

export type CreateCredentialInput = {
  origin: string;
  username: string;
};
