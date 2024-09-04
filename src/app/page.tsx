"use client";

import { SectionDivider } from "@/components/atoms";
import { AboutSection, IntroSection } from "@/components/organisms";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <AboutSection />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
        }}
        className="flex items-center justify-center px-4 text-lg font-medium mt-10 sm:mt-16 sm:mb-24"
      >
        <div
          onClick={() => window.location.assign("/eka-do")}
          className="group bg-gradient-to-r from-[#fbe2e3] to-[#dbd7fb] shadow-lg hover:shadow-xl active:shadow-md px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 text-neutral-700"
        >
          see what i do{" "}
          <HiArrowRight className="opacity-60 group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.div>
    </main>
  );
}
