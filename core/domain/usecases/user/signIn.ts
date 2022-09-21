import { User, UserCredentials } from "@entities/user";
import { UserRepository } from "domain/repositories/user";

export interface SignInUC {
  userRepository: UserRepository;

  execute(args: UserCredentials): Promise<User>;
}
