import { createClient } from "@/lib/supabase/server";

export async function getUsernameById(userId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", userId)
        .single();

    if (error || !data?.username) {
        return null;
    }

    return data.username;
}
