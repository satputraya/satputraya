"use client";

import React from "react";

import {
  ExperiencesSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/organisms";

export default function page() {
  return (
    <main className="flex flex-col items-center px-4">
      <ProjectsSection />
      <SkillsSection />
      <ExperiencesSection />
    </main>
  );
}
