import { useAuth } from "@eventer/hooks/useAuth";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSidebarStyles } from "./Sidebar.style";

export const Sidebar = (props: DrawerContentComponentProps) => {
    const { SidebarContainer, SidebarHeader, SidebarFooter, SidebarText } = useSidebarStyles();

    const { logout } = useAuth();

    return (
        <>
            <DrawerContentScrollView {...props} style={[SidebarContainer]}>
                <View style={SidebarHeader}>
                    <Text style={[SidebarText]}>Header</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={SidebarFooter}>
                <Pressable onPress={() => logout()}>
                    <Text style={[SidebarText]}>Logout</Text>
                </Pressable>
            </View>
        </>
    );
};
