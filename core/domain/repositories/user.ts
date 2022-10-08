import {
  CreateUserInput,
  UserCredentials,
  UserWithoutPassword,
} from "../entities/User";

export interface UserRepository {
  authenticateWithUserCredentials(
    data: UserCredentials
  ): Promise<UserWithoutPassword | undefined>;

  create(data: CreateUserInput): Promise<UserWithoutPassword | undefined>;
}
