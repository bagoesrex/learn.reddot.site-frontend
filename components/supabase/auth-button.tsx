"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/client";
import { LogoutButton } from "./logout-button";
import type { User } from "@supabase/supabase-js";

export function AuthButton() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [supabase]);

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant="outline" className="bg-primary/85 border-white rounded hover:bg-white hover:text-primary transition">
        <Link href="/auth/login">Masuk</Link>
      </Button>
      <Button asChild size="sm" variant="default" className="rounded bg-white text-primary hover:bg-gray-100 transition">
        <Link href="/auth/sign-up">Daftar</Link>
      </Button>
    </div>
  );
}
