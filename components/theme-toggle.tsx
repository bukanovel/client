"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Đảm bảo chỉ hiển thị UI khi đã mounted ở client để tránh Hydration Mismatch
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="w-[44px] h-[44px] rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-slate-200 dark:border-zinc-800 animate-pulse" />
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 min-w-[44px] min-h-[44px] flex items-center justify-center border border-slate-200 dark:border-zinc-800 hover:opacity-90 transition-all"
      aria-label="Chuyển chế độ sáng tối"
      data-testid="btn-theme-toggle"
    >
      {currentTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
