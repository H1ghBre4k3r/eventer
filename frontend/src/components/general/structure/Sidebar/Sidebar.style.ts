import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSidebarStyles = () => {
    const { bottom, top } = useSafeAreaInsets();
    const { Colors, Content, Text } = useStyle();

    const sidebarBackground = Content.background.bg1;

    return StyleSheet.create({
        SidebarContainer: {
            flex: 1,
            backgroundColor: sidebarBackground,
            paddingBottom: bottom,
            paddingTop: top,
        },
        SidebarScrollContainer: {
            paddingTop: 0,
        },
        SidebarFooter: {
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20 - bottom,
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
