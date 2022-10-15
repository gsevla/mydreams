import React from "react";
import { withThemeProvider } from "./withThemeProvider";
import { withAuthenticationProvider } from "./withAuthenticationProvider";

export const withProviders = (component: React.ReactNode) =>
  withThemeProvider(withAuthenticationProvider(component));
