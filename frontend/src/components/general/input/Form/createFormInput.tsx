import { FormContextType } from "@eventer/api/Form";
import React, { Context, useContext, useEffect, useState } from "react";
import { Textfield, TextfieldProps } from "@eventer/components/general/input/Textfield";

type FormInputProps<T> = Pick<
    TextfieldProps,
    "label" | "placeholder" | "style" | "keyboardType" | "secureTextEntry" | "textContentType" | "labelStyle"
> &
    ConcreteFormInputGenericProps<T, Extract<keyof T, string>>;

type ConcreteFormInputGenericProps<T, K extends keyof T> = {
    name: K;
    transform?: (val: string) => T[K];
};

// Create an universally usable input for a form.
export function createFormInput<T>(FormContext: Context<FormContextType<T>>) {
    return (props: FormInputProps<T>) => {
        // get "hook" for updating the value of this component
        const { updateInputValue, submit } = useContext(FormContext);

        const [value, setValue] = useState("");

        useEffect(() => {
            // whenever the value of our input changes, we update it in the form aswell
            updateInputValue(props.name, props.transform?.(value) ?? (value as T[typeof props.name]));
        }, [value]);

        return <Textfield {...props} value={value} onChangeText={setValue} onSubmitEditing={submit} />;
    };
}
