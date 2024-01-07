import React from "react";

import { motion, type Variants } from "framer-motion";
import { useSectionInView } from "@/hooks";
import { SectionHeading } from "@/components/atoms";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      ref={useSectionInView("Skills", { threshold: 0.75 })}
      className="scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white border border-black/[.1] rounded-xl px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
