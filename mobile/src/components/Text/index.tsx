import { useTheme } from "@hooks/useTheme";
import { Theme } from "@providers/Theme/types";
import React from "react";
import { TextStyle } from "react-native";
import { Text as RNText } from "react-native";

type Props = {
  children: string;
  fontSize?: keyof Theme["sizes"]["text"];
  color?: string;
  textAlign?: TextStyle["textAlign"];
};

export function Text({
  children,
  fontSize = "h5",
  color,
  textAlign = "auto",
}: Props) {
  const { theme } = useTheme();

  const _fontSize = theme.sizes.text[fontSize];

  return (
    <RNText
      style={{
        fontSize: _fontSize,
        color: color ?? theme.colors.text,
        textAlign,
      }}
    >
      {children}
    </RNText>
  );
}
