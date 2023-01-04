export type FormContextType<T> = {
    // Update the value of a named input field in a form.
    updateInputValue<K extends Extract<keyof T, string>>(name: K, value: T[K]): void;

    // Submit the current form.
    submit(): void;
};
