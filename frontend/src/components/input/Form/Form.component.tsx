import { FormContextType } from "@eventer/api/Form";
import { createContext } from "react";
import { createFormContainer } from "./createFormContainer";
import { createFormInput } from "./createFormInput";

type Form<T> = {
    Container: ReturnType<typeof createFormContainer<T>>;
    Input: ReturnType<typeof createFormInput<T>>;
};

// Create a form for handling submission of data.
export function createForm<T = unknown>(): Form<T> {
    const formContext = createContext<FormContextType<T>>({} as FormContextType<T>);

    return {
        // Container (i.e., wrapper) for a form.
        Container: createFormContainer(formContext),
        // Input to be used within a form.
        Input: createFormInput(formContext),
    };
}
