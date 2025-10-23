import React from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

const netflixTabs = [
    { name: "Home", link: "/browse" },
    { name: "TV Shows", link: "/genre/83" },
    { name: "Movies", link: "/genre/34399" },
    { name: "New & Popular", link: "/latest" },
    { name: "My List", link: "/my-list" },
    { name: "Browse by Languages", link: "/original-audio" },
];

export const Header = () => {
    return (
        <nav className="flex flex-row gap-5 items-center ">
            <img
                src={Logo}
                className="w-[90px] mr-6 "
            />
            {netflixTabs.map((tab) => (
                <Link
                    key={tab.name}
                    className="text-sm cursor-pointer"
                    to={tab.link}
                >
                    {tab.name}
                </Link>
            ))}
        </nav>
    );
};
