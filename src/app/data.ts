export interface CreateNewUser {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;   
}

export interface userRole {
    role: {
        store: string;
        admin: string;
        user: string;
    }
}


