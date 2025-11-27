import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";

export function SocialLinks() {
    return (
        <div className="flex flex-col gap-4 items-center pb-8">
            <div className="flex gap-4 items-center">
                <Link
                    href="https://www.linkedin.com/in/evedes/"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-[#0866C2] dark:hover:text-[#0866C2] transition-colors duration-300 ease-in-out" />
                </Link>
                <Link
                    href="https://github.com/evedes"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 ease-in-out" />
                </Link>
                <Link
                    href="https://x.com/eduardovedes"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter / X"
                >
                    <FaXTwitter className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-300 ease-in-out" />
                </Link>
                <Link
                    href="https://codeyourfuture.substack.com"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Substack"
                >
                    <SiSubstack className="size-6 text-zinc-600 dark:text-zinc-400 hover:text-[#FF6719] dark:hover:text-[#FF6719] transition-colors duration-300 ease-in-out" />
                </Link>
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400">
                2025 &copy; All Rights Reserved
            </div>
        </div>
    );
}
