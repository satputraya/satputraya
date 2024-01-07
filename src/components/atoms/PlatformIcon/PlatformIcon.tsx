import React from "react";

interface PlatformIconProps {
  href?: string;
  children: React.ReactNode;
}

export default function PlatformIcon({
  href = "",
  children,
}: PlatformIconProps) {
  return (
    <a
      className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
