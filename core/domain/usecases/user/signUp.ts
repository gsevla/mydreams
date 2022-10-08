import { CreateUserInput, UserWithoutPassword } from "../../entities/User";
import { UserRepository } from "../../repositories/user";

export interface UserSignUpUC {
  userRepository: UserRepository;

  execute(args: CreateUserInput): Promise<UserWithoutPassword | undefined>;
}
