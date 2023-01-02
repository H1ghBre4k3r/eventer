import React from "react";

import { AppContainer } from "@eventer/screens/AppContainer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleContextProvider } from "@eventer/contexts/styleContext";
import { StorageContextProvider } from "@eventer/contexts/storageContext";
import { AuthContextProvider } from "@eventer/contexts/authContext";

export const App = () => (
    <NavigationContainer>
        <StorageContextProvider>
            <AuthContextProvider>
                <StyleContextProvider>
                    <AppContainer />
                </StyleContextProvider>
            </AuthContextProvider>
        </StorageContextProvider>
    </NavigationContainer>
);
