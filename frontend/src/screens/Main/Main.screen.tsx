import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export const MainView = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Main View</Text>
        </View>
    </SafeAreaView>
);
