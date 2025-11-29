import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Merriweather } from "next/font/google";
import type { Metadata } from "next";
import BlogPostImage from "@/app/components/BlogPostImage";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, soft skills, and software engineer's growth. Insights from an indie hacker's journey.",
  keywords: ["software engineering", "programming", "soft skills", "developer blog", "tech articles", "coding"],
  openGraph: {
    title: "Eduardo Vedes' Blog",
    description: "Thoughts on software development, soft skills, and software engineer's growth.",
    url: "https://eduardovedes.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Vedes' Blog",
    description: "Thoughts on software development, soft skills, and software engineer's growth.",
  },
  alternates: {
    canonical: "https://eduardovedes.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div
      className={`min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300 ${merriweather.className}`}
    >
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-sm text-zinc-800 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            ← Back to home
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
          Eduardo Vedes&apos; Blog
        </h1>
        <p className="text-lg text-zinc-800 dark:text-zinc-400 mb-12">
          Thoughts on software and software engineer&apos;s growth.
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-800 dark:text-zinc-400">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-zinc-200 dark:border-zinc-800 pb-8 last:border-0"
              >
                {post.image && (
                  <Link href={`/blog/${post.slug}`} className="block mb-4">
                    <BlogPostImage src={post.image} alt={post.title} />
                  </Link>
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-4 text-sm text-zinc-800 dark:text-zinc-400 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-4">{post.description}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
