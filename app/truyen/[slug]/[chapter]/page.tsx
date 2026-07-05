import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdBanner from "@/components/ads/AdBanner";
import DonateSection from "@/components/donate/donate-section";
import novelsData from "@/data/novels.json";

interface Props {
  params: Promise<{
    slug: string;
    chapter: string;
  }>;
}

export async function generateStaticParams() {
  const params: Array<{ slug: string; chapter: string }> = [];
  novelsData.forEach((novel) => {
    novel.chapters.forEach((chap) => {
      params.push({
        slug: novel.slug,
        chapter: chap.slug,
      });
    });
  });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, chapter } = await params;
  const novel = novelsData.find((n) => n.slug === slug);
  if (!novel) return {};
  const chap = novel.chapters.find((c) => c.slug === chapter);
  if (!chap) return {};

  return {
    title: `${chap.title} - ${novel.title} - Bukanovel`,
    description: chap.content.substring(0, 150),
  };
}

export default async function NovelChapterPage({ params }: Props) {
  const { slug, chapter } = await params;
  const novel = novelsData.find((n) => n.slug === slug);
  if (!novel) notFound();

  const currentChapterIndex = novel.chapters.findIndex((c) => c.slug === chapter);
  if (currentChapterIndex === -1) notFound();

  const chap = novel.chapters[currentChapterIndex];
  const prevChapter = currentChapterIndex > 0 ? novel.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < novel.chapters.length - 1 ? novel.chapters[currentChapterIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between transition-colors duration-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 dark:text-zinc-500 font-semibold space-x-2">
          <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-500 transition">Trang chủ</Link>
          <span>/</span>
          <Link href="/truyen" className="hover:text-orange-600 dark:hover:text-orange-500 transition">Truyện</Link>
          <span>/</span>
          <Link href={`/truyen/${novel.slug}`} className="hover:text-orange-600 dark:hover:text-orange-500 transition">{novel.title}</Link>
          <span>/</span>
          <span className="text-slate-655 dark:text-zinc-350">{chap.title}</span>
        </nav>

        {/* Chapter Header */}
        <div className="text-center space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500">
            {novel.title}
          </p>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {chap.title}
          </h1>
        </div>

        {/* Chapter Control Top */}
        <div className="flex justify-between items-center py-3 border-y border-slate-200/50 dark:border-zinc-800 text-xs font-bold">
          {prevChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${prevChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 transition"
            >
              &larr; Chương trước
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">&larr; Chương đầu</span>
          )}

          <Link
            href={`/truyen/${novel.slug}`}
            className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 transition"
          >
            Mục lục
          </Link>

          {nextChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${nextChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 transition"
            >
              Chương sau &rarr;
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">Hết chương &rarr;</span>
          )}
        </div>

        {/* Chapter Content */}
        <article className="prose dark:prose-invert max-w-none text-base md:text-lg text-slate-800 dark:text-zinc-300 leading-relaxed font-serif whitespace-pre-line py-4">
          {chap.content}
        </article>

        {/* Google AdSense Frame Holder */}
        <AdBanner />

        {/* Chapter Control Bottom */}
        <div className="flex justify-between items-center py-3 border-y border-slate-200/50 dark:border-zinc-800 text-xs font-bold">
          {prevChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${prevChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 transition"
            >
              &larr; Chương trước
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">&larr; Chương đầu</span>
          )}

          <Link
            href={`/truyen/${novel.slug}`}
            className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 transition"
          >
            Mục lục
          </Link>

          {nextChapter ? (
            <Link
              href={`/truyen/${novel.slug}/${nextChapter.slug}`}
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl hover:border-orange-500/20 transition"
            >
              Chương sau &rarr;
            </Link>
          ) : (
            <span className="text-slate-300 dark:text-zinc-700 px-4 py-2">Hết chương &rarr;</span>
          )}
        </div>

        {/* VietQR Donate Section */}
        <DonateSection />
      </main>

      <Footer />
    </div>
  );
}