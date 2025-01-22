import { UseCase } from "~/modules/shared/core/application/UseCase";
import { CredentialRepository } from "../domain/CredentialRepository";
import { Credential } from "../domain/Credential";
import { BusDispacher } from "~/modules/shared/core/application/BusDispacher";

export class CreateCredential
  implements UseCase<CreateCredentialInput, Promise<void>>
{
  constructor(
    private readonly repository: CredentialRepository,
    private readonly bus: BusDispacher
  ) {}

  async execute(input: CreateCredentialInput): Promise<void> {
    await this.repository.add(new Credential(input.origin, input.username));
    this.bus.dispatch("credential-list-updated");
  }
}

export type CreateCredentialInput = {
  origin: string;
  username: string;
};
