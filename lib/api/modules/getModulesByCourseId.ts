import { createClient } from "@/lib/supabase/server";

interface GetModulesByCourseIdInput {
    courseId: string
}

export async function getModulesByCourseId({ courseId }: GetModulesByCourseIdInput) {
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
