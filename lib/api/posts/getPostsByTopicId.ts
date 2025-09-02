import { createClient } from "@/lib/supabase/server";

interface GetPostsByTopicIdInput {
    topicId: string
}

export async function getPostsByTopicId({ topicId }: GetPostsByTopicIdInput) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("topic_id", topicId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
