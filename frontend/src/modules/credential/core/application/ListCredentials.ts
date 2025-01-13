import { UseCase } from "../../../shared/core/application/UseCase";
import { CredentialRepository } from "../domain/CredentialRepository";

export class ListCredential implements UseCase<void, Promise<Output>> {
  constructor(private readonly repository: CredentialRepository) {}

  async execute(): Promise<Output> {
    return (await this.repository.all()).map((item) => {
      return { ...item };
    });
  }
}

export type Input = {};
export type Output = Record<string, string>[];
