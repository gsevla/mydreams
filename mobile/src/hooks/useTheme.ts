import { ThemeContext } from "@providers/Theme";
import { useContext } from "react";

export function useTheme() {
  return useContext(ThemeContext);
}
