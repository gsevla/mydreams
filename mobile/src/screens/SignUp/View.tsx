import React from "react";
import { ButtonSolid } from "@components/Button/Solid";
import { Select } from "@components/Select";
import { SizedBox } from "@components/SizedBox";
import { TextInput } from "@components/TextInput";
import { KeyboardAvoidingView, View } from "react-native";

export function SignUpScreenView({ styles, signUp }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value=""
          label="Usuário"
          placeholder="gabrielalves"
          onChangeText={() => {}}
        />
        <SizedBox height={24} />
        <TextInput
          value=""
          label="Senha"
          placeholder="********"
          onChangeText={() => {}}
          isPassword
        />
        <SizedBox height={24} />
        <TextInput
          value=""
          label="Repita sua senha"
          placeholder="********"
          onChangeText={() => {}}
          isPassword
        />
        <SizedBox height={24} />
        <Select
          value={null}
          data={[
            {
              value: "MALE",
              label: "Masculino",
            },
            {
              value: "FEMALE",
              label: "Feminino",
            },
            {
              value: "OTHER",
              label: "Outro",
            },
          ]}
          label="Gênero"
          placeholder="Selecione seu gênero"
          onSelectOption={(option) => {
            console.log("bbbb", option);
          }}
        />
      </View>
      <View
        pointerEvents="box-none"
        style={[styles.buttonsContainer, { backgroundColor: "transparent" }]}
      >
        <ButtonSolid label="Cadastrar" onPress={signUp} />
      </View>
    </View>
  );
}
