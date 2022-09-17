export type User = {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;

export type UpdateUserInput = Partial<Omit<CreateUserInput, "email">>;