import { CreateUserInput, UserCredentials } from "../../../domain/entities";
import { Gender } from "../../../domain/enums";
import { AxiosHttpClientFactory } from "../../../infra/factories/AxiosHttpClientFactory";
import { UserRepositoryImpl } from "./user";

describe("Api UserRepository", () => {
  const httpClient = AxiosHttpClientFactory.create(
    process.env.BASE_URL as string
  );

  const repository = new UserRepositoryImpl(httpClient);

  it("should create an user", async () => {
    const input = {
      email: "gabriel.alves@gmail.com",
      gender: Gender.MALE,
      password: "teste",
    } as CreateUserInput;
    const response = await repository.create(input);
    expect(response).toEqual(
      expect.objectContaining({
        id: 1,
        createdAt: expect.any(Number),
        updatedAt: expect.any(Number),
        email: input.email,
        gender: input.gender,
      })
    );
  });

  it("should authenticate user with user credentials", async () => {
    const credentials = {
      email: "gabriel@alves.com",
      password: "teste",
    } as UserCredentials;
    const response = await repository.authenticateWithUserCredentials(
      credentials
    );

    expect(response).toEqual(
      expect.objectContaining({
        id: 1,
        createdAt: expect.any(Number),
        updatedAt: expect.any(Number),
        email: credentials.email,
        gender: Gender.MALE,
      })
    );
  });
});
