import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type ButtonProps = {
  label: string;
  onPress(): void;
  disabled?: boolean;
  styles?: ViewStyle | TextStyle | ImageStyle;
  labelColor?: string;
};
