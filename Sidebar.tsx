"use client";

import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: Home,
  },
  {
    name: "Courses",
    icon: BookOpen,
  },
  {
    name: "Analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-20 lg:w-64 min-h-screen bg-zinc-900 border-r border-zinc-800">
      <div className="p-6">
        <h1 className="hidden lg:block text-xl font-bold text-white">
          LearnX
        </h1>

        <h1 className="lg:hidden text-center text-xl">
          🚀
        </h1>
      </div>

      <nav className="px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition mb-2"
            >
              <Icon size={20} />

              <span className="hidden lg:block">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
