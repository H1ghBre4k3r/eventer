export type AuthContextType = {
    isReady: boolean;

    loggedIn: boolean;

    login(username: string, password: string): Promise<void>;

    logout(): Promise<void>;
};
