import LessonCard from "./lesson-card";

interface Lesson {
    id: string;
    module_id: string;
    title: string;
    content: string;
    order_number: number;
}

interface ModuleSectionProps {
    lessons: Lesson[];
}

export default function LessonSection({ lessons }: ModuleSectionProps) {

    return (
        <section className="flex flex-col justify-center items-center gap-2 pb-15 w-full text-primary px-5">
            <div className="max-w-5xl w-full flex flex-col gap-3 justify-center items-center">
                {lessons.map((lesson, index) => (
                    <LessonCard
                        key={index}
                        id={lesson.id}
                        title={lesson.title}
                        order_number={lesson.order_number}
                        content={lesson.content}
                    />
                ))}
            </div>
        </section>
    )
}