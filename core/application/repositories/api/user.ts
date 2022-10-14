import {
  CreateUserInput,
  UserCredentials,
  UserWithoutPassword,
} from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/user";
import { HttpClientProtocol } from "../../protocols/HttpClient";

export class UserRepositoryImpl implements UserRepository {
  private datasource: HttpClientProtocol;

  private uri = "/user";

  constructor(datasource: HttpClientProtocol) {
    this.datasource = datasource;
  }

  async create(
    data: CreateUserInput
  ): Promise<UserWithoutPassword | undefined> {
    const response = await this.datasource.post<UserWithoutPassword>(
      this.uri,
      data
    );
    return response.data;
  }

  async authenticateWithUserCredentials(
    data: UserCredentials
  ): Promise<UserWithoutPassword | undefined> {
    const response = await this.datasource.post<UserWithoutPassword>(
      `${this.uri}/authenticate`,
      data
    );
    return response.data;
  }
}
