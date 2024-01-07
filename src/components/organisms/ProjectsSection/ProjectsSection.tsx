import React from "react";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { SectionHeading } from "@/components/atoms";
import { ProjectCard } from "@/components/molecules";
import { projectsData } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <motion.section
      ref={useSectionInView("Projects")}
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
