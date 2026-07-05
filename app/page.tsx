import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import novelsData from "@/data/novels.json";

export const metadata: Metadata = {
  title: "Bukanovel - Nền tảng đọc Light Novel sáng tác bởi AI",
  description: "Trang đọc truyện Light Novel độc bản sáng tác hoàn toàn bằng Trí tuệ Nhân tạo kết hợp kiểm duyệt chất lượng.",
};

export default function LandingPortalPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center space-y-12 w-full text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-orange-50 dark:bg-zinc-900 border border-orange-200/50 dark:border-zinc-800 px-4 py-1.5 rounded-full text-xs font-bold text-orange-600 dark:text-orange-500 uppercase tracking-wider">
            ✨ Độc Bản & Sáng Tạo Bằng AI
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight text-slate-950 dark:text-white">
            Khám phá kho tàng Light Novel <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Độc nhất vô nhị từ AI</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Đọc truyện trực tuyến hoàn toàn miễn phí. Nội dung được lên ý tưởng và viết thô bằng các mô hình AI tiên tiến, sau đó được biên tập thủ công nhằm giữ lại cảm xúc chân thật nhất.
          </p>
        </div>

        {/* Novels List Section */}
        <div className="space-y-6 max-w-4xl mx-auto w-full text-left">
          <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">Truyện được đề xuất</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {novelsData.slice(0, 2).map((novel) => (
              <div
                key={novel.id}
                className="bg-white dark:bg-zinc-900 border border-slate-150 dark:border-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-orange-500/20 dark:hover:border-orange-500/20 transition duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-md inline-block">
                    Tác giả: {novel.author}
                  </span>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white line-clamp-1">
                    {novel.title}
                  </h3>
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
          <div className="text-center pt-4">
            <Link
              href="/truyen"
              className="text-sm font-bold text-orange-600 dark:text-orange-500 hover:underline"
            >
              Xem tất cả tác phẩm &rarr;
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
