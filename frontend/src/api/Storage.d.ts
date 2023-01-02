export type StorageItems = {
    dummy?: string;
};

export type StorageSetFunction = <T extends keyof StorageItems>(key: T, value: StorageItems[T]) => void;

export type StorageContextType = {
    storage: StorageItems;
    set: StorageSetFunction;
};
