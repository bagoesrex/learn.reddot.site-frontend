import { Hourglass, SmileIcon } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
    username?: string
}

export default function HeroSection({ username = "User" }: HeroSectionProps) {
    return (
        <section className="flex flex-col justify-center items-center gap-2 pb-5 pt-[60px] w-full text-background px-5">
            <div className="flex flex-col justify-center items-start max-w-5xl rounded-xl bg-primary/85 min-h-25 w-full px-5 py-4 relative">
                <h1 className="heading-main !text-2xl">Hai, {username}.</h1>
                <div className="flex flex-row gap-2 items-center">
                    <h2 className="text-md">Tetap semangat belajar, kamu pasti bisa!</h2>
                    <SmileIcon size={22} />
                </div>
                <div className="flex flex-row gap-5 items-center mt-5">
                    <div className="flex flex-row gap-3 justify-center items-center">
                        <div className="bg-background p-2 rounded-md text-primary/80">
                            <Hourglass />
                        </div>
                        <div className="flex flex-col gap-0.5 justify-center">
                            <h3 className="font-semibold">10</h3>
                            <p>Completed</p>
                        </div>
                    </div>
                </div>
                <Image src={"/smile.webp"} alt={""} width={150} height={150} className="absolute border-1 rounded-2xl -bottom-10 right-10" />
                <Image src={"/smile.webp"} alt={""} width={200} height={200} className="absolute border-1 rounded-2xl bottom-10 right-25" />
                <Image src={"/smile.webp"} alt={""} width={150} height={150} className="absolute border-1 rounded-2xl -bottom-10 right-50" />
            </div>
        </section>
    )
}