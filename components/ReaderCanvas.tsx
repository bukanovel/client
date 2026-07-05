"use client";

import { useState } from "react";
import Link from "next/link";
import FloatingReaderToolbar from "@/components/FloatingReaderToolbar";
import AdBanner from "@/components/ads/AdBanner";
import DonateSection from "@/components/donate/donate-section";
import { Chapter, Novel } from "@/types";

interface Props {
  novel: Novel;
  chapter: Chapter;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
}

export default function ReaderCanvas({
  novel,
  chapter,
  prevChapter,
  nextChapter,
}: Props) {
  const [fontSize, setFontSize] = useState(20);
  const [, setTheme] = useState<"light" | "sepia" | "dark">("sepia");

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      {/* Reading Canvas Wrapper */}
      <main className="w-full max-w-[720px] mx-auto px-4 md:px-0 pt-12 pb-32 space-y-12">
        {/* Chapter Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-orange-600 dark:text-orange-500">
            {novel.title}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight">
            {chapter.title}
          </h1>
          {chapter.timeAgo && (
            <p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">
              Cập nhật: {chapter.timeAgo}
            </p>
          )}
        </div>

        {/* Chapter Control Top */}
        <div className="flex justify-between items-center py-3 border-y border-slate-200 dark:border-zinc-800 text-xs font-bold select-none">
          {prevChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${prevChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 duration-200 transition-all"
            >
              &larr; Chương trước
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">
              &larr; Chương đầu
            </span>
          )}

          <Link
            href={`/truyen/${novel.slug}`}
            className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 duration-200 transition-all"
          >
            Mục lục
          </Link>

          {nextChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${nextChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 duration-200 transition-all"
            >
              Chương sau &rarr;
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">
              Hết chương &rarr;
            </span>
          )}
        </div>

        {/* Chapter Content Main Text */}
        <article
          className="prose dark:prose-invert max-w-none text-slate-800 dark:text-zinc-300 leading-relaxed font-serif whitespace-pre-line py-4 select-text text-left"
          style={{ fontSize: `${fontSize}px` }}
        >
          {chapter.content}
        </article>

        {/* Google AdSense Frame Holder (Anti CLS Protected) */}
        <div className="my-8">
          <AdBanner />
        </div>

        {/* Chapter Control Bottom */}
        <div className="flex justify-between items-center py-3 border-y border-slate-200 dark:border-zinc-800 text-xs font-bold select-none">
          {prevChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${prevChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 duration-200 transition-all"
            >
              &larr; Chương trước
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">
              &larr; Chương đầu
            </span>
          )}

          <Link
            href={`/truyen/${novel.slug}`}
            className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 duration-200 transition-all"
          >
            Mục lục
          </Link>

          {nextChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${nextChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 hover:text-orange-600 dark:hover:text-orange-400 active:scale-95 duration-200 transition-all"
            >
              Chương sau &rarr;
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">
              Hết chương &rarr;
            </span>
          )}
        </div>

        {/* VietQR Donate Box */}
        <DonateSection />
      </main>

      {/* Floating Reading Toolbar */}
      <FloatingReaderToolbar
        novelSlug={novel.slug}
        onFontSizeChange={(size) => setFontSize(size)}
        onThemeChange={(th) => setTheme(th)}
      />
    </div>
  );
}
