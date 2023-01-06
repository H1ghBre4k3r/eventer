import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useLoginScreenStyles = () => {
    const { Text } = useStyle();

    return StyleSheet.create({
        LoginViewWrapper: {
            flex: 1,
        },
        LoginViewContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 30,
        },
        LoginViewText: {
            color: Text.colors.primary,
        },
    });
};
