import { LoginButton } from "@eventer/components/auth/login/LoginButton";
import { createForm } from "@eventer/components/general/input/Form";
import { ViewBase } from "@eventer/components/general/structure/ViewBase";
import { useAuth } from "@eventer/hooks/useAuth";
import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useLoginScreenStyles } from "./Login.style";

type LoginFormData = {
    username: string;
    password: string;
};

const Form = createForm<LoginFormData>();

export const LoginView = () => {
    const { LoginViewWrapper, LoginViewContainer } = useLoginScreenStyles();

    const { login } = useAuth();

    const onSubmit = (formData: LoginFormData) => {
        console.log(formData);
        login();
    };

    return (
        <ViewBase>
            <KeyboardAvoidingView style={LoginViewWrapper} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={LoginViewContainer}>
                    <Form.Container onSubmit={onSubmit} submitButton={onPress => <LoginButton onPress={onPress} />}>
                        <Form.Input name="username" placeholder="Username" label="Username" />
                        <Form.Input name="password" placeholder="Password" label="Password" />
                    </Form.Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </ViewBase>
    );
};
