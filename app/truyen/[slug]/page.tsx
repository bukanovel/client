import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import novelsData from "@/data/novels.json";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return novelsData.map((novel) => ({
    slug: novel.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const novel = novelsData.find((n) => n.slug === slug);
  if (!novel) return {};

  return {
    title: `${novel.title} - Bukanovel`,
    description: novel.synopsis,
  };
}

export default async function NovelDetailPage({ params }: Props) {
  const { slug } = await params;
  const novel = novelsData.find((n) => n.slug === slug);
  if (!novel) notFound();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between transition-colors duration-200">
      <Header />

      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full space-y-8">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-400 dark:text-zinc-500 font-semibold space-x-2">
          <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-500 transition">Trang chủ</Link>
          <span>/</span>
          <Link href="/truyen" className="hover:text-orange-600 dark:hover:hover:text-orange-500 transition">Truyện</Link>
          <span>/</span>
          <span className="text-slate-650 dark:text-zinc-350">{novel.title}</span>
        </nav>

        {/* Novel Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {novel.title}
          </h1>
          <div className="flex gap-2">
            <span className="text-xs font-bold bg-slate-100 dark:bg-zinc-900 text-slate-500 dark:text-zinc-400 px-2.5 py-1 rounded-md">
              Tác giả: {novel.author}
            </span>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 p-6 rounded-2xl space-y-3">
            <h3 className="text-sm font-bold text-slate-950 dark:text-white uppercase tracking-wider">Tóm tắt tác phẩm</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              {novel.synopsis}
            </p>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">Mục lục chương</h2>
          <div className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-2xl divide-y divide-slate-100 dark:divide-zinc-800 overflow-hidden">
            {novel.chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/truyen/${novel.slug}/${chapter.slug}`}
                className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-zinc-850/50 transition duration-200 text-sm font-semibold"
              >
                <span className="text-slate-800 dark:text-zinc-200">{chapter.title}</span>
                <span className="text-xs text-orange-600 dark:text-orange-400">&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}