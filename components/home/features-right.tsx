import Image from "next/image";
import Underline from "@/public/text-underline.svg"
import { Card } from "../ui/card";
import { BookOpenText, Gamepad2, Lightbulb, Users } from "lucide-react";

export default function FeaturesRight() {
    return (
        <div className="w-full md:w-1/2">
            <div className="p-4 h-full">
                <h2 className="text-3xl md:text-4xl font-medium leading-tight">Belajar AI Gak Harus Ribet. di <span className="text-red-600">Reddot</span>, Semua Jadi <br /> Tepat Sasaran</h2>
                <Image src={Underline} alt="" className="pr-20" />
                <div className="flex flex-col gap-1 mt-8 text-sm">
                    <Card className="flex flex-row w-full items-center bg-white/60 py-2 px-3 rounded-sm">
                        <Card className="px-3 py-2 rounded-sm bg-white/80">
                            <BookOpenText size={14} />
                        </Card>
                        <p className="ml-1">Materi ringkas dan jelas</p>
                    </Card>

                    <Card className="flex flex-row w-full items-center bg-white/60 py-2 px-3 rounded-sm">
                        <Card className="px-3 py-2 rounded-sm bg-white/80">
                            <Lightbulb size={14} />
                        </Card>
                        <p className="ml-1">Contoh langsung di kehidupan nyata</p>
                    </Card>

                    <Card className="flex flex-row w-full items-center bg-white/60 py-2 px-3 rounded-sm">
                        <Card className="px-3 py-2 rounded-sm bg-white/80">
                            <Gamepad2 size={14} />
                        </Card>
                        <p className="ml-1">Interaktif & seru</p>
                    </Card>

                    <Card className="flex flex-row w-full items-center bg-white/60 py-2 px-3 rounded-sm">
                        <Card className="px-3 py-2 rounded-sm bg-white/80">
                            <Users size={14} />
                        </Card>
                        <p className="ml-1">Gratis & terbuka untuk semua kalangan</p>
                    </Card>
                </div>
            </div>
        </div>
    )
}