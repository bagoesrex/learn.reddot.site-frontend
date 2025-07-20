"use client";

import { useState } from "react";
import { Navbar, MobileMenu } from "./navbar";

export default function NavbarToggleClient() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mr-0 md:mr-4">
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {isOpen && (
                <div className="absolute top-14 left-0 w-full bg-primary/85 text-white z-40 animate-fadeDown">
                    <MobileMenu setIsOpen={setIsOpen} />
                </div>
            )}
        </>
    );
}
