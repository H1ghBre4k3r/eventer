import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useViewBaseStyle = () => {
    const { Content } = useStyle();

    return StyleSheet.create({
        ViewBase: {
            flex: 1,
            backgroundColor: Content.background.bg0,
        },
    });
};
