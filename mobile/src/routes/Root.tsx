import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen } from "@screens/SignIn";
import { SignUpScreen } from "@screens/SignUp";
import { ListDreamScreen } from "@screens/ListDream";
import { CreateDreamScreen } from "@screens/CreateDream";
import { useIsUserAuthenticated } from "@hooks/useIsUserAuthenticated";

const StackNavigator = createNativeStackNavigator();

export function RootNavigator() {
  const isUserAuthenticated = useIsUserAuthenticated();

  return (
    <StackNavigator.Navigator>
      {isUserAuthenticated ? (
        <StackNavigator.Group navigationKey="app">
          <StackNavigator.Screen name="ListDream" component={ListDreamScreen} />
          <StackNavigator.Screen
            name="CreateDream"
            component={CreateDreamScreen}
          />
        </StackNavigator.Group>
      ) : (
        <StackNavigator.Group navigationKey="auth">
          <StackNavigator.Screen name="SignIn" component={SignInScreen} />
          <StackNavigator.Screen name="SignUp" component={SignUpScreen} />
        </StackNavigator.Group>
      )}
    </StackNavigator.Navigator>
  );
}
