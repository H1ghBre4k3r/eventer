import React from "react";

import { AppContainer } from "@eventer/screens/AppContainer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleContextProvider } from "@eventer/contexts/styleContext";

export const App = () => (
    <NavigationContainer>
        <StyleContextProvider>
            <AppContainer />
        </StyleContextProvider>
    </NavigationContainer>
);
