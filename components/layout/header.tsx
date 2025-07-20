import Image from "next/image";
import Link from "next/link";
import Icon from "@/public/logo.svg";
import { AuthButton } from "../supabase/auth-button";
import NavbarToggleClient from "./navbar-toggle-client";

export default async function Header() {
    return (
        <header className="fixed top-0 z-50 w-full bg-primary/85 backdrop-blur-md shadow-sm text-white text-sm">
            <div className="mx-auto max-w-5xl px-4 transition-all duration-300 flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-row w-full items-center justify-between md:hidden">
                        <Link href="/">
                            <div className="relative h-14 flex justify-center items-center w-20 overflow-hidden">
                                <Image src={Icon} alt="Logo Website" priority />
                            </div>
                        </Link>

                        <NavbarToggleClient />
                    </div>

                    <div className="hidden md:flex flex-row items-center justify-between gap-20">
                        <Link href="/">
                            <div className="relative h-14 flex justify-center items-center w-20 overflow-hidden">
                                <Image src={Icon} alt="Logo Website" priority />
                            </div>
                        </Link>

                        <NavbarToggleClient />
                    </div>

                    <div className="hidden md:block">
                        <AuthButton />
                    </div>
                </div>
            </div>
        </header>
    );
}
