import React from "react";

import { useSectionInView } from "@/hooks";
import { SectionHeading } from "@/components/atoms";

export default function ExperiencesSection() {
  return (
    <section
      id="experiences"
      ref={useSectionInView("Experiences", { threshold: 0.75 })}
      className="pb-[500px]"
    >
      <SectionHeading>Experiences</SectionHeading>
    </section>
  );
}
