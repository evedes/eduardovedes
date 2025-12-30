import Link from "next/link";

export function Bio() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6 max-w-2xl lg:max-w-none mx-auto lg:mx-0 px-4 lg:px-0">
      <div className="text-lg text-zinc-800 dark:text-zinc-300 text-center lg:text-left leading-relaxed space-y-4 font-light">
        <p>
          Currently building{" "}
          <Link
            href="https://atomize.ink"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground border-b border-primary-500 hover:border-b-2 transition-all"
          >
            atomize.ink
          </Link>{" "}
          and writing about software engineering on my{" "}
          <Link
            href="/blog"
            className="font-medium text-foreground border-b border-primary-500 hover:border-b-2 transition-all"
          >
            blog
          </Link>
          .
        </p>
        <p>
          Author of{" "}
          <span className="font-medium text-foreground">Code Your Future</span>
          , a guide to career change and success in software engineering.
          Currently being rewritten for v2 with AI and extended content.
        </p>
      </div>
    </div>
  );
}
