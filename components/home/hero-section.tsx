"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Icon from "@/public/logo-red.svg";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-row min-h-svh justify-center items-center gap-2 pb-15 pt-[120px] md:pt-[60px] w-full"
        >
            <div className="max-w-xl text-center md:text-left px-5">
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="heading-main"
                >
                    Dari <span className="text-red-600">Reddot</span>, Ilmu Tepat Sasaran
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-md md:text-xl mt-4"
                >
                    Belajar tentang Artificial Intelligence tanpa pusing dengan Megumine
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-6 hidden md:flex justify-center md:justify-start gap-4"
                >
                    <Button
                        onClick={() => {
                            const section = document.getElementById("features");
                            if (section) {
                                section.scrollIntoView();
                            }
                        }}
                        className="bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600 transition"
                        size="lg"
                    >
                        Mulai Belajar Sekarang
                    </Button>
                </motion.div>
            </div>

            <motion.div
                className="flex flex-col items-center w-[300px] md:w-[500px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
                <div className="w-full h-auto my-12">
                    <Image
                        src={Icon}
                        alt="Reddot Logo"
                        width={500}
                        height={300}
                        className="w-full h-auto text-red-500"
                        priority
                    />
                </div>

                <div className="mt-4 flex justify-center items-center md:hidden">
                    <Button
                        onClick={() => {
                            const section = document.getElementById("features");
                            if (section) {
                                section.scrollIntoView();
                            }
                        }}
                        className="mt-5 bg-red-600 hover:bg-transparent border-2 border-red-600 hover:text-red-600 transition"
                        size="lg"
                    >
                        Mulai Belajar Sekarang
                    </Button>
                </div>
            </motion.div>
        </section>
    );
}
