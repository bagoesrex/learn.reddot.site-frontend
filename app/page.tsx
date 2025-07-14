import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 text-gray-950">

      <HeroSection />

      <FeaturesSection />

    </main >
  );
}
