import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "@routes/Root";

export function NavigationProvider() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
