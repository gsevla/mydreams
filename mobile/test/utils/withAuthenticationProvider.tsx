import React from "react";
import { AuthenticationProvider } from "@providers/Authentication";

export const withAuthenticationProvider = (component: React.ReactNode) => (
  <AuthenticationProvider>{component}</AuthenticationProvider>
);
