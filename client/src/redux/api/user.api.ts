import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { emailSchema, type IAuthState, type IUser, type UserAuth } from "../../shared";

export const authApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (build) => ({
        logIn: build.mutation<IAuthState, UserAuth>({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body: user,
            }),
        }),
        signUp: build.mutation<IAuthState, IUser & { password: string }>({
            query: (user) => ({
                url: "/signup",
                method: "POST",
                body: user,
            }),
        }),
        checkifUserExist: build.query<{ existing: boolean }, string>({
            query: (email) => `users/check?email=${email}`,
        }),
    }),
});

export const { useLogInMutation, useSignUpMutation, useLazyCheckifUserExistQuery } =
    authApi;
