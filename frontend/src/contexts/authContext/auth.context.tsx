import { AuthContextType } from "@eventer/api/Auth";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

export const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    login() {
        return new Promise(() => {
            //
        });
    },
    logout() {
        return new Promise(() => {
            //
        });
    },
});

export type AuthContextProviderProps = {
    //
};

export const AuthContextProvider: FC<PropsWithChildren<AuthContextProviderProps>> = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const authContextState: AuthContextType = {
        loggedIn,
        login() {
            setLoggedIn(true);
            return new Promise(() => {
                //
            });
        },
        logout() {
            setLoggedIn(false);
            return new Promise(() => {
                //
            });
        },
    };

    return <AuthContext.Provider value={authContextState}>{children}</AuthContext.Provider>;
};
