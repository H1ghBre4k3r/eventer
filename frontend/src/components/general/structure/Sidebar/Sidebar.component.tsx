import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { useSidebarStyles } from "./Sidebar.style";

export const Sidebar = (props: DrawerContentComponentProps) => {
    const { SidebarHeader, SidebarFooter } = useSidebarStyles();

    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={SidebarHeader}>
                    <Text>Header</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={SidebarFooter}>
                <Text>Settings</Text>
            </View>
        </>
    );
};
