import { PocketBaseContextType } from "@eventer/api/PocketBase";
import { AsyncAuthStore } from "@eventer/services/AsyncAuthStore";
import Pockebase from "pocketbase";
import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

export const PocketBaseContext = createContext<PocketBaseContextType>({} as PocketBaseContextType);

export const PocketBaseContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [pb, setPocketBase] = useState<Pockebase | undefined>();

    useEffect(() => {
        const asyncAuthStore = new AsyncAuthStore();
        asyncAuthStore.init().then(() => setPocketBase(new Pockebase("https://eventer.lome.dev", asyncAuthStore)));
    }, []);

    return (
        <PocketBaseContext.Provider
            value={{
                pb,
                isReady: !!pb,
            }}>
            {children}
        </PocketBaseContext.Provider>
    );
};
