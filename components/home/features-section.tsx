import FeaturesLeft from "./features-left";
import FeaturesRight from "./features-right";

export default function FeaturesSection() {
    return (
        <section
            id="intro"
            className="flex flex-col md:flex-col min-h-[26rem] bg-gray-200 items-center pb-10 pt-10 px-5 w-full"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-5xl w-full">
                <FeaturesLeft />

                <FeaturesRight />
            </div>
        </section>
    )
}