import React from "react";
import { useAppSelector, type RootState, useAppDisptach, logout } from "../redux";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

export function StreamingPage() {
    const auth = useAppSelector((state: RootState) => state.userSlice);
    const dispatch = useAppDisptach();
    const navigate = useNavigate();
    console.log(auth);

    return (
        <div>
            <div>{auth.token}</div>
            <Button
                label="SIgn Out"
                primary
                onClick={() => {
                    dispatch(logout());
                    navigate("/");
                }}
            />
        </div>
    );
}
