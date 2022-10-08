import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SizedBox } from "@components/SizedBox";
import { Text } from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { Icon } from "@components/Icon";

export type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  placeholder: string;
  value: Option | null;
  onSelectOption(option: Option): void;
  error?: string;
  data: Array<Option>;
};

export function Select({
  label,
  placeholder = "Selecione uma opção",
  error = "",
  onSelectOption,
  data,
  value = null,
}: Props) {
  const { theme } = useTheme();

  const [isOptionVisible, setIsOptionsVisible] = useState(false);

  function hideOptions() {
    setIsOptionsVisible(false);
  }

  function _onSelectOption(option: Option) {
    console.log("áaaa");
    hideOptions();
    onSelectOption?.(option);
  }

  function toggleOptionsVisibility() {
    setIsOptionsVisible((prev) => !prev);
  }

  const styles = StyleSheet.create({
    container: {
      alignSelf: "stretch",
    },
    input: {
      borderWidth: theme.sizes.border.thin,
      borderRadius: theme.sizes.radius.small,
      borderColor: theme.colors.border,
      paddingRight: 32,
    },
    helperTextContainer: {
      paddingLeft: 8,
    },
  });

  return (
    <View>
      <Text>{label}</Text>
      <SizedBox height={8} />
      <Pressable
        pointerEvents="box-only"
        style={{ justifyContent: "center" }}
        onPress={toggleOptionsVisibility}
      >
        <RNTextInput
          style={[styles.input, theme.sizes.input]}
          value={value?.label}
          placeholder={placeholder}
          showSoftInputOnFocus={false}
          editable={false}
        />
        <Icon name="chevron-down" style={{ position: "absolute", right: 8 }} />
      </Pressable>
      <SizedBox height={8} />
      <View style={styles.helperTextContainer}>
        <Text color={theme.colors.error}>{error}</Text>
      </View>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <SizedBox height={8} />}
        ListHeaderComponent={() => <SizedBox height={8} />}
        ListFooterComponent={() => <SizedBox height={8} />}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                height: 32,
                paddingHorizontal: 8,
                paddingVertical: 4,
                justifyContent: "center",
              }}
              onPress={() => _onSelectOption(item)}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          );
        }}
        style={{
          zIndex: 999,
          display: isOptionVisible ? "flex" : "none",
          position: "absolute",
          width: "100%",
          top: 76,
        }}
        contentContainerStyle={{
          zIndex: 999,
          backgroundColor: "#fff",
          borderRadius: theme.sizes.radius.small,
          borderWidth: theme.sizes.border.thin,
        }}
      />
    </View>
  );
}
