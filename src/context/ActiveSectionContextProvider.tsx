"use client";

import React from "react";

import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];

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
    React.useState<SectionName>("Projects");
  const [timeOfLastClick, setTimeOfLastClick] = React.useState(0); // to diable observer temp

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
