import React from "react";

import { SectionHeading } from "@/components/atoms";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/hooks";

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    inView && Date.now() - timeOfLastClick > 1000 && setActiveSection("Skills");
  }, [inView, timeOfLastClick]);

  return (
    <section ref={ref} id="skills" className="pb-[500px]">
      <SectionHeading>Skills</SectionHeading>
    </section>
  );
}
