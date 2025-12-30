import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center lg:items-start gap-6">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-800 rounded-full opacity-50 group-hover:opacity-100 transition duration-500 blur-sm"></div>
        <div className="relative">
          <Image
            src="/profile-pic.png"
            className="rounded-full border-4 border-background bg-zinc-800"
            alt="Eduardo Vedes"
            priority
            width={140}
            height={140}
          />
        </div>
      </div>

      <div className="text-center lg:text-left space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Eduardo Vedes
        </h1>
        <div className="flex flex-col items-center lg:items-start gap-1">
          <p className="font-mono text-primary-500 text-sm sm:text-base font-medium">
            Software Engineer & Indie Hacker
          </p>
          <a
            href="mailto:eduardo.vedes@gmail.com"
            className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-primary-500 transition-colors"
          >
            eduardo.vedes@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
