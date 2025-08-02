"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import React from 'react';
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl  z-50 rounded-full border-y-4 border-indigo-500 m-14 mx-auto", "bg-black text-white dark:bg-black dark:text-white", className)}
        >
            <Menu setActive={setActive}>
                <Link href="/">
                    <MenuItem setActive={setActive} active={active} item="Home" >
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
                        <HoveredLink href="/courses">All Courses</HoveredLink>
                        <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                        <HoveredLink href="/courses">Advanced Systems and Instruments</HoveredLink>
                        <HoveredLink href="/courses">Literals of Music</HoveredLink>
                        <HoveredLink href="/courses">Professional Bootcamp</HoveredLink>
                    </div>
                </MenuItem>

                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us">
                    </MenuItem>
                </Link>
            </Menu>




        </div>
    );
};

export default Navbar;