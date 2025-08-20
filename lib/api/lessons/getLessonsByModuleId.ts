import { createClient } from "@/lib/supabase/server";

export async function getLessonsByModuleId(moduleId: string) {
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
