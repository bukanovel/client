"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { BookOpen, Minus, Plus, Type, ArrowUp } from "lucide-react";

interface Props {
  novelSlug: string;
  onFontSizeChange: (size: number) => void;
  onThemeChange: (theme: "light" | "dark") => void;
  fontFamily: "serif" | "sans";
  onFontFamilyChange: (font: "serif" | "sans") => void;
}

export default function FloatingReaderToolbar({
  novelSlug,
  onFontSizeChange,
  onThemeChange,
  fontFamily,
  onFontFamilyChange,
}: Props) {
  const [fontSize, setFontSize] = useState(20);
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const activeTheme = mounted ? theme : "light";

  // Load config from Local Storage on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const config = localStorage.getItem("bukanovel-reader-config");
        if (config) {
          const { fontSize: savedSize, fontFamily: savedFont } = JSON.parse(config);
          if (savedSize) {
            setFontSize(savedSize);
            onFontSizeChange(savedSize);
          }
          if (savedFont) {
            onFontFamilyChange(savedFont);
          }
        }
      } catch (e) {
        console.error("Local storage error:", e);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [onFontSizeChange, onFontFamilyChange]);

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

  const updateConfig = (newSize: number, newFont: "serif" | "sans") => {
    try {
      localStorage.setItem(
        "bukanovel-reader-config",
        JSON.stringify({ fontSize: newSize, fontFamily: newFont })
      );
    } catch (e) {
      console.error("Failed to write to local storage", e);
    }
  };

  const changeFontSize = (delta: number) => {
    const nextSize = Math.min(Math.max(fontSize + delta, 14), 32);
    setFontSize(nextSize);
    onFontSizeChange(nextSize);
    updateConfig(nextSize, fontFamily);
  };

  const changeTheme = (nextTheme: "light" | "dark") => {
    setTheme(nextTheme);
    onThemeChange(nextTheme);
  };

  const toggleFont = () => {
    const nextFont = fontFamily === "serif" ? "sans" : "serif";
    onFontFamilyChange(nextFont);
    updateConfig(fontSize, nextFont);
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-[95vw] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-slate-200 dark:border-zinc-800 rounded-full shadow-lg overflow-x-auto scrollbar-none">
        {/* TOC Button */}
        <button
          onClick={() => router.push(`/truyen/${novelSlug}`)}
          className="p-2 sm:p-3 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer shrink-0"
          title="Mục lục"
        >
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="w-px h-5 sm:h-6 bg-slate-200 dark:bg-zinc-850 mx-0.5 sm:mx-1 shrink-0"></div>

        {/* Font Controls */}
        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          <button
            onClick={() => changeFontSize(-1)}
            className="p-1.5 sm:p-2 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            title="Giảm cỡ chữ"
          >
            <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <span className="w-6 sm:w-8 text-center text-[11px] sm:text-xs font-bold text-slate-700 dark:text-zinc-300 select-none">
            {fontSize}
          </span>
          <button
            onClick={() => changeFontSize(1)}
            className="p-1.5 sm:p-2 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer"
            title="Tăng cỡ chữ"
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="w-px h-5 sm:h-6 bg-slate-200 dark:bg-zinc-850 mx-0.5 sm:mx-1 shrink-0"></div>

        {/* Font Family Toggle */}
        <div className="flex items-center shrink-0">
          <button
            onClick={toggleFont}
            className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-extrabold border border-slate-200 dark:border-zinc-800 hover:border-orange-500/20 rounded-full hover:bg-orange-500/10 text-slate-700 dark:text-zinc-300 transition-all cursor-pointer flex items-center gap-0.5 sm:gap-1 select-none"
            title="Đổi phông chữ"
          >
            <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">{fontFamily === "serif" ? "Có chân" : "Không chân"}</span>
            <span className="xs:hidden">{fontFamily === "serif" ? "Serif" : "Sans"}</span>
          </button>
        </div>

        <div className="w-px h-5 sm:h-6 bg-slate-200 dark:bg-zinc-850 mx-0.5 sm:mx-1 shrink-0"></div>

        {/* Appearance Toggle */}
        <div className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 shrink-0">
          <button
            onClick={() => changeTheme("light")}
            className={`w-6 h-6 sm:w-7 h-7 rounded-full bg-white border flex items-center justify-center cursor-pointer hover:scale-105 duration-200 ${
              activeTheme === "light"
                ? "border-orange-600 dark:border-orange-500 ring-2 ring-orange-500/20"
                : "border-slate-200 dark:border-zinc-850"
            }`}
            title="Sáng"
          />
          <button
            onClick={() => changeTheme("dark")}
            className={`w-6 h-6 sm:w-7 h-7 rounded-full bg-[#18181B] border flex items-center justify-center cursor-pointer hover:scale-105 duration-200 ${
              activeTheme === "dark"
                ? "border-orange-600 dark:border-orange-500 ring-2 ring-orange-500/20"
                : "border-slate-200 dark:border-zinc-850"
            }`}
            title="Tối"
          />
        </div>

        <div className="w-px h-5 sm:h-6 bg-slate-200 dark:bg-zinc-850 mx-0.5 sm:mx-1 shrink-0"></div>

        {/* Scroll to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 sm:p-3 hover:bg-orange-500/10 text-slate-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 rounded-full transition-colors flex items-center justify-center cursor-pointer shrink-0"
          title="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}



