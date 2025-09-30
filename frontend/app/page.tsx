"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaHashnode } from "react-icons/fa6";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className={`grow flex flex-col gap-6 sm:gap-8 justify-center items-center transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
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
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Eduardo Vedes
        </h1>
        <div className="text-sm font-semibold">eduardo.vedes@gmail.com</div>
        <div className="flex gap-4 py-2">
          <Link
            href="https://www.linkedin.com/in/evedes/"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-8 hover:fill-[#0866C2] transition-colors duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://github.com/evedes"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="size-8 rounded-full hover:bg-black hover:fill-white transition-colors duration-300 ease-in-out" />
          </Link>
          <Link
            href="https://x.com/eduardovedes"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="size-8 hover:fill-[#0866C2] transition-colors duration-300 ease-in-out" />
          </Link>

          <Link
            href="https://blog.eduardovedes.com"
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHashnode className="size-8 text-gray-800 hover:text-black transition-colors duration-300 ease-in-out" />
          </Link>

        </div>

      </div>
      <div className="text-xs flex justify-center items-center pb-16">
        2025 &copy; All Rights Reserved
      </div>
    </div>
  );
}
