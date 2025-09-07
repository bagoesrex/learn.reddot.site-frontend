import { User } from "lucide-react"
import { Card } from "../ui/card"

interface PostCardProps {
    content: string
}

export default function PostCard({ content }: PostCardProps) {
    return (
        <div className="w-full flex flex-row gap-2 items-center">
            <Card className="px-4 py-2 flex gap-2 w-full h-fit justify-center rounded-md shadow-none bg-white/20">
                <p className="text-xs break-words">
                    {content}
                </p>
            </Card>
            <div className="bg-primary/70 px-1 py-1 rounded-full">
                <User size={23} color="white" />
            </div>
        </div>
    )
}