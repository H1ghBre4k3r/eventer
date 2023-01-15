import { useAuth } from "@eventer/hooks/useAuth";
import { useUser } from "@eventer/hooks/useUser";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSidebarStyles } from "./Sidebar.style";

export const Sidebar = (props: DrawerContentComponentProps) => {
    const { SidebarContainer, SidebarHeader, SidebarFooter, SidebarText } = useSidebarStyles();

    const { user } = useUser();

    const { logout } = useAuth();

    return (
        <View style={[SidebarContainer]}>
            <DrawerContentScrollView {...props}>
                <View style={SidebarHeader}>
                    <Text style={[SidebarText]}>{user?.name}</Text>
                </View>
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
