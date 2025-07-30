import { createClient } from "@/lib/supabase/server";
import TopicCard from "./topic-card";

export default async function TopicSection() {
    const supabase = await createClient()

    const { data: topics, error } = await supabase
        .from('topics')
        .select('*')

    if (error) {
        console.error('Error fetching topics:', error.message)
        return <div>Error loading forum</div>
    }

    return (
        <section className="flex flex-col justify-center items-center pb-15 pt-[60px] w-full px-5">
            <div className="flex flex-col justify-center items-start max-w-5xl gap-2 min-h-25 w-full px-5 py-4 relative">
                <h1 className="heading-main !text-2xl">Topics.</h1>
                <h2 className="text-md">Jelajahi topic dan berkomunikasi langsung dengan user lain</h2>

                {topics?.map(topic => (
                    <TopicCard key={topic.id} id={topic.id} title={topic.title} content={topic.content} />
                ))}
            </div>
        </section>
    )
}