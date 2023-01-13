import { PocketBaseContextType } from "@eventer/api/PocketBase";
import { AsyncAuthStore } from "@eventer/services/AsyncAuthStore";
import Pockebase from "pocketbase";
import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";

export const PocketBaseContext = createContext<PocketBaseContextType>({} as PocketBaseContextType);

export const PocketBaseContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [pbUrl, setPockerbaseUrl] = useState<string>("https://eventer.lome.dev");
    const [pb, setPocketBase] = useState<Pockebase | undefined>();

    useEffect(() => {
        // whenever our url updates, we need to update the Pocketbase instance aswell
        const asyncAuthStore = new AsyncAuthStore();
        asyncAuthStore.init().then(() => setPocketBase(new Pockebase(pbUrl, asyncAuthStore)));
    }, [pbUrl]);

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
