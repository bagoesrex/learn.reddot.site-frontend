import FeatureCard from "./feature-card";

export default function FeaturesLeft() {
    return (
        <div className="relative w-full md:w-1/2">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-red-500 rounded-full opacity-30 z-0" />

            <div className="relative z-10 rounded-3xl p-6 h-full">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <div className="w-[45%]">
                        <FeatureCard title="Pelajari Atificial Intelligent" subtitle="Materi Up to Date" description="Pelajari perkembangan dan kemajuan AI dan bagaimana menggunakannya di kehidupan sehari hari" href="/" buttonText="Lihat Materi" />
                    </div>
                    <div className="w-[45%]">
                        <FeatureCard title="Diskusi Sesama Pengguna" subtitle="Forum Diskusi" description="Jangan takut sendiri, gabung dengan pengguna yang lain dalam forum diskusi dan dapatkan insight baru" href="/" buttonText="Lihat Forum" />
                    </div>
                </div>
            </div>
        </div>

    )
}