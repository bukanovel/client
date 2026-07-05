import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import novelsData from "@/data/novels.json";

export const metadata: Metadata = {
  title: "Danh sách tiểu thuyết AI - Bukanovel",
  description: "Khám phá thế giới tiểu thuyết khoa học viễn tưởng, kỳ ảo được sáng tác độc bản bởi AI thế hệ mới.",
};

export default function NovelsCatalogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between transition-colors duration-200">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12 flex-1 w-full space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Danh sách tiểu thuyết AI
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-sm max-w-2xl">
            Tổng hợp các tác phẩm Light Novel được sáng tạo hoàn toàn bởi Trí tuệ Nhân tạo kết hợp sự chọn lọc và kiểm duyệt nội dung mang hơi thở con người.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {novelsData.map((novel) => (
            <div
              key={novel.id}
              className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-orange-500/20 dark:hover:border-orange-500/20 transition duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-md inline-block">
                  Tác giả: {novel.author}
                </span>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white line-clamp-1">
                  {novel.title}
                </h2>
                <p className="text-slate-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-3">
                  {novel.synopsis}
                </p>
              </div>
              <Link
                href={`/truyen/${novel.slug}`}
                className="w-full text-center py-2.5 bg-slate-900 dark:bg-zinc-850 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition"
              >
                Đọc ngay &rarr;
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}