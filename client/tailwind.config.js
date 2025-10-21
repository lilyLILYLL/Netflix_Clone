/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "640.1px", // => @media (min-width: 640.1px) { ... }
                md: "768.1px", // => @media (min-width: 768.1px) { ... }
                lg: "1024.1px", // => @media (min-width: 1024.1px) { ... }
                xl: "1280.1px ", // => @media (min-width: 1280.1px) { ... }
            },
        },
    },
    plugins: [],
};
