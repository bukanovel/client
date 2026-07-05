"use client";

import { useState } from "react";
import Link from "next/link";
import { Chapter } from "@/types";
import { BookOpen, Search, ArrowUpDown, Lock } from "lucide-react";

interface Props {
  chapters: Chapter[];
  novelSlug: string;
}

export default function ChapterListFilter({ chapters, novelSlug }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDescending, setIsDescending] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // Lọc chương theo tên/số chương
  const filteredChapters = chapters.filter((ch) =>
    ch.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sắp xếp
  const sortedChapters = [...filteredChapters].sort((a, b) => {
    // Ép kiểu ID thành số nếu có thể, để sort số chương cho chuẩn
    const idA = parseInt(a.id) || 0;
    const idB = parseInt(b.id) || 0;
    return isDescending ? idB - idA : idA - idB;
  });

  // Giới hạn hiển thị ban đầu là 5 chương
  const displayedChapters = showAll ? sortedChapters : sortedChapters.slice(0, 5);

  return (
    <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800 space-y-6">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-orange-600 dark:text-orange-500">
          <BookOpen className="w-5 h-5" />
          <h2 className="text-lg font-bold text-slate-950 dark:text-white">Danh sách chương</h2>
        </div>
        
        {/* Filter and Sort controls */}
        <div className="flex gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Tìm số chương..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-slate-50 dark:bg-zinc-900 text-sm placeholder:text-slate-400 dark:placeholder:text-zinc-500"
            />
          </div>
          <button
            onClick={() => setIsDescending(!isDescending)}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-800/60 transition-colors flex items-center gap-2 text-xs font-semibold text-slate-650 dark:text-zinc-400 cursor-pointer active:scale-95 duration-200"
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            {isDescending ? "Mới nhất" : "Cũ nhất"}
          </button>
        </div>
      </div>

      {/* Chapters list render */}
      {sortedChapters.length === 0 ? (
        <div className="text-center py-8 text-sm text-slate-400 dark:text-zinc-500">
          Không tìm thấy chương phù hợp.
        </div>
      ) : (
        <div className="divide-y divide-slate-100 dark:divide-zinc-800/60">
          {displayedChapters.map((chapter) => {
            const isLocked = chapter.isLocked ?? false;
            return (
              <Link
                key={chapter.id}
                href={`/truyen/${novelSlug}/${chapter.slug}`}
                className={`flex items-center justify-between py-4 px-2 hover:bg-orange-50/50 dark:hover:bg-orange-950/5 rounded-xl transition-colors group ${
                  isLocked ? "opacity-60" : ""
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-orange-600 dark:text-orange-500 mb-1">
                    Chương {chapter.id}
                  </span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center gap-2">
                    {chapter.title}
                    {isLocked && (
                      <Lock className="w-3 h-3 text-orange-600 dark:text-orange-500" />
                    )}
                  </span>
                </div>
                {chapter.timeAgo && (
                  <span className="text-xs text-slate-400 dark:text-zinc-500 opacity-60">
                    {chapter.timeAgo}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}

      {/* Show more button */}
      {!showAll && sortedChapters.length > 5 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-slate-200 dark:border-zinc-800 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 text-sm font-bold text-slate-500 dark:text-zinc-400 transition-all cursor-pointer active:scale-98"
        >
          Xem thêm {sortedChapters.length - 5} chương khác
        </button>
      )}
    </div>
  );
}

