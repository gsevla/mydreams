import { UserRepositoryImpl } from "./application/repositories/api/user";
import * as Usecases from "./application/usecases";
import * as enums from "./domain/enums";
import * as entities from "./domain/entities";
import { AxiosHttpClientFactory } from "./infra/factories/AxiosHttpClientFactory";

function bootstrapUsecases(baseUrl: string) {
  const httpClient = AxiosHttpClientFactory.create(baseUrl);

  const repositories = {
    user: new UserRepositoryImpl(httpClient),
  };

  const usecases = {
    user: {
      signUp: new Usecases.UserUsecases.UserSignUpUCImpl(repositories.user),
      signIn: new Usecases.UserUsecases.UserSignInUCImpl(repositories.user),
    },
  };

  return {
    usecases,
  };
}

export { entities, enums, bootstrapUsecases };
