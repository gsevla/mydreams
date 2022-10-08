import React from "react";
import { StyleSheet } from "react-native";
import { ButtonProps } from "../types";
import { Button } from "@components/Button";
import { useTheme } from "@hooks/useTheme";

type Props = Omit<ButtonProps, "styles">;

export function ButtonSolid({ label, onPress }: Props) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors.primary,
    },
  });

  return (
    <Button
      label={label}
      onPress={onPress}
      styles={styles.button}
      labelColor={theme.colors.textLight}
    />
  );
}
