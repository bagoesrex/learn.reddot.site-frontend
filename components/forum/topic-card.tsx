import Link from "next/link";
import { Card } from "../ui/card";

interface TopicCardProps {
    id: string
    title: string
    content: string
}

export default function TopicCard({ id, title, content }: TopicCardProps) {
    return (
        <Link href={`/forum/${id}`} >
            <Card className="px-4 py-2 flex flex-col gap-2 w-full justify-center rounded-md shadow-md bg-white/20">
                <h3 className="text-xs font-semibold">
                    {title}
                </h3>

                <p className="text-xs">
                    {content}
                </p>
            </Card>
        </Link>
    )
}