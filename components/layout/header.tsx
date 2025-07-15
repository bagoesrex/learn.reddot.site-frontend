"use client";

import Image from "next/image";
import Icon from "@/public/logo.svg";
import { Navbar } from "./navbar";
import { useState } from "react";
import AuthButton from "../shared/auth-button";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full bg-[#D10000] backdrop-blur-md shadow-sm text-white text-sm">
            <div className="mx-auto max-w-5xl px-4 md:px-2 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between">
                    <Link href={"/"}>
                        <div className="relative h-14 flex justify-center items-center w-20 overflow-hidden">
                            <Image src={Icon} alt="Logo Website" priority />
                        </div>
                    </Link>

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
