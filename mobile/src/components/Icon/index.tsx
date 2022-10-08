import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextStyle } from "react-native";
import { useTheme } from "@hooks/useTheme";

type Props = {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  style: TextStyle;
  size?: number;
  onPress?(): void;
};

export function Icon({ name, style, size = 24, onPress }: Props) {
  const { theme } = useTheme();
  return (
    <MaterialCommunityIcons
      name={name}
      style={style}
      size={size}
      onPress={onPress}
      color={theme.colors.text}
    />
  );
}
