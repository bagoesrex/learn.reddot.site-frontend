import CourseCard from "./course-card"

const lists = [
    {
        title: "Rookie Level 1",
        description: "Ini Descriptioon",
        image: "/dashboard/rookie.webp"
    },
    {
        title: "Rookie Level 1",
        description: "Ini Descriptioon",
        image: "/dashboard/rookie.webp"
    },
    {
        title: "Rookie Level 1",
        description: "Ini Descriptioon",
        image: "/dashboard/rookie.webp"
    },
]

export default function CourseSection() {
    return (
        <section className="flex flex-col justify-center items-center gap-2 pb-15 w-full text-primary px-5">
            <div className="max-w-5xl w-full columns-3 gap-3 justify-center items-center">
                {lists.map((list, index) => (
                    <CourseCard key={index} title={list.title} description={list.description} image={list.image} />
                ))}
            </div>
        </section>
    )
}