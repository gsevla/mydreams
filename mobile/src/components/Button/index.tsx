import React from "react";
import { Text } from "@components/Text";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ButtonProps } from "./types";
import { useTheme } from "@hooks/useTheme";

export function Button({
  label,
  onPress,
  styles,
  labelColor,
  disabled,
}: ButtonProps) {
  const { theme } = useTheme();

  const _styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.sizes.radius.medium,
    },
  });

  return (
    <TouchableOpacity
      accessibilityRole="button"
      activeOpacity={0.6}
      style={[theme.sizes.button, _styles.button, styles]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text color={labelColor} fontSize="h4">
        {label}
      </Text>
    </TouchableOpacity>
  );
}
