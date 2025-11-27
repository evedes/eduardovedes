import Link from "next/link";

export function Bio() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 text-center max-w-lg leading-[24px] ">
                Hi! My name is Edo, and I&apos;m an AI Engineer. I&apos;m also a Software Engineer
                specialized on the Tyescript ecosystem. I&apos;m indie hacking{" "}
                <Link
                    href="https://atomize.ink"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                    atomize.ink
                </Link>
                . I share my thoughts on my personal{" "}
                <Link
                    href="/blog"
                    className="font-semibold underline hover:no-underline text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                    blog
                </Link>{" "}
                and I&apos;m the author of the{" "}
                <Link
                    href="https://codeyourfuture.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                    codeyourfuture
                </Link>{" "}
                substack. I&apos;m also the author of the book{" "}
                <Link
                    href="https://eduardovedes.gumroad.com/l/codeyourfuture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline hover:no-underline text-red-600 hover:text-red-500 transition-all duration-300 ease-in-out"
                >
                    Code Your Future: A Guide to Career Change and Success in Software Engineering
                </Link>
                .
            </div>
            <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 text-center max-w-lg leading-[24px]">
                I love to meet new people, so if you&apos;d like to chat, feel free to reach out!
            </div>
        </div>
    );
}
