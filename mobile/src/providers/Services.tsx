import React, { createContext } from "react";
import { usecases } from "@mydreams/core";

type Props = { children: React.ReactNode };

export const ServicesContext = createContext(
  {} as { usecases: typeof usecases }
);

export function ServicesProvider({ children }: Props) {
  return (
    <ServicesContext.Provider value={{ usecases }}>
      {children}
    </ServicesContext.Provider>
  );
}
