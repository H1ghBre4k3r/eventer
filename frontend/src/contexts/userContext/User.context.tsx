import { UserContextType } from "@eventer/api/User";
import { usePocketbase } from "@eventer/hooks/usePocketbase";
import React, { createContext, FC, PropsWithChildren } from "react";

export const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const { pb } = usePocketbase();

    return (
        <UserContext.Provider
            value={{
                user: pb?.authStore.model as unknown as Eventer.User,
            }}>
            {children}
        </UserContext.Provider>
    );
};
