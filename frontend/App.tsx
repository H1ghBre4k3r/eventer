import React from "react";

import { AppContainer } from "@eventer/screens/AppContainer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleContextProvider } from "@eventer/contexts/styleContext";
import { StorageContextProvider } from "@eventer/contexts/storageContext";
import { AuthContextProvider } from "@eventer/contexts/authContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PocketBaseContextProvider } from "@eventer/contexts/pocketBaseContext";
import { UserContextProvider } from "@eventer/contexts/userContext";

export const App = () => (
    <SafeAreaProvider>
        <NavigationContainer>
            <StorageContextProvider>
                <PocketBaseContextProvider>
                    <AuthContextProvider>
                        <UserContextProvider>
                            <StyleContextProvider>
                                <AppContainer />
                            </StyleContextProvider>
                        </UserContextProvider>
                    </AuthContextProvider>
                </PocketBaseContextProvider>
            </StorageContextProvider>
        </NavigationContainer>
    </SafeAreaProvider>
);
