import { createClient } from "@/lib/supabase/client";

interface CreatePostInput {
    topicId: string
    content: string
    userId: string
}

export async function createPost({ topicId, content, userId }: CreatePostInput) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("posts")
        .insert({
            topic_id: topicId,
            content,
            user_id: userId,
        })
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }
    return data;
}
