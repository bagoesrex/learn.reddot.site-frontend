import { EnvVarWarning } from "@/components/supabase/env-var-warning";
import { AuthButton } from "@/components/supabase/auth-button";
import { hasEnvVars } from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="font-medium text-xl mb-4">REDDOT LEARNING</h2>
      {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
    </main >
  );
}
