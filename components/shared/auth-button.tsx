import Link from "next/link";

export default function AuthButton() {
    return (
        <div className="flex flex-row gap-2 justify-center items-center">
            <Link href="/auth/login" className="py-1 px-3 border border-white rounded hover:bg-white hover:text-[#D10000] transition">
                Masuk
            </Link>
            <Link href="/auth/sign-up" className="py-1 px-3 rounded bg-white text-[#D10000] hover:opacity-90 transition">
                Daftar
            </Link>
        </div>
    );
}