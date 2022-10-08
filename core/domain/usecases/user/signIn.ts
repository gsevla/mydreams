import { UserCredentials, UserWithoutPassword } from "../../entities/User";
import { UserRepository } from "../../repositories/user";

export interface UserSignInUC {
  userRepository: UserRepository;

  execute(args: UserCredentials): Promise<UserWithoutPassword | undefined>;
}
