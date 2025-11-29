import Link from "next/link";

export function Bio() {
  return (
    <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto px-4">
      <div className="text-lg text-zinc-800 dark:text-zinc-300 text-center leading-relaxed space-y-4 font-light">
        <p>
          Hi! I&apos;m <span className="font-semibold text-foreground">Edo</span>, an AI + Software Engineer.
        </p>
        <p>
          I&apos;m currently building{" "}
          <Link
            href="https://atomize.ink"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground border-b border-primary-500 hover:border-b-2 transition-all"
          >
            atomize.ink
          </Link>
          {" "}and writing about engineering growth on my{" "}
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
          <Link
            href="https://eduardovedes.gumroad.com/l/codeyourfuture"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground border-b border-primary-500 hover:border-b-2 transition-all"
          >
            Code Your Future
          </Link>
          , a guide to career change and success in software engineering.
        </p>
      </div>
    </div>
  );
}
