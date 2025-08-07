import { createClient } from "@/lib/supabase/server";

export async function getAllCourses() {
    const supabase = await createClient();

    const { data, error } = await supabase.from("courses").select("*");

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
