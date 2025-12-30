import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/lib/blog";

interface LatestPostsProps {
  posts: BlogPost[];
}

export function LatestPosts({ posts }: LatestPostsProps) {
  if (posts.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-8 px-2 border-b border-zinc-200 dark:border-zinc-700 pb-4">
        <h2 className="text-sm font-mono font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
          Latest Writings
        </h2>
        <Link
          href="/blog"
          className="text-sm font-mono text-primary-500 hover:text-primary-400 transition-colors"
        >
          View all →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/50 hover:border-primary-500/50 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {post.image && (
                <div className="relative w-full sm:w-32 h-32 sm:h-24 shrink-0 rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-600">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
              )}
              <div className="flex flex-col justify-between grow gap-2">
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary-500 transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-800 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>{"//"}</span>
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
