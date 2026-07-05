"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  novelSlug: string;
  firstChapterSlug: string;
}

interface HistoryItem {
  chapterSlug: string;
  chapterTitle: string;
  updatedAt: string;
}

export default function NovelActionButtons({ novelSlug, firstChapterSlug }: Props) {
  const [mounted, setMounted] = useState(false);
  const [historyItem, setHistoryItem] = useState<HistoryItem | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const historyStr = localStorage.getItem("bukanovel-reading-history");
      if (historyStr) {
        const history = JSON.parse(historyStr);
        if (history[novelSlug]) {
          setHistoryItem(history[novelSlug]);
        }
      }
    } catch (e) {
      console.error("Failed to read reading history:", e);
    }
  }, [novelSlug]);

  if (!mounted) {
    // Trả về Skeleton Loader hoặc nút Đọc từ đầu tĩnh trước để tránh CLS
    return (
      <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={`/truyen/${novelSlug}/${firstChapterSlug}`}
          className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 duration-200 select-none pointer-events-none opacity-50"
        >
          <span className="material-symbols-outlined text-sm">auto_stories</span>
          Đọc từ đầu nhen 🚀
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center">
      <Link
        href={`/truyen/${novelSlug}/${firstChapterSlug}`}
        className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 duration-200"
      >
        <span className="material-symbols-outlined text-sm">auto_stories</span>
        Đọc từ đầu nhen 🚀
      </Link>
      
      {historyItem && (
        <Link
          href={`/truyen/${novelSlug}/${historyItem.chapterSlug}`}
          className="w-full md:w-auto px-8 py-4 bg-slate-900 dark:bg-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-700 text-white font-bold rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 duration-200"
        >
          <span className="material-symbols-outlined text-sm">bookmark</span>
          Đọc tiếp: {historyItem.chapterTitle.replace("Chương ", "Chương ")} 📖
        </Link>
      )}
    </div>
  );
}
