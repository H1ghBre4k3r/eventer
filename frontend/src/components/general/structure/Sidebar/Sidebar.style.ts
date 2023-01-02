import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useSidebarStyles = () => {
    const { Colors, Content, Text } = useStyle();

    const sidebarBackground = Content.background.bg1;

    return StyleSheet.create({
        SidebarContainer: {
            backgroundColor: sidebarBackground,
        },
        SidebarHeader: {
            padding: 20,
        },
        SidebarFooter: {
            padding: 20,
            elevation: 1,
            borderTopColor: Colors.shades.light,
            borderTopWidth: 1,
            backgroundColor: sidebarBackground,
        },
        SidebarText: {
            color: Text.colors.primary,
        },
    });
};
