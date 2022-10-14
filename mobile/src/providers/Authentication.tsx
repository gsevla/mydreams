import React, { createContext, useMemo, useState } from "react";
import { entities } from "@mydreams/core";

type Props = { children: React.ReactNode };

export const AuthenticationContext = createContext(
  {} as { isUserAuthenticated: boolean; authenticateUser(): Promise<void> }
);

export function AuthenticationProvider({ children }: Props) {
  const [user, setUser] = useState<entities.UserWithoutPassword>();
  const isUserAuthenticated = useMemo(() => !!user, [user]);

  async function authenticateUser() {
    // const _user = await usecases.user.signIn.execute({
    //   email: "teste",
    //   password: "testando",
    // });
    // setUser(_user);
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
