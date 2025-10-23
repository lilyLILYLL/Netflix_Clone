import React from "react";
import { Logo } from "../assets";
import { SignInForm } from "../components";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";

export function SignInPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { email } = location.state || {};

    return (
        <div className={`w-screen min-h-screen  background-image`}>
            <img
                src={Logo}
                className="w-[100px] md:w-[150px] absolute top-10 cursor-pointer translate-x-[20px] md:translate-x-[100px] duration-200 ease-linear transition-transform"
                onClick={() => navigate("/")}
            />
            <div className="flex flex-row justify-center items-center min-h-screen ">
                <SignInForm email={email} />
            </div>
        </div>
    );
}
