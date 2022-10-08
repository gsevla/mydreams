import {
  UserCredentials,
  UserWithoutPassword,
} from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/user";
import { UserSignInUC } from "../../../domain/usecases/user/signIn";

export class UserSignInUCImpl implements UserSignInUC {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(args: UserCredentials): Promise<UserWithoutPassword | undefined> {
    return this.userRepository.authenticateWithUserCredentials(args);
  }
}
