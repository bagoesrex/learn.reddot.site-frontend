import Link from "next/link";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"} className="bg-primary/85 border-white rounded hover:bg-white hover:text-primary transition">
        <Link href="/auth/login">Masuk</Link>
      </Button>
      <Button asChild size="sm" variant={"default"} className="rounded bg-white text-primary hover:bg-gray-100 transition">
        <Link href="/auth/sign-up">Daftar</Link>
      </Button>
    </div>
  );
}
