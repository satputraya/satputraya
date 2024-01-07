import React from "react";

import { useActiveSectionContext } from "@/hooks";
import { SectionHeading } from "@/components/atoms";
import { useInView } from "react-intersection-observer";

export default function ExperiencesSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    inView &&
      Date.now() - timeOfLastClick > 1000 &&
      setActiveSection("Experiences");
  }, [inView, timeOfLastClick]);

  return (
    <section ref={ref} id="experiences" className="pb-[500px]">
      <SectionHeading>Experiences</SectionHeading>
    </section>
  );
}
