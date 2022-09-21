import { CreateUserInput, UpdateUserInput, User } from "@entities/user";

export interface UserRepository {
  httpService: any;

  findById(id: number): Promise<User | undefined>;

  create(data: CreateUserInput): User;
}
