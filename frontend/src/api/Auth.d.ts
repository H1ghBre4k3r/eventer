export type AuthContextType = {
    loggedIn: boolean;

    login(username: string, password: string): Promise<void>;

    logout(): Promise<void>;
};
