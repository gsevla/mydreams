import { render } from "@testing-library/react-native";
import React from "react";
import { withThemeProvider } from "./withThemeProvider";

export const renderWithThemeProvider = (component: React.ReactNode) =>
  render(withThemeProvider(component));
