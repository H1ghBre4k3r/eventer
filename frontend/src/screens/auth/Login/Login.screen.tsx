import { useAuth } from "@eventer/hooks/useAuth";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useLoginScreenStyles } from "./Login.style";

export const LoginView = () => {
    const { LoginViewContainer } = useLoginScreenStyles();

    const { login } = useAuth();

    return (
        <View style={LoginViewContainer}>
            <Pressable onPress={() => login()}>
                <Text>Login</Text>
            </Pressable>
        </View>
    );
};
