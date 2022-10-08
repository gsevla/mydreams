import React, { createContext } from "react";
import { Theme } from "./types";
import { Light } from "./constants";

type Props = { children: React.ReactNode };

export const ThemeContext = createContext({} as { theme: Theme });

export function ThemeProvider({ children }: Props) {
  return (
    <ThemeContext.Provider value={{ theme: Light }}>
      {children}
    </ThemeContext.Provider>
  );
}
