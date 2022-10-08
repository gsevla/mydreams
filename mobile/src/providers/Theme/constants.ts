import { Colors } from "@constants/colors";
import type { ThemeBase, Theme } from "./types";

const Base: ThemeBase = {
  sizes: {
    border: {
      thin: 1,
      large: 2,
    },
    button: {
      height: 48,
      minWidth: 124,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    input: {
      height: 48,
      minWidth: "100%",
      padding: 8,
    },
    radius: {
      small: 4,
      medium: 8,
    },
    text: {
      h1: 24,
      h2: 22,
      h3: 20,
      h4: 18,
      h5: 16,
      h6: 14,
      h7: 12,
      h8: 10,
      h9: 8,
    },
  },
};

export const Light: Theme = {
  ...Base,
  dark: false,
  colors: {
    background: Colors.revell,
    overlay: Colors.black60,
    primary: Colors.cyanCobaltBlue,
    secondary: Colors.turquoiseSurf,
    text: Colors.gunmetal,
    textLight: Colors.white,
    border: Colors.gunmetal,
    error: Colors.redOrange,
  },
};
