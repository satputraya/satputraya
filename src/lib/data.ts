import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { CgWorkAlt } from "react-icons/cg";
import { FaGithub, FaInstagram, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experiences",
  },
] as const;

export const socialMediaData = [
  {
    href: "https://linkedin.com/in/satputraya",
    icon: React.createElement(BsLinkedin),
  },
  {
    href: "https://github.com/satryaputra",
    icon: React.createElement(FaGithub),
  },
  {
    href: "https://instagram.com/_satryaputra",
    icon: React.createElement(FaInstagram),
  },
] as const;

export const experiencesData = [
  {
    title: "SMK NEGERI 1 NGASEM",
    location: "Kediri, Jawa Timur, Indonesia",
    description:
      "A vocational high school and I graduated from the computer and network engineering department.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "UT School IT-Programming",
    location: "Jakarta Timur, Jakarta, Indonesia",
    description:
      "I learned web development and mobile app development for 2 months.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-stack Developer",
    location: "Hologram Indonesia",
    description:
      "During my freelance, I was involved in a project to create a company profile for an overseas company using React and NodeJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Backend Developer",
    location: "United Tracktors HO (DAD)",
    description:
      "I interned as a backend developer here, I learned a lot about Architectural Pattern especially Clean Arcitecture and CQRS Pattern using .NET Microsoft.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Vemo",
    description: "Vehicle Monitoring Operator is an application that allows users to monitor the condition of their vehicle.",
    tags: [".NET", "React", "Typescript", "Tailwind", "PostgreSQL", "Redis"],
    imageUrl: "/vemo.png",
  },
  {
    title: "FMS EKA",
    description: "This is a simple web based file managament system, using firebase for authentication and storage.",
    tags: ["React", "Redux", "Firebase"],
    imageUrl: "/fms-eka.png",
  },
  {
    title: "Simple Portofolio",
    description: "My first web page that made me stick to web development.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: "/portofolio-v1.png",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "NodeJS",
  "C#",
  ".NET",
  "Git",
  "Tailwind",
  "Prisma",
  "Azure Dev Ops",
  "Redux",
  "Zustand",
  "React hook form",
  "Shadcn/ui",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Firebase",
  "Docker",
] as const;
