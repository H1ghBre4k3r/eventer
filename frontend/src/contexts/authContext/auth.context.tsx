import { AuthContextType } from "@eventer/api/Auth";
import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { PocketBaseContext } from "../pocketBaseContext";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { pb } = useContext(PocketBaseContext);

    const [loggedIn, setLoggedIn] = useState(!!pb?.authStore.isValid);

    useEffect(() => {
        pb?.collection("users")
            .authRefresh()
            .then(() => {
                setLoggedIn(!!pb?.authStore.isValid);
            })
            .catch(console.log);
    }, [pb]);

    const authContextState: AuthContextType = {
        loggedIn,
        login(username: string, password: string) {
            return new Promise((resolve, reject) => {
                pb?.collection("users")
                    .authWithPassword(username, password)
                    .then(() => {
                        setLoggedIn(pb.authStore.isValid);
                        resolve();
                    })
                    .catch(reject);
            });
        },
        logout() {
            return new Promise(() => {
                pb?.authStore.clear();
                setLoggedIn(false);
            });
        },
    };

    return <AuthContext.Provider value={authContextState}>{children}</AuthContext.Provider>;
};
