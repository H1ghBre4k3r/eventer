import React, { FC } from "react";
import { SafeAreaView, StatusBar, useColorScheme, View, StyleSheet, Text } from "react-native";

export const AppContainer: FC = () => {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? "#000000" : "#ffffff",
        flex: 1,
    };

    return (
        <>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <View style={[styles.container]}>
                <Text>Hello, World!</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
