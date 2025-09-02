import { createClient } from "@/lib/supabase/server";

interface GetUsernameByIdInput {
    userId: string
}

export async function getUsernameById({ userId }: GetUsernameByIdInput) {
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
