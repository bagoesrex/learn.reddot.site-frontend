import { Card } from "../ui/card";
import FeatureCard from "./feature-card";
import Image from "next/image";
import RGB from "@/public/rgb-light.svg"
import Megumine from "@/public/megumine.webp"

export default function FeaturesLeft() {
    return (
        <div className="relative w-full md:w-1/2 flex justify-center pt-7">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-red-600 rounded-full opacity-30 z-0" />

            <Card className="absolute w-96 mx-20 h-70 z-10 rounded-2xl shadow-2xl flex flex-col gap-2 px-3 py-3">
                <div className="pl-2">
                    <Image src={RGB} alt="Logo RGB" width={30} height={30} />
                </div>
                <div className="overflow-hidden h-full relative ">
                    <Image src={Megumine} alt="Megumine" className="w-full h-full object-cover object-[10%_25%] overflow-hidden rounded-lg" />
                </div>
            </Card>

            <div className="relative z-10 rounded-3xl p-6 h-full mt-50">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <div className="w-[45%]">
                        <FeatureCard title="Pelajari Atificial Intelligent" subtitle="Materi Up to Date" description="Pelajari perkembangan dan kemajuan AI dan bagaimana menggunakannya di kehidupan sehari hari" href="/" buttonText="Lihat Materi" />
                    </div>
                    <div className="w-[45%]">
                        <FeatureCard title="Diskusi Sesama Pengguna" subtitle="Forum Diskusi" description="Jangan takut sendiri, gabung dengan pengguna yang lain dalam forum diskusi dan dapatkan insight baru" href="/" buttonText="Lihat Forum" />
                    </div>
                </div>
            </div>
        </div>

    )
}