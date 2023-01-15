import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useSidebarHeaderStyles = () => {
    const { Content, Text } = useStyle();

    return StyleSheet.create({
        SidebarHeaderContainer: {
            backgroundColor: Content.background.bg1,
            padding: 20,
        },
        SidebarHeaderText: {
            color: Text.colors.primary,
        },
        Name: {
            fontSize: 24,
            fontWeight: "bold",
        },
    });
};
