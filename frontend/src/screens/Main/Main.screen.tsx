import { ViewBase } from "@eventer/components/general/structure/ViewBase";
import { useStyle } from "@eventer/hooks/useStyle";
import React from "react";
import { Text, View } from "react-native";

export const MainView = () => {
    const { Text: TextStyle } = useStyle();
    return (
        <ViewBase>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: TextStyle.colors.primary }}>Main View</Text>
            </View>
        </ViewBase>
    );
};
