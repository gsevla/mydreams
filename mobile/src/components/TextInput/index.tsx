import React, { useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from "react-native";
import { SizedBox } from "@components/SizedBox";
import { Text } from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { Icon } from "@components/Icon";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText(value: string): void;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  isPassword?: boolean;
};

export function TextInput({
  value,
  label,
  placeholder,
  error = "",
  onChangeText,
  keyboardType = "default",
  returnKeyType = "default",
  isPassword = false,
}: Props) {
  const { theme } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  const passwordIcon = isPasswordVisible ? "eye-off-outline" : "eye-outline";

  const secureTextEntry = isPassword && isPasswordVisible ? true : false;

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    input: {
      borderWidth: theme.sizes.border.thin,
      borderRadius: theme.sizes.radius.small,
      borderColor: theme.colors.border,
      paddingRight: 32,
    },
    helperTextContainer: {
      paddingLeft: 8,
    },
  });

  return (
    <View>
      <Text>{label}</Text>
      <SizedBox height={8} />
      <View style={{ justifyContent: "center" }}>
        <RNTextInput
          style={[styles.input, theme.sizes.input]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
        />
        {isPassword && (
          <Icon
            name={passwordIcon}
            style={{ position: "absolute", right: 8 }}
            onPress={togglePasswordVisibility}
          />
        )}
      </View>
      <SizedBox height={8} />
      <View style={styles.helperTextContainer}>
        <Text color={theme.colors.error}>{error}</Text>
      </View>
    </View>
  );
}
