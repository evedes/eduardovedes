import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface LatestPostsProps {
    posts: BlogPost[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
    if (posts.length === 0) return null;

    return (
        <div className="w-full max-w-4xl">
            <div className="flex justify-between items-center mb-6 px-2">
                <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100">
                    Latest Posts
                </h2>
                <Link
                    href="/blog"
                    className="text-base text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                    View all →
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block p-4 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl backdrop-saturate-150 hover:bg-white/80 dark:hover:bg-zinc-900/80 transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            {post.image && (
                                <div className="relative w-full sm:w-48 h-32 sm:h-32 shrink-0 rounded-lg overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col justify-between grow">
                                <div>
                                    <h3 className="font-semibold text-lg text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-base text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-2">
                                        {post.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
                                    <time dateTime={post.date}>
                                        {new Date(post.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </time>
                                    <span>•</span>
                                    <span>{post.readingTime}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
