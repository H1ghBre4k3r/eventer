import { AuthContextType } from "@eventer/api/Auth";
import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import { PocketBaseContext } from "../pocketBaseContext";

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { pb } = useContext(PocketBaseContext);

    const [loggedIn, setLoggedIn] = useState(!!pb?.authStore.isValid);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        pb?.collection("users")
            .authRefresh()
            .then(() => {
                // if we are successful, we need to update the login state
                setLoggedIn(!!pb?.authStore.isValid);
            })
            .catch(e => {
                // eslint-disable-next-line no-console
                console.log(e);
                // if we failed, we need to update the login state accordingly
                setLoggedIn(false);
            })
            .finally(() => {
                // after refreshing our auth state, we need to set the raedy flag for our UI to reload
                setReady(true);
            });
    }, [pb]);

    const authContextState: AuthContextType = {
        isReady,
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
