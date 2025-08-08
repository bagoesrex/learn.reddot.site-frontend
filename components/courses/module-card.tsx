import Link from "next/link"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { ChevronRight } from "lucide-react"

interface ModuleCardProps {
    id: string
    title: string
    order_number: number
}

export default function CourseCard({ id, title, order_number }: ModuleCardProps) {
    return (
        <Card className="px-4 py-4 flex flex-row justify-between gap-2 w-full items-center rounded-md shadow-md bg-white/20 text-primary">
            <h2 className="font-bold">{title}</h2>
            <p>Order Number: {order_number}</p>
            <Link href={`courses/module/${id}`}>
                <Button asChild className="text-sm">
                    <span>
                        <ChevronRight />
                    </span>
                </Button>
            </Link>
        </Card>
    )
}