import { createClient } from "@/lib/supabase/server";

export async function getTopicById(topicId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("topics")
        .select("id, title, content")
        .eq("id", topicId)
        .single();

    if (error || !data) {
        throw new Error(error.message || "Topic not found");
    }

    return data;
}
