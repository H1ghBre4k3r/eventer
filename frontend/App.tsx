import React from "react";

import { AppContainer } from "@eventer/screens/AppContainer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleContextProvider } from "@eventer/contexts/styleContext";
import { StorageContextProvider } from "@eventer/contexts/storageContext";

export const App = () => (
    <NavigationContainer>
        <StorageContextProvider>
            <StyleContextProvider>
                <AppContainer />
            </StyleContextProvider>
        </StorageContextProvider>
    </NavigationContainer>
);
