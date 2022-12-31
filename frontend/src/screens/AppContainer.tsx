import React, { FC } from "react";
import { View, StyleSheet, Text, useWindowDimensions, SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainView } from "@eventer/screens/Main";

const Drawer = createDrawerNavigator();

export const AppContainer: FC = () => {
    const isDarkMode = useColorScheme() === "dark";

    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 1024;

    return (
        <>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <Drawer.Navigator
                screenOptions={{
                    drawerType: isLargeScreen ? "permanent" : undefined,
                    // header: Header,
                }}>
                <Drawer.Screen name="Main" component={MainView} />
                <Drawer.Screen name="Second" component={SecondView} />
            </Drawer.Navigator>
        </>
    );
};

const Header = () => <View />;

const SecondView = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View>
            <Text>Second View</Text>
        </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
