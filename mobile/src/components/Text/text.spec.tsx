import { renderWithThemeProvider } from "@test/utils/renderWithThemeProvider";
import { screen } from "@testing-library/react-native";

import { Text } from ".";

test("Button Component", () => {
  renderWithThemeProvider(<Text>Olá mundo</Text>);

  const element = screen.getByText(/olá mundo/i);

  expect(element).toBeDefined();
});
