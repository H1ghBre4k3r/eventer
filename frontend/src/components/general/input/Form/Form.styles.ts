import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useFormStyles = () => {
    const { Colors } = useStyle();

    return StyleSheet.create({
        ErrorContainer: {
            flexDirection: "row",
        },
        ErrorBox: {
            flex: 1,
            backgroundColor: Colors.status.error,
            padding: 10,
            borderRadius: 10,
            alignItems: "center",
        },
        ErrorText: { color: Colors.base.white },
    });
};
