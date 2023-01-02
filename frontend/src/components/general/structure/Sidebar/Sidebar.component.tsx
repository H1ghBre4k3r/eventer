import { useAuth } from "@eventer/hooks/useAuth";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSidebarStyles } from "./Sidebar.style";

export const Sidebar = (props: DrawerContentComponentProps) => {
    const { SidebarHeader, SidebarFooter } = useSidebarStyles();

    const { logout } = useAuth();

    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={SidebarHeader}>
                    <Text>Header</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={SidebarFooter}>
                <Pressable onPress={() => logout()}>
                    <Text>Logout</Text>
                </Pressable>
            </View>
        </>
    );
};
