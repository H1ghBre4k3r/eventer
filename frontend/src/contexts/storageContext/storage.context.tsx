import { StorageContextType, StorageItems, StorageSetFunction } from "@eventer/api/Storage";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import React, { createContext, FC, PropsWithChildren, useCallback, useEffect, useState } from "react";

// TODO lome: move to service directory
export const defaultStorage: StorageItems = {};

export const StorageContext = createContext<StorageContextType>({
    storage: defaultStorage,
    set: (_key, _value) => {
        //
    },
});

export const StorageContextProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [storage, setStorage] = useState<StorageItems>(defaultStorage);

    // On intial mount, read storage Content
    useEffect(() => {
        let key: keyof StorageItems;
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        for (key in defaultStorage) {
            const itemKey = key;
            // try to get all items from storage
            AsyncStorageLib.getItem(itemKey)
                .then(value => {
                    // update storage-state
                    setStorage(currentStorage => {
                        const newStorage: StorageItems = {
                            ...currentStorage,
                        };
                        // use value from storage for state or use default one
                        (newStorage[itemKey] as StorageItems[keyof StorageItems]) = value
                            ? JSON.parse(value)
                            : defaultStorage[itemKey];
                        return newStorage;
                    });
                })
                .catch(reason => {
                    // eslint-disable-next-line no-console
                    console.error(reason);
                    // on error, set the default value as storage
                    setStorage(currentStorage => {
                        const newStorage: StorageItems = {
                            ...currentStorage,
                        };
                        (newStorage[itemKey] as StorageItems[keyof StorageItems]) = defaultStorage[itemKey];
                        return newStorage;
                    });
                });
        }
    }, []);

    const set: StorageSetFunction = useCallback((key, value) => {
        // update state
        setStorage(curStorage => {
            const newStorage = {
                ...curStorage,
            };
            newStorage[key] = value;
            return newStorage;
        });
        // and set item in storage
        if (value === null) {
            // eslint-disable-next-line no-console
            AsyncStorageLib.removeItem(key).catch(console.error);
        } else {
            // eslint-disable-next-line no-console
            AsyncStorageLib.setItem(key, JSON.stringify(value)).catch(console.error);
        }
    }, []);

    return <StorageContext.Provider value={{ storage, set }}>{children}</StorageContext.Provider>;
};
