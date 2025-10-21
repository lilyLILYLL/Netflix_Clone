import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    primary?: boolean;
    underline?: boolean;
}

export function Button({
    label,
    primary = false,
    underline = false,
    className,
    ...props
}: ButtonProps) {
    if (underline)
        return (
            <button
                className={`underline cursor-pointer self-center w-fit ${className}`}
                {...props}
            >
                {label}
            </button>
        );
    return (
        <button
            className={`${
                primary ? "bg-red-600" : ""
            } p-2 rounded-md  cursor-pointer  flex items-center justify-center ${className}`}
            {...props}
        >
            {label}
        </button>
    );
}
