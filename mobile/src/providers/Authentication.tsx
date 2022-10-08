import React, { createContext, useState } from "react";

type Props = { children: React.ReactNode };

export const AuthenticationContext = createContext(
  {} as { isUserAuthenticated: boolean; authenticateUser(): void }
);

export function AuthenticationProvider({ children }: Props) {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  function authenticateUser() {
    setIsUserAuthenticated(true);
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
