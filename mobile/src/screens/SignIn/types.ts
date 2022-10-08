import { Theme } from "@providers/Theme/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@routes/Root";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

export type SignInScreenContainerProps = NativeStackScreenProps<
  RootStackParamList,
  "SignIn"
>;

export type SignInScreenViewProps = {
  theme: Theme;
  navigateToSignUpScreen(): void;
  authenticate(): void;
  styles: StyleSheet.NamedStyles<{
    container: StyleProp<ViewStyle>;
    headerContainer: StyleProp<ViewStyle>;
    form: StyleProp<ViewStyle>;
    buttonsContainer: StyleProp<ViewStyle>;
  }>;
};
