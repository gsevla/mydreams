import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "@screens/SignIn";
import { SignUpScreen } from "@screens/SignUp";
import { ListDreamScreen } from "@screens/ListDream";
import { CreateDreamScreen } from "@screens/CreateDream";
import { useAuthentication } from "@hooks/useAuthentication";
import { StyleSheet } from "react-native";

export type RootStackParamList = {
  ListDream: undefined;
  CreateDream: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

const StackNavigator = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  const { isUserAuthenticated } = useAuthentication();
  console.log(isUserAuthenticated);

  const styles = StyleSheet.create({
    appContainer: {
      padding: 16,
    },
    authContainer: {
      padding: 16,
    },
  });

  return (
    <StackNavigator.Navigator>
      {isUserAuthenticated ? (
        <StackNavigator.Group
          navigationKey="app"
          screenOptions={{
            contentStyle: styles.authContainer,
          }}
        >
          <StackNavigator.Screen name="ListDream" component={ListDreamScreen} />
          <StackNavigator.Screen
            name="CreateDream"
            component={CreateDreamScreen}
          />
        </StackNavigator.Group>
      ) : (
        <StackNavigator.Group
          navigationKey="auth"
          screenOptions={{
            contentStyle: styles.authContainer,
          }}
        >
          <StackNavigator.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              headerShown: false,
            }}
          />
          <StackNavigator.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{
              headerTitle: "Cadastre-se",
              headerBackTitle: "Voltar",
            }}
          />
        </StackNavigator.Group>
      )}
    </StackNavigator.Navigator>
  );
}
