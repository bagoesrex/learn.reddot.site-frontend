import PostCard from "@/components/forum/post-card";
import PostForm from "@/components/forum/post-form";
import { getUser } from "@/lib/api/auth/getUser";
import { getPostsByTopicId } from "@/lib/api/posts/getPostsByTopicId";
import { getTopicById } from "@/lib/api/topics/getTopicById";

export default async function TopicPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let posts = [];
    let topic = null;
    const user = await getUser();
    const userId = user!.id

    try {
        [posts, topic] = await Promise.all([
            getPostsByTopicId({ topicId: slug }),
            getTopicById({ topicId: slug }),
        ]);
    } catch (error: unknown) {
        console.error("Failed to fetch posts:", error);
        return <div className="mt-20">Error loading topic</div>;
    }

    console.log(posts)
    console.log(topic)
    console.log(user)

    return (
        <main className="flex flex-col gap-10 text-gray-950">
            <section className="flex flex-col justify-center items-center pb-15 pt-[60px] w-full px-5">
                <div className="flex flex-col justify-center items-start max-w-5xl gap-2 min-h-25 w-full px-5 py-4 relative">
                    <h1 className="heading-main !text-2xl">Topic: {topic.title}</h1>
                    <h2 className="text-md">Description: {topic.content}</h2>

                    {posts.length === 0 ? (
                        <p>Belum ada posts yang tersedia.</p>
                    ) : (
                        posts.map((post) => (
                            <PostCard key={post.id} content={post.content} />
                        ))
                    )}
                    <PostForm topicId={slug} userId={userId} />
                </div>
            </section>
        </main>
    );
}
