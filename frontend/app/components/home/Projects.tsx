import Link from "next/link";
import { FaBook, FaCode, FaNewspaper } from "react-icons/fa6";

const projects = [
    {
        title: "atomize.ink",
        description: "A tool to help you write better content, faster.",
        link: "https://atomize.ink",
        icon: FaCode,
        color: "text-blue-500",
    },
    {
        title: "codeyourfuture",
        description: "A substack about software engineering and career growth.",
        link: "https://codeyourfuture.substack.com",
        icon: FaNewspaper,
        color: "text-orange-500",
    },
    {
        title: "Code Your Future (Book)",
        description: "A guide to career change and success in software engineering.",
        link: "https://eduardovedes.gumroad.com/l/codeyourfuture",
        icon: FaBook,
        color: "text-yellow-500",
    },
];

export function Projects() {
    return (
        <div className="w-full max-w-4xl">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-6 text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.title}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900/50 transition-all duration-300 hover:shadow-md h-full"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <project.icon className={`size-5 ${project.color} shrink-0`} />
                            <h3 className="font-semibold text-zinc-800 dark:text-zinc-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                {project.title}
                            </h3>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 flex-grow">
                            {project.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
