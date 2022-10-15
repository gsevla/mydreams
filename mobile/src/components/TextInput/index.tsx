import React, { ForwardedRef, forwardRef, useState } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
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
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  isPassword?: boolean;
} & TextInputProps;

function InnerTextInput(
  {
    value,
    label,
    placeholder,
    error = "",
    onChangeText,
    keyboardType = "default",
    returnKeyType = "default",
    isPassword = false,
    ...rest
  }: Props,
  ref: ForwardedRef<RNTextInput>
) {
  const { theme } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prev) => !prev);
  }

  const passwordIcon = isPasswordVisible ? "eye-off-outline" : "eye-outline";

  const secureTextEntry = isPassword && !isPasswordVisible ? true : false;

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
          {...rest}
          ref={ref}
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

export const TextInput = forwardRef(InnerTextInput);
