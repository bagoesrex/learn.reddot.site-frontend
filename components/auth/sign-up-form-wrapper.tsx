import { SignUpForm } from "../supabase/sign-up-form";

export default function SignUpFormWrapper() {
    return (
        <div className="flex flex-col min-h-svh justify-center items-center gap-2 pb-15 pt-[120px] md:pt-[60px] w-full">
            <SignUpForm className="max-w-md w-full" />
        </div>
    )
}