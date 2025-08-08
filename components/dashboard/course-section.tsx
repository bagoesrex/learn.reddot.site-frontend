import { getAllCourses } from "@/lib/api/courses/getAllCourses";
import CourseCard from "./course-card"

export default async function CourseSection() {
    let courses = [];

    try {
        courses = await getAllCourses();
        console.log(courses)
    } catch (error: unknown) {
        console.error("Failed to fetch courses:", error);
        return <div className="mt-20">Error loading courses</div>;
    }

    return (
        <section className="flex flex-col justify-center items-center gap-2 pb-15 w-full text-primary px-5">
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-3 justify-center items-center">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        id={course.id}
                        title={course.title}
                        description={course.description}
                        image={course.thumbnail_url}
                    />
                ))}
            </div>
        </section>
    )
}