"use client";
import React, { useState } from "react";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    // { name: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [visibleKey, setVisibleKey] = useState(-1);
    const onClick = (item: any, key: any) => {
        setVisibleKey(key);
    };

    return (
        <div>
            <div className="rounded-xl bg-black/10 backdrop-blur-md backdrop-brightness-75 border border-1 border-[#dddddd]/20 hover:border-[#ffd978]/30 transition ease-in-out duration-200">
                <ul className="flex gap-1 px-1 py-1">
                    {navLinks.map((item, key) => (
                        <a href={item.href} onClick={() => onClick(item, key)}>
                            <li
                                key={item.name}
                                className={`${
                                    key === visibleKey ? "bg-[#dddddd]/10" : ""
                                } px-6 py-2 rounded-lg text-neutral-50 hover:bg-[#ffd978]/20 transition ease-in-out duration-200`}
                            >
                                {item.name}
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
