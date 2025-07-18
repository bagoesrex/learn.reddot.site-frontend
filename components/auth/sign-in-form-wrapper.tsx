import { LoginForm } from "../supabase/login-form";

export default function SignInFormWrapper() {
    return (
        <div className="flex flex-col min-h-svh justify-center items-center gap-2 pb-15 pt-[120px] md:pt-[60px] w-full">
            <LoginForm className="max-w-md w-full" />
        </div>
    )
}