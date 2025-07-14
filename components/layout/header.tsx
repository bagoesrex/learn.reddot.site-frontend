"use client";

import Image from "next/image";
import Icon from "@/public/logo.svg";
import { Navbar } from "./navbar";
import { useState } from "react";
import AuthButton from "../shared/auth-button";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-[#D10000] backdrop-blur-md shadow-sm text-white text-sm">
            <div className="mx-auto max-w-4xl px-4 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <Image src={Icon} alt="Logo Website" className="h-14 w-auto" priority />
                    </div>

                    <div className="mr-0 md:-mr-21">
                        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>

                    <div className="hidden md:block">
                        <AuthButton />
                    </div>
                </div>

                {isOpen && (
                    <div className="mb-2 md:hidden flex flex-col gap-3 animate-fadeDown">
                        <Navbar.MobileMenu setIsOpen={setIsOpen} />
                    </div>
                )}
            </div>
        </header>
    );
}
