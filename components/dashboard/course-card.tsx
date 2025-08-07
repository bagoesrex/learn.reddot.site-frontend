import Link from "next/link"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface CourseCardProps {
    title: string
    description: string
    image: string
}

export default function CourseCard({ title, description, image }: CourseCardProps) {
    return (
        <Card className="px-4 py-4 flex flex-col gap-2 w-full items-center justify-center rounded-md shadow-md bg-white/20 text-primary">
            <h2 className="font-bold">{title}</h2>
            <Image src={image} alt={"Course Image"} width={230} height={230} />
            <p>{description}</p>
            <Link href="/dashboard">
                <Button asChild className="text-sm">
                    <span>
                        Yuk Mulai Belajar
                        <ChevronRight />
                    </span>
                </Button>
            </Link>
        </Card>
    )
}