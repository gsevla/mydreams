import React from "react";
import { Text as RNText } from "react-native";

type Props = {
  children: string;
};

export function Text({ children }: Props) {
  return <RNText>{children}</RNText>;
}
