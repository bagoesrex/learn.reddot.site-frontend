import HeroSection from "@/components/courses/hero-section";
import ModuleSection from "@/components/courses/module-section";
import { getCourseById } from "@/lib/api/courses/getCourseById";
import { getModulesByCourseId } from "@/lib/api/modules/getModuleByCourseId";

export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    console.log(id)

    let modules = [];
    let course = null;

    try {
        [modules, course] = await Promise.all([
            getModulesByCourseId(id),
            getCourseById(id),
        ]);
    } catch (error: unknown) {
        console.error("Failed to fetch topic:", error);
        return <div className="mt-20">Error loading modules</div>;
    }

    console.log(modules)
    console.log(course)

    return (
        <main className="flex flex-col gap-5 text-gray-950">
            <HeroSection title={course.title} description={course.description} />
            <ModuleSection modules={modules} />
        </main>
    )
}