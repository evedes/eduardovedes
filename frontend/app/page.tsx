"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      <div
        className={`grow flex flex-col gap-6 sm:gap-8 justify-center items-center transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <div className="hidden sm:block">
          <Image
            src="/profile-pic.png"
            className="rounded-full shadow-xl"
            alt="Eduardo Vedes"
            priority
            width={180}
            height={180}
          />
        </div>
        <div className="block sm:hidden">
          <Image
            src="/profile-pic.png"
            className="rounded-full shadow-xl"
            alt="Eduardo Vedes"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
          Eduardo Vedes
        </h1>
        <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
          eduardo.vedes@gmail.com
        </div>
        <div className="text-center text-zinc-800 dark:text-zinc-200">
          ☠️ Indie Hacker building{" "}
          <Link
            href="https://atomize.ink"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:no-underline hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 ease-in-out"
          >
            atomize.ink
          </Link>
        </div>

        <div className="text-center text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
          ✏️
          <Link
            href="/blog"
            className="font-semibold underline hover:no-underline hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 ease-in-out"
          >
            BLOG
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center pb-16">
        <div className="flex gap-4 items-center">
          <Link
            href="https://www.linkedin.com/in/evedes/"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-[#0866C2] dark:hover:text-[#0866C2] transition-colors duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://github.com/evedes"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://x.com/eduardovedes"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://codeyourfuture.substack.com"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiSubstack className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-[#FF6719] dark:hover:text-[#FF6719] transition-colors duration-300 ease-in-out" />
          </Link>
        </div>
        <div className="text-xs text-zinc-600 dark:text-zinc-400">
          2025 &copy; All Rights Reserved
        </div>
      </div>
    </div>
  );
}
