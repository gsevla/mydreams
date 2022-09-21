import { Gender } from "@enums/gender";

export type User = {
  id: number;
  email: string;
  password: string;
  gender: Gender;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UpdateUserInput = Partial<Omit<CreateUserInput, "email">>;

export type UserCredentials = Omit<CreateUserInput, "gender">;
