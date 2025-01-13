export class Credential {
  constructor(
    public readonly origin: string,
    public readonly username: string,
    public readonly password: string,
    public readonly id?: string
  ) {}
}
