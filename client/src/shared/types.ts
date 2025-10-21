// export type User = {
//     usrname: string;
//     fullName: string;
// };

export type UserAuth = {
    username: string;
    password: string;
};
export interface IUser {
    username: string;
    fullName: string;
}

export interface IAuthState {
    token: string;
    user: IUser | null;
}
