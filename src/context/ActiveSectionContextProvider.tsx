"use client";

import type { SectionName } from "@/lib/types";
import React from "react";

interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
}

interface IActiveSectionContext {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext =
  React.createContext<IActiveSectionContext | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] =
    React.useState<SectionName>("Projects"); // default value header
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0); // to disable header observer temp

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
