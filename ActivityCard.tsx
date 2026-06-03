"use client";

import { motion } from "framer-motion";

const activity = [
  40, 65, 90, 50, 80, 35, 70,
  100, 55, 75, 45, 85, 95, 60,
];

export default function ActivityCard() {
  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold">
        Learning Activity
      </h3>

      <p className="mt-1 text-sm text-zinc-400">
        Last 14 Days
      </p>

      <div className="mt-6 flex items-end gap-2">
        {activity.map((height, index) => (
          <motion.div
            key={index}
            initial={{
              height: 0,
            }}
            animate={{
              height,
            }}
            transition={{
              delay: index * 0.05,
            }}
            className="w-4 rounded-md bg-violet-500"
          />
        ))}
      </div>
    </article>
  );
}
