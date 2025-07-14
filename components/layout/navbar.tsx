"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";
import NavbarList from "./navbar-list";
import Link from "next/link";

const navbarList: { title: string; href: string }[] = [
    { title: "Home", href: "/" },
    { title: "News", href: "/news" },
    { title: "Artikel", href: "/article" },
    { title: "About", href: "/about" },
];

type NavbarProps = {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
};

export function Navbar({ isOpen, setIsOpen }: NavbarProps) {
    return (
        <>
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList className="flex gap-3">
                    {navbarList.map(({ title, href }) => (
                        <NavbarList key={href} href={href}>
                            <span className="flex items-center gap-1 justify-center">
                                {title}
                                {title === "E-Learning" && <ArrowUpRight color="white" size={14} />}
                            </span>
                        </NavbarList>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </>
    );
}

Navbar.MobileMenu = function MobileMenu({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    return (
        <>
            {navbarList.map(({ title, href }) => (
                <Link
                    key={href}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 font-medium hover:text-black transition"
                >
                    <span className="flex items-center gap-1">
                        {title}
                        {title === "E-Learning" && <ArrowUpRight color="white" size={14} />}
                    </span>
                </Link>
            ))}
            <div className="flex flex-col gap-2 justify-center items-center *:w-full text-center">
                <Link href="/signin" className="py-1.5 px-3 border border-white rounded hover:bg-white hover:text-[#D10000] transition">
                    Masuk
                </Link>
                <Link href="/signup" className="py-1.5 px-3 rounded bg-white text-[#D10000] hover:opacity-90 transition">
                    Daftar
                </Link>
            </div>
        </>
    );
};
