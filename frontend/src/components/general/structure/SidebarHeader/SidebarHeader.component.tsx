import { useUser } from "@eventer/hooks/useUser";
import React from "react";
import { Text, View } from "react-native";
import { useSidebarHeaderStyles } from "./SidebarHeader.style";

export const SidebarHeader = () => {
    const { user } = useUser();
    const { SidebarHeaderContainer, SidebarHeaderText, Name } = useSidebarHeaderStyles();

    return (
        <View style={SidebarHeaderContainer}>
            <Text style={[SidebarHeaderText, Name]}>{user?.name}</Text>
            <Text style={[SidebarHeaderText]}>@{user?.username}</Text>
        </View>
    );
};
