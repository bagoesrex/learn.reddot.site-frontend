import { Card } from "../ui/card"

interface PostCardProps {
    content: string
}

export default function PostCard({ content }: PostCardProps) {
    return (
        <Card className="px-4 py-2 flex flex-col gap-2 w-full justify-center rounded-md shadow-none bg-white/20">
            <p className="text-xs">
                {content}
            </p>
        </Card>
    )
}