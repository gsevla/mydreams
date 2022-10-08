import React from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";
import { SizedBox } from "@components/SizedBox";
import { ButtonText } from "@components/Button/Text";
import { ButtonSolid } from "@components/Button/Solid";
import { SignInScreenViewProps } from "./types";

export function SignInScreenView({
  styles,
  theme,
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
          value=""
          label="Usuário"
          placeholder="gabrielalves"
          onChangeText={() => {}}
        />
        <SizedBox height={24} />
        <TextInput
          value=""
          label="Senha"
          placeholder="********"
          onChangeText={() => {}}
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
