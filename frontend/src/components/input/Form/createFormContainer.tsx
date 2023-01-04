import { FormContextType } from "@eventer/api/Form";
import React, { Context, PropsWithChildren, useState } from "react";
import { KeyboardAvoidingView, Pressable, Text } from "react-native";

type FormContainerProps<T> = {
    onSubmit?: (formData: T) => void;
    submitText?: string;
};

// Create a container for a form.
export function createFormContainer<T>(FormContext: Context<FormContextType<T>>) {
    return ({ children, onSubmit, submitText }: PropsWithChildren<FormContainerProps<T>>) => {
        // keep track of the values of all input fields within this form
        const [formValues, setFormValues] = useState<Partial<T>>({});

        // allow input fields to update the value they currently store
        function updateInputValue<K extends Extract<keyof T, string>>(name: K, value: T[K]) {
            setFormValues(currentValues => {
                const newValues = {
                    ...currentValues,
                };
                newValues[name] = value;
                return newValues;
            });
        }

        const submit = () => {
            onSubmit?.(formValues as T);
        };

        return (
            <FormContext.Provider value={{ updateInputValue, submit }}>
                {children}
                <Pressable onPress={submit}>
                    <Text
                        style={[
                            {
                                color: "#ffffff",
                            },
                        ]}>
                        {submitText}
                    </Text>
                </Pressable>
            </FormContext.Provider>
        );
    };
}
