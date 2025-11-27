import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="hidden sm:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
        <Image
          src="/profile-pic.png"
          className="relative rounded-full border-2 shadow-2xl border-white/50 dark:border-zinc-700/50 ring-1 ring-zinc-200/50 dark:ring-zinc-800/50"
          alt="Eduardo Vedes"
          priority
          width={180}
          height={180}
        />
      </div>
      <div className="block sm:hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        <Image
          src="/profile-pic.png"
          className="relative rounded-full shadow-2xl ring-1 ring-zinc-200/50 dark:ring-zinc-800/50"
          alt="Eduardo Vedes"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        Eduardo Vedes
      </h1>
      <div className="text-base font-semibold text-zinc-700 dark:text-zinc-300">
        eduardo.vedes@gmail.com
      </div>
    </div>
  );
}
