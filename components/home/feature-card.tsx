import Link from "next/link";
import { Card } from "../ui/card";
import clsx from "clsx";

type Props = {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    href: string;
};

export default function FeatureCard({ title, subtitle, description, buttonText, href }: Props) {
    return (
        <Card className="px-4 pt-1 pb-4 flex flex-col items-center gap-2.5 w-full justify-center rounded-lg shadow-2xl bg-[#F6F6F6] text-center">
            <span className="text-[10px] bg-red-100 px-2 py-1 -ml-5 rotate-[-7deg] font-medium self-start max-w-40">
                {subtitle}
            </span>

            <h3 className="text-xs font-semibold w-full">
                {title}
            </h3>

            <p className="text-xs w-full">
                {description}
            </p>

            <Link
                href={href}
                className={clsx(
                    "bg-transparent border-1 border-[#D10000] text-[#D10000] hover:bg-[#D10000] hover:text-white text-xs font-medium px-4 py-2 rounded transition"
                )}
            >
                {buttonText}
            </Link>
        </Card>
    );
}
