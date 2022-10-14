import * as dotenv from "dotenv";
dotenv.config();

import { UserRepositoryImpl } from "./application/repositories/api/user";
import * as Usecases from "./application/usecases";
import * as enums from "./domain/enums";
import * as entities from "./domain/entities";
import { AxiosHttpClientFactory } from "./infra/factories/AxiosHttpClientFactory";

const httpClient = AxiosHttpClientFactory.create(
  process.env.BASE_URL as string
);

const repositories = {
  user: new UserRepositoryImpl(httpClient),
};

const usecases = {
  user: {
    signUp: new Usecases.UserUsecases.UserSignUpUCImpl(repositories.user),
    signIn: new Usecases.UserUsecases.UserSignInUCImpl(repositories.user),
  },
};

export { usecases, enums, entities };
