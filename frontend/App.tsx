import React from "react";

import { AppContainer } from "@eventer/screens/AppContainer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleContextProvider } from "@eventer/contexts/styleContext";
import { StorageContextProvider } from "@eventer/contexts/storageContext";
import { AuthContextProvider } from "@eventer/contexts/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PocketBaseContextProvider } from "@eventer/contexts/pocketBaseContext";

export const App = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <StorageContextProvider>
                <PocketBaseContextProvider>
                    <AuthContextProvider>
                        <StyleContextProvider>
                            <AppContainer />
                        </StyleContextProvider>
                    </AuthContextProvider>
                </PocketBaseContextProvider>
            </StorageContextProvider>
        </NavigationContainer>
    </SafeAreaProvider>
);
