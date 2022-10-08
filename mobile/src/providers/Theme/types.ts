export type ThemeBase = {
  sizes: {
    border: {
      thin: number;
      large: number;
    };
    radius: {
      small: number;
      medium: number;
    };
    input: {
      height: number | string;
      minWidth: number | string;
      padding: number;
    };
    button: {
      height: number | string;
      minWidth: number | string;
      paddingVertical: number;
      paddingHorizontal: number;
    };
    text: {
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      h7: number;
      h8: number;
      h9: number;
    };
  };
};

export type Theme = ThemeBase & {
  dark: boolean;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    overlay: string;
    text: string;
    textLight: string;
    border: string;
    error: string;
  };
};
