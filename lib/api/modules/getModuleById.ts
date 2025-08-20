import { createClient } from "@/lib/supabase/server";

export async function getModuleById(moduleId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("modules")
        .select("id, title")
        .eq("id", moduleId)
        .single();

    if (error || !data) {
        throw new Error(error.message || "Module not found");
    }

    return data;
}
