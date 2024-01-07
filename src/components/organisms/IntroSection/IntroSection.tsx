"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlatformIcon } from "@/components/atoms";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import ekaImg from "@/assets/images/eka.jpg";

const socialMediaData = [
  {
    href: "https://linkedin.com",
    icon: <BsLinkedin />,
  },
  {
    href: "https://github.com/satryaputra",
    icon: <FaGithub />,
  },
  {
    href: "https://github.com/_satryaputra",
    icon: <FaInstagram />,
  },
] as const;

export default function IntroSection() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={ekaImg}
              alt="Eka portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, rotate: -100 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.1,
              duration: 1,
            }}
            className="absolute -bottom-4 -right-2 text-[3.5rem]"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl relative"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Eka.</span> I'm a happy{" "}
        <span className="font-bold">backend developer</span>
        <motion.span
          initial={{ opacity: 0, scale: 0, rotate: 12 }}
          animate={{ opacity: 1, scale: 1, rotate: 12 }}
          transition={{
            type: "spring",
            stiffness: 105,
            delay: 0.2,
            duration: 0.5,
          }}
          className="hidden lg:flex items-center text-[1.1rem] absolute -top-8 -right-28 rotate-12 text-gray-500 tracking-wide"
        >
          Little bit full-stack actually <span className="text-2xl">😜</span>
        </motion.span>
        {/* Custom Arrow */}
        <motion.span
          initial={{ opacity: 0, y: -50, x: 50, rotate: -90 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: -90 }}
          transition={{
            type: "spring",
            stiffness: 110,
            delay: 0.1,
          }}
          className="hidden lg:flex absolute -top-4 right-12 -rotate-90"
        >
          <svg
            width="40"
            height="37"
            viewBox="0 0 40 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="scale-[80%]"
          >
            <g clipPath="url(#clip0_2_40)">
              <path
                d="M27.916 31.4568C20.0191 25.1909 13.7896 18.0721 10.031 8.49523M10.031 8.49523C12.5436 8.84916 15.2028 8.99688 17.7457 8.92371M10.031 8.49523C8.84116 12.6182 8.41809 15.8177 8.49744 20.0916"
                stroke="#6b7280"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_2_40">
                <rect
                  width="24"
                  height="32"
                  fill="white"
                  transform="matrix(0.428577 -0.903505 -0.903505 -0.428577 28.9122 36.3566)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </motion.span>
        . I enjoy building <span className="italic">apps & sites</span>. My
        favorite stack is{" "}
        <Link
          className="underline"
          href="https://dotnet.microsoft.com/"
          target="_blank"
        >
          .NET
        </Link>{" "}
        {""}
        and{" "}
        <Link className="underline" href="https://react.dev/" target="_blank">
          React
        </Link>
      </motion.h1>

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <a
            className="group bg-white shadow px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
            download
          >
            my resume{" "}
            <IoDocumentTextOutline className="opacity-60 group-hover:scale-105 transition" />
          </a>
          <Link
            href="#about"
            className="group bg-gray-900 shadow text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            know me ?{" "}
            <HiArrowDown className="opacity-70 group-hover:translate-y-[.15rem] group-hover:scale-105 transition" />
          </Link>
        </div>

        <div className="flex gap-2">
          {socialMediaData.map((data, index) => (
            <PlatformIcon key={index} href={data.href}>
              {data.icon}
            </PlatformIcon>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
