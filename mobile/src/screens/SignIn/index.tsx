import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@hooks/useTheme";
import { SignInScreenView } from "./View";
import { SignInScreenContainerProps } from "./types";
import { useAuthentication } from "@hooks/useAuthentication";

export function SignInScreen({ navigation }: SignInScreenContainerProps) {
  const { theme } = useTheme();
  const { authenticateUser } = useAuthentication();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingVertical: 24,
    },
    headerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    form: {
      flexGrow: 0,
    },
    buttonsContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
  });

  function navigateToSignUpScreen() {
    navigation.navigate("SignUp");
  }

  return (
    <SignInScreenView
      styles={styles}
      theme={theme}
      navigateToSignUpScreen={navigateToSignUpScreen}
      authenticate={authenticateUser}
    />
  );
}
