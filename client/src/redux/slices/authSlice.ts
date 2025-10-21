import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser, IAuthState } from "../../shared";

const initialState: IAuthState = {
    user: null,
    token: "",
};

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<IAuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: () => {
            return { ...initialState };
        },
    },
});

export default userSlice.reducer;
export const { logIn, logout } = userSlice.actions;
