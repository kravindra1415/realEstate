export interface UserForRegister {
    userName: string | undefined;
    email?: string | undefined;
    password: string | undefined;
    mobile?: number | undefined;
}

export interface UserForLogin {
    userName: string;
    password: string;
    token: string;
}