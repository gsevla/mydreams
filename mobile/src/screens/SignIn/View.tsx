import React from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";
import { SizedBox } from "@components/SizedBox";
import { ButtonText } from "@components/Button/Text";
import { ButtonSolid } from "@components/Button/Solid";
import { Theme } from "@providers/Theme/types";
import { styles } from "./styles";

export type SignInScreenViewProps = {
  theme: Theme;
  navigateToSignUpScreen(): void;
  authenticate(): Promise<void>;
  setEmail(email: string): void;
  setPassword(password: string): void;
};

export function SignInScreenView({
  theme,
  setEmail,
  setPassword,
  navigateToSignUpScreen,
  authenticate,
}: SignInScreenViewProps) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.headerContainer}>
        <Text fontSize="h1" color={theme.colors.primary}>
          MyDreams
        </Text>
        <SizedBox height={8} />
        <Text fontSize="h1" color={theme.colors.secondary}>
          O lugar ideal para guardar seus sonhos!
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          label="Email"
          placeholder="gabriel@alves.com"
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <SizedBox height={24} />
        <TextInput
          label="Senha"
          placeholder="********"
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          isPassword
        />
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonSolid label="Entrar" onPress={authenticate} />
        <SizedBox height={8} />
        <ButtonText
          label="Não possuo conta!"
          onPress={navigateToSignUpScreen}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
