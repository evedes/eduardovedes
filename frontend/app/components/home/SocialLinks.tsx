import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

export function SocialLinks() {
  return (
    <div className="flex flex-col gap-6 items-center lg:items-start pb-8">
      <div className="flex items-center gap-2 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 backdrop-blur-sm shadow-sm">
        <Link
          href="https://www.linkedin.com/in/evedes/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-800 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="size-5" />
        </Link>
        <Link
          href="https://github.com/evedes"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-800 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="GitHub"
        >
          <FaGithub className="size-5" />
        </Link>
        <Link
          href="https://x.com/eduardovedes"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-800 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="Twitter / X"
        >
          <FaXTwitter className="size-5" />
        </Link>
        <Link
          href="https://fullstackaiengineer.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-800 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="Substack - The Full Stack AI Engineer"
        >
          <SiSubstack className="size-5" />
        </Link>
      </div>
      <div className="text-xs font-mono text-zinc-800 dark:text-zinc-400">
        {new Date().getFullYear()} &copy; Eduardo Vedes
      </div>
    </div>
  );
}
