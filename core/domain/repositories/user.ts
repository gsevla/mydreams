import { CreateUserInput, UpdateUserInput, User } from "@entities/user";

export interface UserRepository {
  findById(id: number): Promise<User | undefined>;

  create(data: CreateUserInput): User;

  update(id: number, data: UpdateUserInput): Promise<void>;

  delete(id: number): Promise<void>;
}
