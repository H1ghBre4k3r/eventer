import React, { FC } from "react";
import { Pressable, StyleProp, Text, TextStyle } from "react-native";

type ButtonProps = {
    label?: string;
    onPress?: () => void;
    style?: StyleProp<TextStyle>;
    labelStyle?: StyleProp<TextStyle>;
};

export const Button: FC<ButtonProps> = ({ label, onPress, style, labelStyle }) => (
    <Pressable onPress={onPress} style={style}>
        <Text style={labelStyle}>{label}</Text>
    </Pressable>
);
