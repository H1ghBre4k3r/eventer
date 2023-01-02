import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useLoginScreenStyles = () => {
    const { Colors } = useStyle();

    return StyleSheet.create({
        LoginViewContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });
};
