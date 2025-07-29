import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import HeroSection from "@/components/dashboard/hero-section";

export default async function DashboardPage() {
    const supabase = await createClient();

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    if (error || !user) {
        redirect("/auth/login");
    }

    const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("username")
        .eq("id", user.id)
        .single();

    if (profileError || !profile?.username) {
        redirect("/auth/login");
    }

    return (
        <main className="flex flex-col gap-10 text-gray-950">
            <HeroSection username={profile.username} />
        </main>
    );
}
