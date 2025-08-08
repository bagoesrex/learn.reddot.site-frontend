import { createClient } from "@/lib/supabase/server";

export async function getCourseById(courseId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("courses")
        .select("id, title, description")
        .eq("id", courseId)
        .single();

    if (error || !data) {
        throw new Error(error.message || "Course not found");
    }

    return data;
}
