import { Mocked } from "vitest";
import { CreateCredential } from "~/modules/credential/core/application/CreateCredential";
import { MemoryCredentialRepository } from "~/modules/credential/repositories/MemoryCredentialRepository";
import { BusDispacher } from "~/modules/shared/core/application/BusDispacher";

describe("CreateCredential unit tests", () => {
  let sut: CreateCredential;
  let repository: MemoryCredentialRepository;
  let dispatcher: Mocked<BusDispacher>;

  beforeAll(() => {
    dispatcher = { dispatch: vitest.fn() };
    repository = new MemoryCredentialRepository();
    sut = new CreateCredential(repository, dispatcher);
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
    expect(dispatcher.dispatch).toHaveBeenCalled();
  });
});
