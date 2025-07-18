import Image from "next/image";
import Link from "next/link";
import Icon from "@/public/logo.svg";
import { AuthButton } from "../supabase/auth-button";
import NavbarToggleClient from "./navbar-toggle-client";

export default async function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-[#D10000] backdrop-blur-md shadow-sm text-white text-sm">
            <div className="mx-auto max-w-5xl px-4 md:px-2 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <div className="relative h-14 flex justify-center items-center w-20 overflow-hidden">
                            <Image src={Icon} alt="Logo Website" priority />
                        </div>
                    </Link>

                    <NavbarToggleClient />

                    <div className="hidden md:block">
                        <AuthButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
