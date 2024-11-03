import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow flex flex-col gap-4 justify-center items-center">
        <Image
          src="/profile-pic.png"
          className="rounded-full shadow-xl"
          alt="Eduardo Vedes"
          width={180}
          height={180}
        />
        <h1 className="text-4xl font-bold text-gray-800">Eduardo Vedes</h1>
        <h1 className="text-2xl font-bold text-gray-800">eduardovedes.com</h1>
        <div className="text-sm font-semibold">eduardo.vedes@gmail.com</div>
        <div className="text-lg w-96 text-center p-4">
          ❤️ Helping you to grow and thrive as a software engineer, 🌞 Solar
          punk, 🦄 Indie hacker, 📒 Author of Code Your Futre, ☠️ Software
          engineer
        </div>
      </div>
      <div className="h-12 text-xs flex justify-center items-center">
        2024 &copy; All Rights Reserved
      </div>
    </div>
  );
}
