import React from "react";

import { useSectionInView } from "@/hooks";
import { SectionHeading } from "@/components/atoms";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      ref={useSectionInView("Skills", { threshold: 0.75 })}
      className="pb-[500px]"
    >
      <SectionHeading>Skills</SectionHeading>
    </section>
  );
}
