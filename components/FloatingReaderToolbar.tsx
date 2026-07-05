"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  novelSlug: string;
  onFontSizeChange: (size: number) => void;
  onThemeChange: (theme: "light" | "sepia" | "dark") => void;
}

export default function FloatingReaderToolbar({
  novelSlug,
  onFontSizeChange,
  onThemeChange,
}: Props) {
  const [fontSize, setFontSize] = useState(20);
  const [theme, setTheme] = useState<"light" | "sepia" | "dark">("sepia");
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  const applyThemeClass = (targetTheme: "light" | "sepia" | "dark") => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove("dark");
    body.classList.remove("sepia-mode");

    if (targetTheme === "dark") {
      root.classList.add("dark");
    } else if (targetTheme === "sepia") {
      body.classList.add("sepia-mode");
    }
  };

  // Load config from Local Storage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const config = localStorage.getItem("bukanovel-reader-config");
        if (config) {
          const { fontSize: savedSize, theme: savedTheme } = JSON.parse(config);
          if (savedSize) {
            setFontSize(savedSize);
            onFontSizeChange(savedSize);
          }
          if (savedTheme) {
            setTheme(savedTheme);
            onThemeChange(savedTheme);
            applyThemeClass(savedTheme);
          }
        } else {
          // Fallback to system dark mode preference
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            onThemeChange("dark");
            applyThemeClass("dark");
          }
        }
      } catch (e) {
        console.error("Local storage error:", e);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [onFontSizeChange, onThemeChange]);

  // Scroll handler to hide/show toolbar
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // Scroll down
      } else {
        setIsVisible(true); // Scroll up
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const updateConfig = (newSize: number, newTheme: "light" | "sepia" | "dark") => {
    try {
      localStorage.setItem(
        "bukanovel-reader-config",
        JSON.stringify({ fontSize: newSize, theme: newTheme })
      );
    } catch (e) {
      console.error("Failed to write to local storage", e);
    }
  };

  const changeFontSize = (delta: number) => {
    const nextSize = Math.min(Math.max(fontSize + delta, 14), 32);
    setFontSize(nextSize);
    onFontSizeChange(nextSize);
    updateConfig(nextSize, theme);
  };

  const changeTheme = (nextTheme: "light" | "sepia" | "dark") => {
    setTheme(nextTheme);
    onThemeChange(nextTheme);
    applyThemeClass(nextTheme);
    updateConfig(fontSize, nextTheme);
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 p-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-slate-200 dark:border-zinc-800 rounded-full shadow-lg">
        {/* TOC Button */}
        <button
          onClick={() => router.push(`/truyen/${novelSlug}`)}
          className="p-3 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          title="Mục lục"
        >
          <span className="material-symbols-outlined">menu_book</span>
        </button>

        <div className="w-px h-6 bg-slate-200 dark:bg-zinc-850 mx-1"></div>

        {/* Font Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => changeFontSize(-1)}
            className="p-2 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            title="Giảm cỡ chữ"
          >
            <span className="material-symbols-outlined !text-[20px]">text_fields</span>
          </button>
          <span className="w-8 text-center text-xs font-bold text-slate-700 dark:text-zinc-350 select-none">
            {fontSize}
          </span>
          <button
            onClick={() => changeFontSize(1)}
            className="p-2 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            title="Tăng cỡ chữ"
          >
            <span className="material-symbols-outlined !text-[28px]">text_fields</span>
          </button>
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-zinc-850 mx-1"></div>

        {/* Appearance Toggle */}
        <div className="flex items-center gap-2 px-2">
          <button
            onClick={() => changeTheme("light")}
            className={`w-7 h-7 rounded-full bg-white border flex items-center justify-center cursor-pointer hover:scale-105 duration-200 ${
              theme === "light"
                ? "border-orange-600 dark:border-orange-500 ring-2 ring-orange-500/20"
                : "border-slate-200 dark:border-zinc-850"
            }`}
            title="Sáng"
          />
          <button
            onClick={() => changeTheme("sepia")}
            className={`w-7 h-7 rounded-full bg-[#FAF7F2] border flex items-center justify-center cursor-pointer hover:scale-105 duration-200 ${
              theme === "sepia"
                ? "border-orange-600 dark:border-orange-500 ring-2 ring-orange-500/20"
                : "border-slate-200 dark:border-zinc-850"
            }`}
            title="Bảo vệ mắt"
          />
          <button
            onClick={() => changeTheme("dark")}
            className={`w-7 h-7 rounded-full bg-[#18181B] border flex items-center justify-center cursor-pointer hover:scale-105 duration-200 ${
              theme === "dark"
                ? "border-orange-600 dark:border-orange-500 ring-2 ring-orange-500/20"
                : "border-slate-200 dark:border-zinc-850"
            }`}
            title="Tối"
          />
        </div>

        <div className="w-px h-6 bg-slate-200 dark:bg-zinc-850 mx-1"></div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer"
          title="Lên đầu trang"
        >
          <span className="material-symbols-outlined">vertical_align_top</span>
        </button>
      </div>
    </div>
  );
}
