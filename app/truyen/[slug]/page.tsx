import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChapterListFilter from "@/components/ChapterListFilter";
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
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      <main className="min-h-screen pb-20">
        {/* Blurred Banner Hero Header */}
        <section className="relative h-[380px] md:h-[460px] w-full overflow-hidden border-b border-slate-200/40 dark:border-zinc-900/60">
          <div className="absolute inset-0 z-0">
            {novel.coverUrl && (
              <Image
                src={novel.coverUrl}
                alt={novel.title}
                fill
                priority
                className="object-cover scale-110 blur-3xl opacity-40 dark:opacity-20"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-zinc-950 via-transparent to-transparent z-10"></div>
          </div>
          
          <div className="relative z-20 h-full flex items-end px-6 max-w-6xl mx-auto pb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-end w-full">
              {/* Cover Art Image */}
              <div className="shrink-0 w-40 md:w-56 aspect-[2/3] rounded-2xl shadow-2xl border-4 border-white dark:border-zinc-800 overflow-hidden transform md:-mb-12 bg-slate-150 dark:bg-zinc-900 relative">
                {novel.coverUrl && (
                  <Image
                    src={novel.coverUrl}
                    alt={novel.title}
                    fill
                    sizes="(max-w-768px) 160px, 224px"
                    className="object-cover"
                  />
                )}
              </div>

              {/* Title & Author Info */}
              <div className="flex-1 pb-2 text-left">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="bg-orange-600/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {novel.status || "Ongoing"}
                  </span>
                  <span className="bg-slate-200/70 dark:bg-zinc-850/80 text-slate-700 dark:text-zinc-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {novel.type || "Free"}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-3 tracking-tight leading-tight">
                  {novel.title}
                </h1>
                <p className="text-sm md:text-base font-semibold text-slate-600 dark:text-zinc-400 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-orange-600 dark:text-orange-500 text-lg">
                    person
                  </span>
                  Tác giả: {novel.author}
                </p>
              </div>

              {/* Main CTA */}
              <div className="md:pb-2 w-full md:w-auto">
                <Link
                  href={`/truyen/${novel.slug}/${novel.chapters[0]?.slug}`}
                  className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 duration-200"
                >
                  <span className="material-symbols-outlined text-sm">auto_stories</span>
                  Đọc từ đầu nhen 🚀
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Info Layout */}
        <section className="max-w-6xl mx-auto px-6 mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Column (Synopsis & Chapters) */}
          <div className="lg:col-span-2 space-y-8">
             {/* Synopsis Card */}
            <div className="bg-white dark:bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-zinc-800 text-left">
              <div className="flex items-center gap-2 mb-4 text-orange-600 dark:text-orange-500 border-b border-slate-200 dark:border-zinc-800 pb-3">
                <span className="material-symbols-outlined">description</span>
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">Tóm tắt nội dung</h2>
              </div>
              <div className="text-sm md:text-base text-slate-600 dark:text-zinc-450 leading-relaxed space-y-4 whitespace-pre-line font-medium">
                {novel.synopsis}
              </div>
            </div>

            {/* Chapters list filter wrapper */}
            <ChapterListFilter chapters={novel.chapters} novelSlug={novel.slug} />
          </div>

          {/* Sidebar Column (Stats, Genres, Donate) */}
          <div className="space-y-6 text-left">
            {/* Bento Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-xl font-bold text-orange-600 dark:text-orange-500">
                  {novel.stats?.views || "1.2M"}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-zinc-550 mt-0.5">
                  Lượt xem
                </span>
              </div>
              <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-xl font-bold text-orange-600 dark:text-orange-500">
                  {novel.stats?.nominations || "4.8k"}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-zinc-550 mt-0.5">
                  Đề cử
                </span>
              </div>
              <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-xl font-bold text-orange-600 dark:text-orange-500">
                  {novel.stats?.followers || "2.4k"}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-zinc-550 mt-0.5">
                  Theo dõi
                </span>
              </div>
              <div className="bg-white dark:bg-zinc-900/60 p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-xl font-bold text-orange-600 dark:text-orange-500">
                  {novel.stats?.rating || "9.5"}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-zinc-550 mt-0.5">
                  Đánh giá
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-slate-200 dark:border-zinc-800">
              <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-sm mb-4">Thể loại</h3>
              <div className="flex flex-wrap gap-2">
                {novel.genres?.map((genre) => (
                  <span
                    key={genre}
                    className="bg-slate-100 hover:bg-orange-600 hover:text-white dark:bg-zinc-800 dark:hover:bg-orange-500 text-slate-600 dark:text-zinc-400 px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors duration-200"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Donate Card */}
            <div className="bg-[#FAF7F2] dark:bg-zinc-900/50 p-6 rounded-2xl border border-orange-200 dark:border-zinc-800 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <h3 className="font-bold text-orange-600 dark:text-orange-400 text-base">
                  Ủng hộ dịch giả
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                  Tiếp thêm động lực cho dịch giả để ra chương nhanh hơn nhé!
                </p>
                <div className="bg-white dark:bg-zinc-950 p-3 rounded-xl border border-slate-200 dark:border-zinc-800/60 shadow-inner flex items-center justify-center w-36 h-36 relative overflow-hidden group/qr">
                  <span className="material-symbols-outlined text-5xl text-slate-300 dark:text-zinc-700">
                    qr_code_2
                  </span>
                  <div className="absolute inset-0 bg-white/95 dark:bg-zinc-950/95 flex flex-col items-center justify-center p-2 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-bold text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-1">
                      VietQR
                    </p>
                    <p className="text-[9px] text-slate-400 dark:text-zinc-500 leading-tight">
                      Ủng hộ tự nguyện duy trì website
                    </p>
                  </div>
                </div>
                <button className="w-full bg-slate-900 hover:bg-orange-600 dark:bg-zinc-800 dark:hover:bg-orange-500 text-white text-xs font-bold py-2.5 rounded-xl active:scale-95 duration-200 transition-all">
                  Mời cafe ngay ☕
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}