import { LoginButton } from "@eventer/components/auth/login/LoginButton";
import { Button } from "@eventer/components/general/input/Button";
import { createForm } from "@eventer/components/general/input/Form";
import { useAuth } from "@eventer/hooks/useAuth";
import { useStyle } from "@eventer/hooks/useStyle";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useLoginScreenStyles } from "./Login.style";

type LoginFormData = {
    username: string;
    password: string;
};

const Form = createForm<LoginFormData>();

export const LoginView = () => {
    const { Text } = useStyle();
    const { LoginViewWrapper, LoginViewContainer, LoginViewBackground } = useLoginScreenStyles();

    const { login } = useAuth();

    const onSubmit = (formData: LoginFormData) => {
        console.log(formData);
        login();
    };

    return (
        <KeyboardAvoidingView style={LoginViewWrapper} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={LoginViewContainer} style={LoginViewBackground}>
                <Form.Container onSubmit={onSubmit} submitButton={onPress => <LoginButton onPress={onPress} />}>
                    <Form.Input name="username" placeholder="Username" label="Username" />
                    <Form.Input name="password" placeholder="Password" label="Password" />
                </Form.Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
