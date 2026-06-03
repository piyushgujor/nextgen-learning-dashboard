"use client";

import { Flame } from "lucide-react";

export default function HeroCard() {
  return (
    <article className="h-full rounded-3xl border border-zinc-800 bg-gradient-to-br from-violet-600/20 to-cyan-500/10 p-6">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="text-zinc-400">
            Good Morning
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Welcome Back, Piyush 👋
          </h2>

          <p className="text-zinc-400 mt-4">
            Continue your learning journey today.
          </p>
        </div>

        <div className="flex items-center gap-2 text-orange-400">
          <Flame size={24} />
          <span className="font-semibold">
            12 Day Learning Streak
          </span>
        </div>
      </div>
    </article>
  );
}
