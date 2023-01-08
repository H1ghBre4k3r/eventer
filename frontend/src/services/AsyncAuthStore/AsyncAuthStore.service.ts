import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { Admin, BaseAuthStore, Record } from "pocketbase";

type AuthStorageData = {
    model?: Record | Admin | null;
    token?: string;
};

// A light wrapper around the async storage.
export class AsyncAuthStore extends BaseAuthStore {
    private storageCache: { [key: string]: any } = {};

    private storageKey: string;

    constructor(storageKey = "pocketbase_auth") {
        super();

        this.storageKey = storageKey;
    }

    async init() {
        const data = JSON.parse((await AsyncStorageLib.getItem(this.storageKey)) ?? "{}") as AuthStorageData;

        this.storageCache[this.storageKey] = data;
    }

    get token(): string {
        const data = this.storageGet(this.storageKey) || {};

        return data.token || "";
    }

    get model(): Record | Admin | null {
        const data = this.storageGet(this.storageKey) || {};

        if (data === null || typeof data !== "object" || data.model === null || typeof data.model !== "object") {
            return null;
        }

        // admins don't have `collectionId` prop
        if (typeof data.model?.collectionId === "undefined") {
            return new Admin(data.model);
        }

        return new Record(data.model);
    }

    save(token: string, model: Record | Admin | null) {
        this.storageSet(this.storageKey, {
            token,
            model,
        });

        super.save(token, model);
    }

    clear() {
        this.storageRemove(this.storageKey);

        super.clear();
    }

    private storageGet(key: string): any {
        return this.storageCache[key];
    }

    private storageSet(key: string, value: any) {
        // store in local storage
        let normalizedVal = value;
        if (typeof value !== "string") {
            normalizedVal = JSON.stringify(value);
        }
        AsyncStorageLib.setItem(key, normalizedVal);

        // store in fallback
        this.storageCache[key] = value;
    }

    private storageRemove(key: string) {
        // delete from async storage
        AsyncStorageLib.removeItem(key).catch(console.error);
        // delete from fallback
        delete this.storageCache[key];
    }
}
