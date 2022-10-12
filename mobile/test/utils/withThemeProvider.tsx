import React from "react";
import { ThemeProvider } from "@providers/Theme";

export const withThemeProvider = (component: React.ReactNode) => (
  <ThemeProvider>{component}</ThemeProvider>
);
