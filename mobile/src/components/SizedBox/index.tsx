import React from "react";
import { View } from "react-native";

type Props = {
  width?: number;
  height?: number;
};

export function SizedBox({ width, height }: Props) {
  return <View accessible={false} style={{ width, height }} />;
}
