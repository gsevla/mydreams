import { Gender } from "../enums/Gender";

export type User = {
  id: number;
  email: string;
  password: string;
  gender: Gender;
  createdAt: Date;
  updatedAt: Date;
};

export type UserWithoutPassword = Omit<User, "password">;

export type CreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UpdateUserInput = Partial<Omit<CreateUserInput, "email">>;

export type UserCredentials = Omit<CreateUserInput, "gender">;
