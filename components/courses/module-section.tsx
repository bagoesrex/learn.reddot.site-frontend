import ModuleCard from "./module-card";

interface Module {
    id: string;
    course_id: string;
    title: string;
    order_number: number;
}

interface ModuleSectionProps {
    modules: Module[];
}

export default function ModuleSection({ modules }: ModuleSectionProps) {

    return (
        <section className="flex flex-col justify-center items-center gap-2 pb-15 w-full text-primary px-5">
            <div className="max-w-5xl w-full flex flex-col gap-3 justify-center items-center">
                {modules.map((module, index) => (
                    <ModuleCard
                        key={index}
                        id={module.id}
                        title={module.title}
                        order_number={module.order_number}
                    />
                ))}
            </div>
        </section>
    )
}