import { createClient } from "@/lib/supabase/server";

export async function getPostsByTopicId(topicId: string) {
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
