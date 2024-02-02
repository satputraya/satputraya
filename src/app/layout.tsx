import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { GradientBackground } from "@/components/template";
import { Header } from "@/components/molecules";
import { FooterSection } from "@/components/organisms";
import { ActiveSectionContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mas Eka - Backend Developer",
  description: "Eka is a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-gray-50 text-gray-950 relative pt-[5.5rem]",
          inter.className
        )}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
        <GradientBackground />
        {/* <FooterSection /> */}
      </body>
    </html>
  );
}
