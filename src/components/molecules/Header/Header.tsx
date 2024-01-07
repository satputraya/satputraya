"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useActiveSectionContext, useHeader } from "@/hooks";

export default function Header() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  if (useHeader()) {
    return (
      <header className="z-[999] relative">
        <motion.div
          className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[.03] backdrop-blur-[.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>
        <nav className="flex fixed top-[.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="group h-3/4 flex items-center justify-center pl-4 cursor-pointer"
            >
              <FaArrowCircleLeft className="group-hover:-translate-x-1 group-hover:text-gray-950 scale-[1.3] opacity-60 transition" />
              <div
                onClick={() => window.location.assign("/")}
                className="flex w-full items-center justify-center p-3 pl-5 hover:text-gray-950 transition"
              >
                Home
              </div>
            </motion.li>
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="h-3/4 flex items-center justify-center relative cursor-pointer"
              >
                <Link
                  href={link.hash}
                  onClick={() => setActiveSection(link.name)}
                  className={cn(
                    "group flex w-full items-center justify-center p-3 hover:text-gray-950 transition",
                    activeSection === link.name && "text-gray-950"
                  )}
                >
                  {link.name}
                  {activeSection === link.name && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="bg-gray-200/50 rounded-full absolute inset-0 -z-10"
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="group h-3/4 flex items-center justify-center pr-4 cursor-pointer"
            >
              <div
                onClick={() => window.location.assign("/contacts")}
                className="flex w-full items-center justify-center p-3 pr-5 hover:text-gray-950 transition"
              >
                Contacts
              </div>
              <FaArrowCircleRight className="group-hover:translate-x-1 group-hover:text-gray-950 scale-[1.3] opacity-60 transition" />
            </motion.li>
          </ul>
        </nav>
      </header>
    );
  } else {
    return null;
  }
}
