import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow flex flex-col gap-6 sm:gap-8 justify-center items-center">
        <div className="hidden sm:block">
          <Image
            src="/profile-pic.png"
            className="rounded-full shadow-xl"
            alt="Eduardo Vedes"
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
        <div className="sm:text-lg w-96 text-center px-8 sm:p-0">
          ❤️ Helping you to grow and thrive as a software engineer, 🌞 Solar
          punk, 🦄 Indie hacker, 📒 Author of Code Your Futre, ☠️ Software
          engineer
        </div>
        <div className="flex flex-col sm:text-lg px-8 sm:p-0 sm:gap-4 text-center w-96">
          <div>
            Subscribe NOW to my newsletter! Every Saturday morning, 10:00 AM
            (GMT+1) in your inbox! 📩
          </div>
          <Link
            className="underline text-red-600 hover:text-red-500 font-semibold"
            prefetch={false}
            href="https://codeyourfuture.substack.com"
          >
            codeyourfuture.substack.com
          </Link>
        </div>
        <div className="flex gap-4 py-2">
          <Link href="https://www.linkedin.com/in/evedes/" prefetch={false}>
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link href="https://discord.gg/Z87c4twuaX" prefetch={false}>
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link href="https://x.com/eduardovedes" prefetch={false}>
            <FaDiscord className="w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="h-12 text-xs flex justify-center items-center">
        2024 &copy; All Rights Reserved
      </div>
    </div>
  );
}
