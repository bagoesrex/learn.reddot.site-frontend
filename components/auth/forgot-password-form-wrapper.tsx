import { ForgotPasswordForm } from "../supabase/forgot-password-form";

export default function ForgotPasswordFormWrapper() {
    return (
        <div className="flex flex-col min-h-svh justify-center items-center gap-2 pb-15 pt-[120px] md:pt-[60px] w-full">
            <ForgotPasswordForm className="max-w-md w-full" />
        </div >
    )
}