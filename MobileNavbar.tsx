"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function MobileNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-zinc-800 bg-zinc-900 py-4 md:hidden">
      <Home />

      <BookOpen />

      <BarChart3 />

      <Settings />
    </nav>
  );
}
