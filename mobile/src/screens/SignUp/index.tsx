import React from "react";
import { StyleSheet, View } from "react-native";
import { SignUpScreenView } from "./View";
import { SignUpScreenContainerProps } from "./types";

export function SignUpScreen({ navigation }: SignUpScreenContainerProps) {
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

  function signUp() {
    navigation.navigate("SignIn");
  }

  return <SignUpScreenView styles={styles} signUp={signUp} />;
}
