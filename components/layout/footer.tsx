import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer
            aria-label="Site Footer"
            className="flex flex-col min-w-sm items-center bg-primary/80 text-white py-12 px-6"
        >
            <div className="w-full max-w-5xl flex flex-wrap gap-8">
                <div className="w-full md:w-6/12">
                    <h1 className="text-xl font-bold mb-2">Tentang Kami</h1>
                    <p className="text-sm leading-relaxed">
                        RedDot Community adalah komunitas edukasi AI yang lahir dari
                        kegelisahan akan potensi penyalahgunaan AI di masa depan. Kami
                        hadir untuk meningkatkan literasi digital dan etika teknologi.
                    </p>
                    <ul className="text-sm space-y-2 mt-3">
                        <li className="flex flex-row gap-2 items-center">
                            <Instagram size={18} />
                            <a href="#" className="hover:underline">Ig</a>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <Mail size={18} />
                            <a href="#" className="hover:underline">Gmail</a>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                            <Phone size={18} />
                            <a href="#" className="hover:underline">Whangsaff</a>
                        </li>
                    </ul>
                </div>

                <nav className="w-full sm:w-4/12 md:w-2/12">
                    <h2 className="font-semibold mb-2">Line Of Revolution</h2>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                        <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                        <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                        <li><a href="#" className="hover:underline">Tentang Kami</a></li>
                    </ul>
                </nav>

                <nav className="w-full sm:w-4/12 md:w-2/12">
                    <h2 className="font-semibold mb-2">Bantuan dan Panduan</h2>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Syarat dan Ketentuan</a></li>
                        <li><a href="#" className="hover:underline">Kebijakan Privasi</a></li>
                        <li><a href="#" className="hover:underline">Bantuan</a></li>
                    </ul>
                </nav>
            </div>

            <div className="w-full text-center text-xs pt-15">
                &copy; {new Date().getFullYear()} RedDot Community. All rights reserved.
            </div>
        </footer>
    )
}
