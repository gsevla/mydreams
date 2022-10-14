import { CreateUserInput } from "../../../domain/entities";
import { Gender } from "../../../domain/enums";
import { AxiosHttpClientFactory } from "../../../infra/factories/AxiosHttpClientFactory";
import { UserRepositoryImpl } from "../../repositories/api";
import { UserSignUpUCImpl } from "./signUp";

test("User signIn UC", async () => {
  const httpClient = AxiosHttpClientFactory.create(
    process.env.BASE_URL as string
  );

  const repository = new UserRepositoryImpl(httpClient);

  const uc = new UserSignUpUCImpl(repository);

  const input = {
    email: "gabriel.alves@gmail.com",
    gender: Gender.MALE,
    password: "teste",
  } as CreateUserInput;
  const response = await uc.execute(input);
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
