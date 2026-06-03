"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  BookOpen,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  icon: string;
}

const icons: Record<string, any> = {
  Code2,
  Database,
  Globe,
  BookOpen,
};

export default function CourseCard({
  title,
  progress,
  icon,
}: CourseCardProps) {
  const Icon = icons[icon] || BookOpen;

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-5"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/5" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <Icon
            size={28}
            className="text-violet-400"
          />

          <span className="text-sm text-zinc-400">
            {progress}%
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold">
          {title}
        </h3>

        <div className="mt-5 h-2 w-full rounded-full bg-zinc-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
          />
        </div>
      </div>
    </motion.article>
  );
}
