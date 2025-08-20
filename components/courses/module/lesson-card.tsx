import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

interface LessonCardProps {
    id: string
    title: string
    order_number: number
    content: string
}

export default function LessonCard({ id, title, order_number, content }: LessonCardProps) {
    return (
        <Card className="px-4 py-2 flex flex-row justify-between gap-2 w-full items-center rounded-md shadow-md bg-white/20 text-primary">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`lesson-${id}`}>
                    <AccordionTrigger className="font-bold text-primary">
                        {title}
                    </AccordionTrigger>

                    <AccordionContent className="space-y-3 text-gray-700">
                        <p className="text-sm">Order Number: {order_number}</p>
                        <p className="text-sm">{content}</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Card>
    )
}