"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Novel } from "@/types";
import { Search, X } from "lucide-react";

interface HomepageBentoProps {
  initialNovels: Novel[];
}

interface HistoryItem {
  novelSlug: string;
  novelTitle: string;
  chapterSlug: string;
  chapterTitle: string;
  updatedAt: string;
}

export function removeVietnameseAccents(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}
const HOT_GENRES = [
  "Rom-Com", "Isekai", "Fantasy", "Huyền Huyễn", "Game-Isekai", 
  "Cyber-fantasy", "Action", "Đam Mỹ", "Kinh Dị", "Slice of Life"
];

export default function HomepageBento({ initialNovels }: HomepageBentoProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [readingHistory, setReadingHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      try {
        const historyStr = localStorage.getItem("bukanovel-reading-history");
        if (historyStr) {
          const historyData = JSON.parse(historyStr);
          if (typeof historyData === "object" && !Array.isArray(historyData)) {
            const list = Object.keys(historyData).map((key) => ({
              novelSlug: key,
              novelTitle: historyData[key].novelTitle || key,
              chapterSlug: historyData[key].chapterSlug,
              chapterTitle: historyData[key].chapterTitle,
              updatedAt: historyData[key].updatedAt || "",
            }));
            setReadingHistory(list);
          } else if (Array.isArray(historyData)) {
            setReadingHistory(historyData);
          }
        }
      } catch (e) {
        console.error("Lỗi đọc lịch sử đọc truyện:", e);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const filteredNovels = useMemo(() => {
    const searchNormalized = removeVietnameseAccents(searchQuery.trim());
    return initialNovels.filter((novel) => {
      const matchesSearch =
        removeVietnameseAccents(novel.title).includes(searchNormalized) ||
        removeVietnameseAccents(novel.author).includes(searchNormalized);
      
      const matchesGenre = selectedGenre
        ? novel.genres?.some(
            (g) => g.toLowerCase() === selectedGenre.toLowerCase()
          )
        : true;

      return matchesSearch && matchesGenre;
    });
  }, [initialNovels, searchQuery, selectedGenre]);

  const handleGenreClick = (genre: string) => {
    if (selectedGenre === genre) {
      setSelectedGenre(null);
    } else {
      setSelectedGenre(genre);
    }
  };

  const latestNovels = useMemo(() => {
    return [...initialNovels].sort((a, b) => b.chapters.length - a.chapters.length);
  }, [initialNovels]);

  const trendingNovels = useMemo(() => {
    return [...initialNovels].sort((a, b) => (b.stats?.rating || 0) - (a.stats?.rating || 0));
  }, [initialNovels]);

  return (
    <div className="space-y-8">
      {/* Ô tìm kiếm lớn trung tâm */}
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="relative">
          <input
            type="text"
            data-testid="input-search-novels"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm tên truyện hoặc tác giả..."
            className="w-full px-6 py-4 pl-12 rounded-full border border-slate-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-900/80 backdrop-blur-xs text-sm text-slate-800 dark:text-zinc-200 focus:outline-hidden focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 shadow-xs"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650 cursor-pointer flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Dải Thể Loại Trượt Ngang (Mobile-First) */}
      <div className="space-y-2 max-w-2xl mx-auto">
        <p className="text-xs font-bold text-slate-400 dark:text-zinc-500 text-left px-1 uppercase tracking-wider">
          Lọc theo thể loại hot
        </p>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {HOT_GENRES.map((genre) => {
            const isActive = selectedGenre === genre;
            const isTop3 = ["rom-com", "isekai", "fantasy"].includes(genre.toLowerCase());
            return (
              <button
                key={genre}
                onClick={() => handleGenreClick(genre)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap snap-clamp transition-all duration-150 cursor-pointer flex items-center gap-1 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-500/20 border border-orange-500"
                    : "bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-650 dark:text-zinc-400 hover:border-orange-400"
                }`}
              >
                {isTop3 && <span>🔥</span>}
                <span>{genre}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hiển thị kết quả khi có tìm kiếm hoặc có chọn thể loại */}
      {(searchQuery.trim() !== "" || selectedGenre !== null) ? (
        <div className="space-y-4 max-w-2xl mx-auto" data-testid="search-results-container">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
              {selectedGenre ? `Thể loại: ${selectedGenre}` : "Kết quả tìm kiếm"} ({filteredNovels.length})
            </h3>
            {selectedGenre && (
              <button
                onClick={() => setSelectedGenre(null)}
                className="text-xs text-orange-500 hover:underline cursor-pointer font-bold"
              >
                Bỏ chọn lọc
              </button>
            )}
          </div>
          
          {filteredNovels.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {filteredNovels.map((novel) => (
                <Link
                  key={novel.id}
                  href={`/truyen/${novel.slug}`}
                  className="flex items-center gap-4 p-4 bg-card border border-card-border rounded-2xl hover:border-orange-500/20 transition text-left"
                >
                  {novel.coverUrl ? (
                    <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-slate-100 dark:bg-zinc-850 flex-shrink-0">
                      <Image
                        src={novel.coverUrl}
                        alt={novel.title}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-orange-400 to-amber-500 flex-shrink-0 flex items-center justify-center text-white font-black text-sm select-none shadow-xs border border-orange-500/10">
                      {novel.title.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 dark:text-zinc-100">{novel.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-zinc-500 mt-1">Tác giả: {novel.author}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {novel.genres?.map((g) => (
                        <span key={g} className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 font-medium">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-500 bg-orange-50 dark:bg-orange-950/30 px-3 py-1.5 rounded-lg shrink-0">
                    Chap {novel.chapters.length}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500 dark:text-zinc-500">
              Không tìm thấy truyện nào khớp với từ khóa &quot;{searchQuery}&quot;
            </div>
          )}
        </div>
      ) : (
        // Bento Grid Layout mặc định
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cột 1: Truyện mới cập nhật */}
          <div className="bg-card border border-card-border rounded-3xl p-6 space-y-4" data-testid="bento-new-novels">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <span>🕒</span>
              Mới cập nhật
            </h3>
            <div className="space-y-3">
              {latestNovels.slice(0, 5).map((novel) => {
                const latestChap = novel.chapters[novel.chapters.length - 1];
                return (
                  <Link
                    key={novel.id}
                    href={`/truyen/${novel.slug}`}
                    className="block p-3 rounded-xl hover:bg-slate-100/50 dark:hover:bg-zinc-800/30 transition text-left"
                  >
                    <div className="font-bold text-sm text-slate-900 dark:text-zinc-100 line-clamp-1">
                      {novel.title}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1">
                      {latestChap ? `Mới nhất: ${latestChap.title}` : "Chưa có chương"}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Cột 2: Bảng xếp hạng thịnh hành */}
          <div className="bg-card border border-card-border rounded-3xl p-6 space-y-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
              <span>📈</span>
              Thịnh hành
            </h3>
            <div className="space-y-3">
              {trendingNovels.slice(0, 5).map((novel, idx) => (
                <Link
                  key={novel.id}
                  href={`/truyen/${novel.slug}`}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100/50 dark:hover:bg-zinc-800/30 transition text-left"
                >
                  <span className="font-black text-lg text-orange-500/40 w-6 text-center">{idx + 1}</span>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-slate-900 dark:text-zinc-100 line-clamp-1">
                      {novel.title}
                    </div>
                    <div className="text-[10px] text-slate-400 dark:text-zinc-500 flex items-center gap-1">
                      <span>⭐</span>
                      {novel.stats?.rating || 9.0} • {novel.author}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Cột 3: Lịch sử đọc & Quảng cáo */}
          <div className="space-y-6">
            {/* Bento Lịch sử đọc */}
            {mounted && readingHistory.length > 0 && (
              <div className="bg-card border border-card-border rounded-3xl p-6 space-y-4">
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <span>📜</span>
                  Đọc gần đây
                </h3>
                <div className="space-y-2">
                  {readingHistory.slice(0, 2).map((item, idx) => (
                    <Link
                      key={`${item.novelSlug}-${idx}`}
                      href={`/truyen/${item.novelSlug}/${item.chapterSlug}`}
                      className="block p-3 bg-slate-50 dark:bg-zinc-900/40 border border-slate-100 dark:border-zinc-800/60 rounded-xl hover:border-orange-500/20 transition text-left"
                    >
                      <div className="font-bold text-xs text-slate-950 dark:text-zinc-200 line-clamp-1">
                        {item.novelTitle}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 line-clamp-1">
                        Đọc tiếp: {item.chapterTitle}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Bento Quảng cáo AdSense tĩnh chống CLS */}
            <div
              data-testid="adsense-container"
              className="w-full min-h-[250px] bg-slate-150/40 dark:bg-zinc-900/30 rounded-3xl border border-slate-200/50 dark:border-zinc-850 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
            >
              <span className="text-[10px] text-slate-400 dark:text-zinc-500 uppercase tracking-widest font-bold mb-2">
                Liên kết tài trợ
              </span>
              <div className="text-xs text-slate-400 dark:text-zinc-500">
                Không gian quảng cáo AdSense
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

