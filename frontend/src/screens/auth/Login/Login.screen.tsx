import { createForm } from "@eventer/components/input/Form";
import { useAuth } from "@eventer/hooks/useAuth";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useLoginScreenStyles } from "./Login.style";

type LoginFormData = {
    username: string;
    password: string;
};

const Form = createForm<LoginFormData>();

export const LoginView = () => {
    const { LoginViewWrapper, LoginViewContainer, LoginViewBackground } = useLoginScreenStyles();

    const { login } = useAuth();

    const onSubmit = (formData: LoginFormData) => {
        console.log(formData);
        login();
    };

    return (
        <KeyboardAvoidingView style={LoginViewWrapper} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView contentContainerStyle={LoginViewContainer} style={LoginViewBackground}>
                <Form.Container onSubmit={onSubmit} submitText="Login">
                    <Form.Input name="username" placeholder="Username" label="Username" />
                    <Form.Input name="password" placeholder="Password" label="Password" />
                </Form.Container>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
