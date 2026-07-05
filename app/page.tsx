import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllNovels } from "@/lib/novels";
import HomepageBento from "@/components/HomepageBento";

export const metadata: Metadata = {
  title: "Bukanovel - Đọc Light Novel Sáng Tác AI Tối Giản",
  description: "Nền tảng đọc Light Novel độc bản sáng tác hoàn toàn bằng Trí tuệ Nhân tạo thế hệ mới kết hợp kiểm duyệt chất lượng.",
};

export default function LandingPortalPage() {
  const novelsData = getAllNovels();
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-200">
      <Header />
      <main className="flex-grow max-w-6xl mx-auto px-6 py-12 w-full space-y-12">
        {/* Tiêu đề trang chủ tối giản */}
        <div className="text-center space-y-3 pt-6">
          <h1 className="text-4xl font-black tracking-tight text-slate-950 dark:text-white">
            Bukanovel <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-slate-500 dark:text-zinc-400 text-xs">
            Trải nghiệm văn học số tinh gọn, thông minh cùng trí tuệ nhân tạo.
          </p>
        </div>

        {/* Thanh tìm kiếm và Bento Grid */}
        <HomepageBento initialNovels={novelsData} />
      </main>
      <Footer />
    </div>
  );
}
