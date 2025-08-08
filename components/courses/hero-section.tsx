interface HeroSectionProps {
    title: string
    description: string
}

export default function HeroSection({ title, description }: HeroSectionProps) {
    return (
        <section className="flex flex-col justify-center items-center gap-2 pb-5 pt-[60px] w-full text-background px-5">
            <div className="flex flex-col justify-center items-start max-w-5xl rounded-xl bg-primary/85 min-h-25 w-full px-5 py-4 relative">
                <h1 className="heading-main !text-2xl">{title}</h1>
                <h2 className="text-md">{description}</h2>
            </div>
        </section>
    )
}