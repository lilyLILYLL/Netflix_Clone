import React from "react";
import { Logo } from "../assets";
import { SignInForm, SignUpForm } from "../components";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
    const navigate = useNavigate();
    return (
        <div className={`w-screen min-h-screen  background-image`}>
            <img
                onClick={() => navigate("/")}
                src={Logo}
                className="w-[100px] md:w-[150px] absolute top-10 cursor-pointer  translate-x-[20px] md:translate-x-[100px] duration-200 ease-linear transition-transform"
            />
            <div className="flex flex-row justify-center items-center min-h-screen ">
                <SignUpForm />
            </div>
        </div>
    );
}
