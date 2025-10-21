import { useEffect, useState, useRef } from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function TextInput({ label, className, ...props }: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node) &&
                inputRef.current
            ) {
                inputRef.current.blur();
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleFocus = () => {
        setIsFocused(true);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div
            className={` h-[70px] ${
                isFocused ? "border-[red] border-[2px] rounded-md" : ""
            } flex flex-col justify-center `}
            onClick={handleFocus}
            ref={containerRef}
        >
            <div
                className={`border-white border-[2px] p-2 px-6 rounded-md m-[3px] h-full relative`}
            >
                <div
                    className={`absolute  text-gray-400 ${
                        isFocused || props.value
                            ? "text-xs top-1 font-thin"
                            : " text-md font-semibold top-1/4"
                    } transition-all duration-10 ease-linear `}
                >
                    {label}
                </div>
                <input
                    className={`outline-none bg-transparent mt-4 bg-red-600 ${className}`}
                    ref={inputRef}
                    onFocus={() => setIsFocused(true)}
                    autoComplete="off"
                    {...props}
                />
            </div>
        </div>
    );
}
