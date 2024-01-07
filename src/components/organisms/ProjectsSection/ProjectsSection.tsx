import React from "react";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/atoms";
import { ProjectCard } from "@/components/molecules";
import { projectsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/hooks";

export default function ProjectsSection() {
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  React.useEffect(() => {
    inView &&
      Date.now() - timeOfLastClick > 1000 &&
      setActiveSection("Projects");
  }, [inView, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mt-10 scroll-mt-32 mb-36"
    >
      <SectionHeading>Recent Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
