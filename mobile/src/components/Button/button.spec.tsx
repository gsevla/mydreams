import { renderWithThemeProvider } from "@test/utils/renderWithThemeProvider";
import { screen, fireEvent, within } from "@testing-library/react-native";

import { Button } from ".";

test("Button Component", () => {
  const mockFn = jest.fn();

  renderWithThemeProvider(<Button label="btn" onPress={mockFn} />);

  const button = screen.getByRole("button");

  expect(button).toBeDefined();

  const label = within(button).findByText("btn");

  expect(label).toBeDefined();

  fireEvent.press(button);

  expect(mockFn).toHaveBeenCalled();
});
