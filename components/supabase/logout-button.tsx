"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <Button onClick={logout} size="sm" variant="default" className="rounded bg-white text-primary hover:bg-gray-100 transition cursor-pointer">
      <LogOut className="w-4 h-4" />
      Logout
    </Button>
  );
}
