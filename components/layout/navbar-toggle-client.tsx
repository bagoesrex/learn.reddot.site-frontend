"use client";

import { useState } from "react";
import { Navbar } from "./navbar";

export default function NavbarToggleClient() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="mr-0 md:-mr-21">
                <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>

            {isOpen && (
                <div className="mb-2 md:hidden flex flex-col gap-3 animate-fadeDown">
                    <Navbar.MobileMenu setIsOpen={setIsOpen} />
                </div>
            )}
        </>
    );
}
