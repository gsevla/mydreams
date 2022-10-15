import { render } from "@testing-library/react-native";
import React from "react";
import { withProviders } from "./withProviders";

export const renderWithProviders = (component: React.ReactNode) =>
  render(withProviders(component));
