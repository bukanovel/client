"use client";

import { useEffect, useState } from "react";

export interface ReaderSettingsConfig {
  fontSize: number;
  fontFamily: "sans" | "serif";
  readingMode: "default" | "sepia";
}

interface ReaderSettingsProps {
  onSettingsChange: (settings: ReaderSettingsConfig) => void;
}

export default function ReaderSettings({ onSettingsChange }: ReaderSettingsProps) {
  const [settings, setSettings] = useState<ReaderSettingsConfig>({
    fontSize: 18,
    fontFamily: "serif",
    readingMode: "default",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const saved = localStorage.getItem("reader-settings");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setSettings(parsed);
          onSettingsChange(parsed);
        } catch (e) {
          console.error("Lỗi parse reader-settings:", e);
        }
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [onSettingsChange]);

  const updateSettings = (newSettings: Partial<ReaderSettingsConfig>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem("reader-settings", JSON.stringify(updated));
    onSettingsChange(updated);
  };

  if (!mounted) {
    return (
      <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-slate-200 dark:border-zinc-800 animate-pulse h-[180px]" />
    );
  }

  return (
    <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-slate-200 dark:border-zinc-800 space-y-4 max-w-sm">
      {/* Cỡ chữ */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Cỡ chữ</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateSettings({ fontSize: Math.max(14, settings.fontSize - 1) })}
            className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-800 border border-slate-200 dark:border-zinc-800 font-bold flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors"
            aria-label="Giảm cỡ chữ"
          >
            A-
          </button>
          <span className="w-8 text-center font-semibold text-neutral-800 dark:text-neutral-200">{settings.fontSize}px</span>
          <button
            onClick={() => updateSettings({ fontSize: Math.min(28, settings.fontSize + 1) })}
            className="w-10 h-10 rounded-lg bg-white dark:bg-neutral-800 border border-slate-200 dark:border-zinc-800 font-bold flex items-center justify-center text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-750 transition-colors"
            aria-label="Tăng cỡ chữ"
          >
            A+
          </button>
        </div>
      </div>

      {/* Phông chữ */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Phông chữ</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateSettings({ fontFamily: "sans" })}
            className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
              settings.fontFamily === "sans"
                ? "border-orange-600 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400"
                : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            Không chân (Sans)
          </button>
          <button
            onClick={() => updateSettings({ fontFamily: "serif" })}
            className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
              settings.fontFamily === "serif"
                ? "border-orange-600 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400"
                : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            Có chân (Serif)
          </button>
        </div>
      </div>

      {/* Chế độ đọc Sepia */}
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Chế độ hiển thị</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => updateSettings({ readingMode: "default" })}
            className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
              settings.readingMode === "default"
                ? "border-orange-600 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400"
                : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            Mặc định
          </button>
          <button
            onClick={() => updateSettings({ readingMode: "sepia" })}
            className={`px-3 py-2 rounded-lg border text-xs font-semibold transition-colors ${
              settings.readingMode === "sepia"
                ? "border-orange-600 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400"
                : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            Kem Sepia ☕
          </button>
        </div>
      </div>
    </div>
  );
}
