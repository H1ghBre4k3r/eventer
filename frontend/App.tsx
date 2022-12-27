import React from "react";
import { SafeAreaView } from "react-native";

import { AppContainer } from "@eventer/screens/AppContainer";

export const App = () => {
    const backgroundStyle = {
        backgroundColor: "#ffffff",
        flex: 1,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <AppContainer />
        </SafeAreaView>
    );
};
