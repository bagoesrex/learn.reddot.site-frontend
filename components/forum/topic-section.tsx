import TopicCard from "./topic-card";
import { getAllTopics } from "@/lib/api/topics/getAllTopics";

export default async function TopicSection() {
    let topics = [];

    try {
        topics = await getAllTopics();
    } catch (error: unknown) {
        console.error("Failed to fetch topics:", error);
        return <div className="mt-20">Error loading forum</div>;
    }

    return (
        <section className="flex flex-col justify-center items-center pb-15 pt-[60px] w-full px-5">
            <div className="flex flex-col justify-center items-start max-w-5xl gap-2 min-h-25 w-full px-5 py-4 relative">
                <h1 className="heading-main !text-2xl">Topics.</h1>
                <h2 className="text-md">Jelajahi topic dan berkomunikasi langsung dengan user lain</h2>

                {topics.length === 0 ? (
                    <p>Belum ada topik yang tersedia.</p>
                ) : (
                    topics.map(topic => (
                        <TopicCard
                            key={topic.id}
                            id={topic.id}
                            title={topic.title}
                            content={topic.content}
                        />
                    ))
                )}
            </div>
        </section>
    );
}
