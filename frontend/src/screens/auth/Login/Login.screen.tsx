import { LoginButton } from "@eventer/components/auth/login/LoginButton";
import { createForm } from "@eventer/components/general/input/Form";
import { ViewBase } from "@eventer/components/general/structure/ViewBase";
import { useAuth } from "@eventer/hooks/useAuth";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useLoginScreenStyles } from "./Login.style";

type LoginFormData = {
    username: string;
    password: string;
};

const Form = createForm<LoginFormData>();

export const LoginView = () => {
    const { LoginViewWrapper, LoginViewContainer } = useLoginScreenStyles();

    const [validationError, setValidationError] = useState<string | undefined>();
    const { login } = useAuth();

    const onSubmit = ({ username, password }: LoginFormData) => {
        login(username, password)
            .then(() => setValidationError(undefined))
            .catch(() => setValidationError("Login Failed / Invalid Credentials"));
    };

    return (
        <ViewBase>
            <KeyboardAvoidingView style={LoginViewWrapper} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ScrollView contentContainerStyle={LoginViewContainer}>
                    <Form.Container
                        onSubmit={onSubmit}
                        submitButton={onPress => <LoginButton onPress={onPress} />}
                        validationError={validationError}>
                        <Form.Input name="username" placeholder="Username" label="Username" />
                        <Form.Input name="password" placeholder="Password" label="Password" secureTextEntry />
                    </Form.Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </ViewBase>
    );
};
