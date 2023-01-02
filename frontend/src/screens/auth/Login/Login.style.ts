import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useLoginScreenStyles = () => {
    const { Content, Text } = useStyle();

    return StyleSheet.create({
        LoginViewContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Content.background.bg0,
        },
        LoginViewText: {
            color: Text.colors.primary,
        },
    });
};
