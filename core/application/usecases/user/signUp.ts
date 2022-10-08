import {
  CreateUserInput,
  UserWithoutPassword,
} from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/user";
import { UserSignUpUC } from "../../../domain/usecases/user/signUp";

export class UserSignUpUCImpl implements UserSignUpUC {
  userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  execute(args: CreateUserInput): Promise<UserWithoutPassword | undefined> {
    return this.userRepository.create(args);
  }
}
