import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import rehypeHighlight from "rehype-highlight";
import { Merriweather } from "next/font/google";
import { ComponentPropsWithoutRef } from "react";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-8 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mt-6 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-lg" style={{ lineHeight: '2.2' }} {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-[#0866C2] dark:text-[#4A9FE8] hover:underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="list-disc list-outside ml-6 text-zinc-700 dark:text-zinc-300 mb-4 space-y-1"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="list-decimal list-outside ml-6 text-zinc-700 dark:text-zinc-300 mb-4 space-y-1"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="text-zinc-700 dark:text-zinc-300 text-lg" style={{ lineHeight: '2.2' }} {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="bg-zinc-100 dark:bg-zinc-800 rounded px-1 py-0.5 text-sm"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="bg-zinc-100 dark:bg-[#0d1117] rounded-lg p-6 mb-6 overflow-x-auto shadow-lg border border-zinc-200 dark:border-zinc-700"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-4 italic text-zinc-800 dark:text-zinc-400 mb-4"
      {...props}
    />
  ),
  img: (props: ComponentPropsWithoutRef<"img">) => (
    <Image
      src={props.src || ""}
      width={800}
      height={400}
      className="rounded-lg my-8 w-full h-auto"
      alt={props.alt || "Blog post image"}
    />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const publishedTime = new Date(post.date).toISOString();
  const absoluteImageUrl = post.image?.startsWith('http')
    ? post.image
    : `https://eduardovedes.com${post.image}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "Eduardo Vedes" }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://eduardovedes.com/blog/${slug}`,
      siteName: "Eduardo Vedes",
      type: "article",
      publishedTime,
      authors: ["Eduardo Vedes"],
      tags: post.tags,
      images: post.image ? [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      creator: "@eduardovedes",
      images: post.image ? [absoluteImageUrl] : undefined,
    },
    alternates: {
      canonical: `https://eduardovedes.com/blog/${slug}`,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const absoluteImageUrl = post.image?.startsWith('http')
    ? post.image
    : `https://eduardovedes.com${post.image}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image ? absoluteImageUrl : undefined,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Eduardo Vedes",
      url: "https://eduardovedes.com",
    },
    publisher: {
      "@type": "Person",
      name: "Eduardo Vedes",
      url: "https://eduardovedes.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eduardovedes.com/blog/${slug}`,
    },
    keywords: post.tags?.join(", "),
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300 ${merriweather.className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-zinc-800 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            ← Back to blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-zinc-800 dark:text-zinc-400 mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span>{post.wordCount.toLocaleString()} words</span>
          </div>
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
        </header>

        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
