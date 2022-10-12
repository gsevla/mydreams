import { UserCredentials } from "../../../domain/entities";
import { Gender } from "../../../domain/enums";
import { AxiosHttpClientFactory } from "../../../infra/factories/AxiosHttpClientFactory";
import { UserRepositoryImpl } from "../../repositories/api";
import { UserSignInUCImpl } from "./signIn";

test("User signIn UC", async () => {
  const httpClient = AxiosHttpClientFactory.create(
    process.env.BASE_URL as string
  );

  const repository = new UserRepositoryImpl(httpClient, "/user");

  const uc = new UserSignInUCImpl(repository);

  const input = {
    email: "gabriel.alves@gmail.com",
    password: "teste",
  } as UserCredentials;
  const response = await uc.execute(input);
  expect(response).toEqual(
    expect.objectContaining({
      id: 1,
      createdAt: expect.any(Number),
      updatedAt: expect.any(Number),
      email: input.email,
      gender: Gender.MALE,
    })
  );
});
