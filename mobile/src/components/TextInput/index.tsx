import React from 'react';
import { TextInput as RNTextInput, TextInputProps, TextInput } from 'react-native';

type Props = {
    value: string;
};

export function TextInput({value }: Props) {
    return (
        <RNTextInput value={value} onChangeText={} onBlur={} />
    )
};