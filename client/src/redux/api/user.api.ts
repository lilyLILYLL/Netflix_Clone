import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IAuthState, IUser, UserAuth } from "../../shared";

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
    }),
});

export const { useLogInMutation, useSignUpMutation } = authApi;
