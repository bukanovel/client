import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReaderCanvas from "@/components/ReaderCanvas";
import { getAllNovels, getNovelBySlug, getChapter } from "@/lib/novels";

interface Props {
  params: Promise<{
    slug: string;
    chapter: string;
  }>;
}

export async function generateStaticParams() {
  const novelsData = getAllNovels();
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
  const novel = getNovelBySlug(slug);
  if (!novel) return {};
  const chap = getChapter(slug, chapter);
  if (!chap || !chap.content) return {};

  return {
    title: `${chap.title} - ${novel.title} - Bukanovel`,
    description: chap.content.substring(0, 150),
  };
}

export default async function NovelChapterPage({ params }: Props) {
  const { slug, chapter } = await params;
  
  const novel = getNovelBySlug(slug);
  if (!novel) notFound();

  const currentChapterIndex = novel.chapters.findIndex((c) => c.slug === chapter);
  if (currentChapterIndex === -1) notFound();

  const chap = getChapter(slug, chapter);
  if (!chap) notFound();

  const prevChapter = currentChapterIndex > 0 ? novel.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < novel.chapters.length - 1 ? novel.chapters[currentChapterIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Reader dynamic Canvas wrapper */}
      <ReaderCanvas
        novel={novel}
        chapter={chap}
        prevChapter={prevChapter}
        nextChapter={nextChapter}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}