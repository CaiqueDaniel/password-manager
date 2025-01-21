import { CreateCredential } from "~/modules/credential/core/application/CreateCredential";
import { MemoryCredentialRepository } from "~/modules/credential/repositories/MemoryCredentialRepository";

describe("CreateCredential unit tests", () => {
  let sut: CreateCredential;
  let repository: MemoryCredentialRepository;

  beforeAll(() => {
    repository = new MemoryCredentialRepository();
    sut = new CreateCredential(repository);
  });

  beforeEach(() => {
    repository.clear();
  });

  it("should be able to create a credential", async () => {
    await sut.execute({
      origin: "origin",
      username: "username",
    });

    expect(await repository.all()).toHaveLength(1);
  });
});
