import Link from "next/link";
import { FaBook, FaCode, FaNewspaper } from "react-icons/fa6";

const projects = [
    {
        title: "atomize.ink",
        description: "A tool to help you write better content, faster.",
        link: "https://atomize.ink",
        icon: FaCode,
    },
    {
        title: "codeyourfuture",
        description: "A substack about software engineering and career growth.",
        link: "https://codeyourfuture.substack.com",
        icon: FaNewspaper,
    },
    {
        title: "Code Your Future (Book)",
        description: "A guide to career change and success in software engineering.",
        link: "https://eduardovedes.gumroad.com/l/codeyourfuture",
        icon: FaBook,
    },
];

export function Projects() {
    return (
        <div className="w-full max-w-4xl">
            <h2 className="text-sm font-mono font-bold text-zinc-500 dark:text-zinc-400 mb-8 text-center uppercase tracking-widest">
                Selected Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/50 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <project.icon className="size-5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                            <h3 className="font-bold text-foreground font-mono text-sm">
                                {project.title}
                            </h3>
                        </div>
                        <p className="text-sm text-zinc-800 dark:text-zinc-400 leading-relaxed">
                            {project.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
