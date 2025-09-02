import { createClient } from "@/lib/supabase/server";

interface GetLessonsByModuleIdInput {
    moduleId: string
}

export async function getLessonsByModuleId({ moduleId }: GetLessonsByModuleIdInput) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("lessons")
        .select("*")
        .eq("module_id", moduleId);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
