import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Ali");

  const toggleName = () => {
    setName((prev) => (prev === "Ali" ? "Hero" : "Ali"));
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 transition-colors dark:bg-zinc-950">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden -z-10 opacity-50 dark:opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400 blur-[120px]" />
      </div>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Welcome to the <span className="text-blue-600">App</span>
        </h1>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400">Deployed and running on Netlify</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/80 p-10 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/80">
        <div className="flex flex-col items-center gap-8">
          {/* Avatar Section */}
          <div className="relative h-28 w-28 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-1 shadow-inner">
            <div className="h-full w-full rounded-full bg-white dark:bg-zinc-800 overflow-hidden relative">
              <Image src={`https://api.dicebear.com/7.x/bottts/svg?seed=${name}`} alt="Avatar" fill className="p-2" />
            </div>
          </div>

          {/* Name Display */}
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Current User</span>
            <h3 className="mt-1 text-4xl font-black text-zinc-900 dark:text-white transition-all">{name}</h3>
          </div>

          {/* Action Button */}
          <button
            onClick={toggleName}
            className="group relative w-full overflow-hidden rounded-2xl bg-zinc-900 px-6 py-4 font-bold text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <span className="relative z-10">Switch Identity</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </button>
        </div>
      </div>

      {/* Footer Text */}
    </main>
  );
}
