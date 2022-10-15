import React, { createContext, useMemo, useState } from "react";
import { entities } from "@mydreams/core";
import usecases from "@services/usecases";

type Props = { children: React.ReactNode };

export const AuthenticationContext = createContext(
  {} as {
    isUserAuthenticated: boolean;
    authenticateUser(input: entities.UserCredentials): Promise<void>;
  }
);

export function AuthenticationProvider({ children }: Props) {
  const [user, setUser] = useState<entities.UserWithoutPassword>();
  const isUserAuthenticated = useMemo(() => !!user, [user]);

  async function authenticateUser({
    email,
    password,
  }: entities.UserCredentials) {
    const _user = await usecases?.user.signIn.execute({
      email,
      password,
    });
    setUser(_user);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isUserAuthenticated,
        authenticateUser,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
