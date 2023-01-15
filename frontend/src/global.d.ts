declare namespace Eventer {
    interface User {
        id: string;
        username: string;
        email: string;
        name: string;
    }

    // A type mapping collection names to their respective types
    type Collections = {
        users: User;
    };
}
