import { createClient } from "@/lib/supabase/server";

interface GetCourseByIdInput {
    courseId: string
}

export async function getCourseById({ courseId }: GetCourseByIdInput) {
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
