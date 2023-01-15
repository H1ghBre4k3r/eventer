import { useAuth } from "@eventer/hooks/useAuth";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SidebarHeader } from "../SidebarHeader";
import { useSidebarStyles } from "./Sidebar.style";

export const Sidebar = (props: DrawerContentComponentProps) => {
    const { SidebarContainer, SidebarScrollContainer, SidebarFooter, SidebarText } = useSidebarStyles();

    const { logout } = useAuth();

    return (
        <View style={[SidebarContainer]}>
            <DrawerContentScrollView {...props} contentContainerStyle={SidebarScrollContainer}>
                <SidebarHeader />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={SidebarFooter}>
                <Pressable onPress={() => logout()}>
                    <Text style={[SidebarText]}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
};
