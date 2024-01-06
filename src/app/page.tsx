"use client";

import { SectionDivider } from "@/components/atoms";
import { AboutSection, IntroSection } from "@/components/organisms";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <IntroSection />
      <SectionDivider />
      <AboutSection />
    </main>
  );
}
