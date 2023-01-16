import React, { FC } from "react";
import { View, Text, useWindowDimensions, SafeAreaView, StatusBar, useColorScheme } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainView } from "@eventer/screens/Main";
import { Sidebar } from "@eventer/components/general/structure/Sidebar";
import { LoginView } from "@eventer/screens/auth/Login";
import { useAuth } from "@eventer/hooks/useAuth";
import { useStyle } from "@eventer/hooks/useStyle";

const Drawer = createDrawerNavigator();

export const AppContainer: FC = () => {
    const { isReady, loggedIn } = useAuth();
    const { Text: TextStyle, Content } = useStyle();

    const isDarkMode = useColorScheme() === "dark";

    const dimensions = useWindowDimensions();

    const isLargeScreen = dimensions.width >= 1024;

    if (!isReady) {
        return <></>;
    }
    return (
        <>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            {loggedIn ? (
                <Drawer.Navigator
                    screenOptions={{
                        drawerType: isLargeScreen ? "permanent" : "slide",
                        drawerInactiveTintColor: TextStyle.colors.primary,
                        headerStyle: {
                            backgroundColor: Content.background.bg1,
                        },
                        headerTitleStyle: {
                            color: TextStyle.colors.primary,
                        },
                    }}
                    drawerContent={Sidebar}>
                    <Drawer.Screen name="overview" component={MainView} options={{ title: "Overview" }} />
                </Drawer.Navigator>
            ) : (
                <LoginView />
            )}
        </>
    );
};
