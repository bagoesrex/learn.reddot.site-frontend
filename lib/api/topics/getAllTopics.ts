import { createClient } from "@/lib/supabase/server";

export async function getAllTopics() {
    const supabase = await createClient();

    const { data, error } = await supabase.from("topics").select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
