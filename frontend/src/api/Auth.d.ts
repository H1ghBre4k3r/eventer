export type AuthContextType = {
    loggedIn: boolean;

    login(): Promise<void>;

    logout(): Promise<void>;
};
