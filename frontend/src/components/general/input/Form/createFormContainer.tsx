import { FormContextType } from "@eventer/api/Form";
import React, { Context, PropsWithChildren, ReactNode, useState } from "react";
import { Text, View } from "react-native";
import { useFormStyles } from "./Form.styles";

type FormContainerProps<T> = {
    // Function to execute when this form gets submitted
    onSubmit?: (formData: T) => void;

    // A function to render a submit button
    submitButton?: (onPress: () => void) => ReactNode;

    validationError?: string;
};

// Create a container for a form.
export function createFormContainer<T>(FormContext: Context<FormContextType<T>>) {
    return ({ children, onSubmit, submitButton, validationError }: PropsWithChildren<FormContainerProps<T>>) => {
        const { ErrorContainer, ErrorBox, ErrorText } = useFormStyles();
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
            <>
                {validationError && (
                    <View style={ErrorContainer}>
                        <View style={ErrorBox}>
                            <Text style={ErrorText}>{validationError}</Text>
                        </View>
                    </View>
                )}
                <FormContext.Provider value={{ updateInputValue, submit }}>
                    {children}
                    {submitButton?.(submit)}
                </FormContext.Provider>
            </>
        );
    };
}
