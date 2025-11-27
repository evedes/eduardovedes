import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="hidden sm:block">
        <Image
          src="/profile-pic.png"
          className="rounded-full border-2 shadow-xl border-zinc-300 dark:border-zinc-800"
          alt="Eduardo Vedes"
          priority
          width={180}
          height={180}
        />
      </div>
      <div className="block sm:hidden">
        <Image
          src="/profile-pic.png"
          className="rounded-full shadow-xl"
          alt="Eduardo Vedes"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100">
        Eduardo Vedes
      </h1>
      <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
        eduardo.vedes@gmail.com
      </div>
    </div>
  );
}
