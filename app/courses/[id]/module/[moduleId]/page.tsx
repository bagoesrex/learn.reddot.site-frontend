export default async function CourseModuleDetailPage({
    params,
}: {
    params: Promise<{ moduleId: string }>;
}) {
    const { moduleId } = await params;

    return (
        <main className="flex flex-col gap-5 text-gray-950 pt-50">
            {moduleId}
        </main>
    )
}