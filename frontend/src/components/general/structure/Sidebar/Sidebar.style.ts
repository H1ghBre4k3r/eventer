import { useStyle } from "@eventer/hooks/useStyle";
import { StyleSheet } from "react-native";

export const useSidebarStyles = () => {
    const { Colors } = useStyle();

    // TODO: Introduce proper modules for styling etc.
    return StyleSheet.create({
        SidebarHeader: {
            backgroundColor: "#ff0000",
            padding: 20,
        },
        SidebarFooter: {
            padding: 20,
            elevation: 1,
            borderTopColor: Colors.shades.light,
            borderTopWidth: 1,
        },
    });
};
