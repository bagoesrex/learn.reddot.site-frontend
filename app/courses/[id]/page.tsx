export default async function CourseDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    console.log(id)

    return (
        <main className="flex flex-col gap-10 text-gray-950">
            <section className="flex flex-col justify-center items-center pb-15 pt-[60px] w-full px-5">
                <div className="mt-20">
                    {id}
                </div>
            </section>
        </main>
    )
}