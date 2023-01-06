import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useTextfieldStyles = () => {
    const { Input } = useStyle();

    return StyleSheet.create({
        TextfieldContainer: {
            width: "100%",
            marginVertical: 10,
        },
        TextfieldLabel: {
            fontSize: Input.label.fontSize,
            marginBottom: 5,
            paddingLeft: 7,
            color: Input.label.color,
        },
        TextfieldInput: {
            borderColor: Input.border.color,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            fontSize: Input.text.fontSize,
            color: Input.text.color,
        },
        TextfieldPlaceholder: {
            color: Input.placeholder.color,
        },
    });
};
