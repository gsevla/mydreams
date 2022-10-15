import React from "react";
import { SignInScreenView } from "./View";
import { useSignInScreenContainer } from "./useContainer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/Root";

export type SignInScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;

export function SignInScreen({ navigation }: SignInScreenContainerProps) {
  return <SignInScreenView {...useSignInScreenContainer({ navigation })} />;
}
