import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GradientBackground } from "@/components/template";
import { Header } from "@/components/molecules";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mas Eka | Fullstack Developer",
  description: "Eka is a full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gray-50 text-gray-950 relative pt-28 sm:pt-36",
          inter.className
        )}
      >
        <GradientBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
