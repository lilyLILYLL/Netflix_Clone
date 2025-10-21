import { store, useAppDisptach, useAppSelector } from "./store";
import type { RootState, AppDispatch } from "./store";
import { useLogInMutation, useSignUpMutation } from "./api/user.api";
import { logIn, logout } from "./slices";

export {
    store,
    useAppDisptach,
    useAppSelector,
    useLogInMutation,
    useSignUpMutation,
    logout,
    logIn,
};
export type { RootState, AppDispatch };
