"use client";

import Image from "next/image";
import { useState } from "react";

interface BlogPostImageProps {
  src: string;
  alt: string;
}

export default function BlogPostImage({ src, alt }: BlogPostImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 bg-[length:200%_100%]">
          <style jsx>{`
            @keyframes shimmer {
              0% {
                background-position: -200% 0;
              }
              100% {
                background-position: 200% 0;
              }
            }
            div {
              animation: shimmer 1.5s infinite;
            }
          `}</style>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover hover:scale-105 transition-transform duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
