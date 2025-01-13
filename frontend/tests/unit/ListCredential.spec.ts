import { Mocked } from "vitest";
import { ListCredential } from "~/modules/credential/core/application/ListCredentials";
import { Credential } from "~/modules/credential/core/domain/Credential";
import { CredentialRepository } from "~/modules/credential/core/domain/CredentialRepository";

describe("ListCredential unit tests", () => {
  let sut: ListCredential;
  let repository: Mocked<CredentialRepository>;

  beforeAll(() => {
    repository = { add: vi.fn(), all: vi.fn() };
    sut = new ListCredential(repository);
  });

  it("should be able to list credentials", async () => {
    repository.all.mockImplementation(async () => [
      new Credential("origin", "username", "password"),
    ]);
    const result = await sut.execute();
    expect(result).toHaveLength(1);
  });
});
