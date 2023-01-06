import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useLoginButtonStyle = () => {
    const { Button } = useStyle();

    return StyleSheet.create({
        Label: {
            color: Button.primary.active.color,
        },
        Button: {
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
            backgroundColor: Button.primary.active.background,
        },
    });
};
