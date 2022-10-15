import { useRef } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@hooks/useTheme";
import { useAuthentication } from "@hooks/useAuthentication";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/Root";

export type UseSignInScreenContainerInput = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "SignIn",
    undefined
  >;
};

export function useSignInScreenContainer({
  navigation,
}: UseSignInScreenContainerInput) {
  const { theme } = useTheme();
  const { authenticateUser } = useAuthentication();

  const email = useRef("");
  const password = useRef("");

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

  function setEmail(_email: string) {
    email.current = _email;
  }

  function setPassword(_password: string) {
    password.current = _password;
  }

  function navigateToSignUpScreen() {
    navigation.navigate("SignUp");
  }

  async function authenticate() {
    await authenticateUser({
      email: email.current,
      password: password.current,
    });
  }

  return {
    theme,
    styles,
    setEmail,
    setPassword,
    authenticate,
    navigateToSignUpScreen,
  };
}
