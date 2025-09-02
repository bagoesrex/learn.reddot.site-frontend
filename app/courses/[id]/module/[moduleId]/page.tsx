import HeroSection from "@/components/courses/module/hero-section";
import LessonSection from "@/components/courses/module/lesson-section";
import { getLessonsByModuleId } from "@/lib/api/lessons/getLessonsByModuleId";
import { getModuleById } from "@/lib/api/modules/getModuleById";

export default async function CourseModuleDetailPage({
    params,
}: {
    params: Promise<{ moduleId: string }>;
}) {
    const { moduleId } = await params;

    let lessons = [];
    let moduleDetail = null;

    try {
        [lessons, moduleDetail] = await Promise.all([
            getLessonsByModuleId({ moduleId: moduleId }),
            getModuleById({ moduleId: moduleId }),
        ]);
    } catch (error: unknown) {
        console.error("Failed to fetch topic:", error);
        return <div className="mt-20">Error loading module detail</div>;
    }

    console.log(lessons)
    console.log(module)

    return (
        <main className="flex flex-col gap-5 text-gray-950">
            <HeroSection title={moduleDetail.title} />
            <LessonSection lessons={lessons} />
        </main>
    )
}