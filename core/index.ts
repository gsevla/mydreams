import { UserRepositoryImpl } from "./application/repositories/api/user";
import * as Usecases from "./application/usecases";
import * as enums from "./domain/enums";
import * as entities from "./domain/entities";
import { AxiosHttpClientFactory } from "./infra/factories/AxiosHttpClientFactory";

const baseUrl = "http://localhost:3000/api";

const httpClient = AxiosHttpClientFactory.create(baseUrl);

const repositories = {
  user: new UserRepositoryImpl(httpClient, "/user"),
};

const usecases = {
  signUp: new Usecases.UserUsecases.UserSignUpUCImpl(repositories.user),
  signIn: new Usecases.UserUsecases.UserSignInUCImpl(repositories.user),
};

export { usecases, enums, entities };
