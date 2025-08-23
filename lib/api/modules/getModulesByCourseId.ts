import { createClient } from "@/lib/supabase/server";

export async function getModulesByCourseId(courseId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("modules")
        .select("*")
        .eq("course_id", courseId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
