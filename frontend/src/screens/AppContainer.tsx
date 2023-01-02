import React, { FC } from "react";
import { View, Text, useWindowDimensions, SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainView } from "@eventer/screens/Main";
import { Sidebar } from "@eventer/components/general/structure/Sidebar";
import { LoginView } from "@eventer/screens/auth/Login";
import { useAuth } from "@eventer/hooks/useAuth";

const Drawer = createDrawerNavigator();

export const AppContainer: FC = () => {
    const { loggedIn } = useAuth();
    const isDarkMode = useColorScheme() === "dark";

    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 1024;

    return (
        <>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            {loggedIn ? (
                <Drawer.Navigator
                    screenOptions={{
                        drawerType: isLargeScreen ? "permanent" : undefined,
                    }}
                    drawerContent={Sidebar}>
                    <Drawer.Screen name="overview" component={MainView} options={{ title: "Overview" }} />
                    <Drawer.Screen name="Second" component={SecondView} />
                </Drawer.Navigator>
            ) : (
                <LoginView />
            )}
        </>
    );
};

const SecondView = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View>
            <Text>Second View</Text>
        </View>
    </SafeAreaView>
);
