import { redirect } from "next/navigation";
import HeroSection from "@/components/dashboard/hero-section";
import { getUser } from "@/lib/api/auth/getUser";
import { getUsernameById } from "@/lib/api/profiles/getUsernameById";

export default async function DashboardPage() {
    const user = await getUser();
    if (!user) redirect("/auth/login");

    const username = await getUsernameById(user.id);
    if (!username) redirect("/auth/login");

    return (
        <main className="flex flex-col gap-10 text-gray-950">
            <HeroSection username={username} />
        </main>
    );
}
