import { CreateUserInput, User } from "@entities/user";
import { UserRepository } from "domain/repositories/user";

export interface SignUpUC {
  userRepository: UserRepository;

  execute(args: CreateUserInput): Promise<User>;
}
