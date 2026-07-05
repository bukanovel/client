import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import novelsData from "@/data/novels.json";

export const metadata: Metadata = {
  title: "Bukanovel - AI-Driven Light Novels",
  description: "Bukanovel là nền tảng đọc Light Novel độc bản sáng tác hoàn toàn bằng Trí tuệ Nhân tạo kết hợp kiểm duyệt chất lượng.",
};

export default function LandingPortalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Mesh Gradient */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-mesh border-b border-slate-200 dark:border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider">
                The Future of Literature
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-950 dark:text-white leading-tight">
                Revolutionizing Narrative <br />
                through <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Human-AI Collaboration</span>
              </h1>
              <div className="space-y-4 text-slate-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
                <p>
                  Bukanovel không chỉ là một nền tảng đọc truyện; đó là sự chuyển dịch mô hình trong cách câu chuyện được phác thảo, kiến tạo và thưởng thức. Chúng tôi kết hợp trí tuệ nhân tạo tiên tiến để đưa tác giả và độc giả đến gần hơn với bản chất thuần túy của sự sáng tạo.
                </p>
                <p>
                  Bằng cách tích hợp các mô hình AI được tinh chỉnh theo cấu trúc của thể loại Light Novel, chúng tôi cung cấp một khung sườn hỗ trợ xây dựng thế giới và phát triển nhân vật phức tạp, giúp tác giả tập trung thổi hồn cảm xúc vào tác phẩm.
                </p>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/truyen"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg shadow-orange-500/20 active:scale-95 duration-200 transition-all"
                >
                  Bắt đầu đọc truyện
                </Link>
                <a
                  href="#mission"
                  className="border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 px-8 py-3.5 rounded-full text-sm font-bold hover:bg-slate-100 dark:hover:bg-zinc-900 active:scale-95 duration-200 transition-all"
                >
                  Sứ mệnh của chúng tôi
                </a>
              </div>
            </div>

            {/* Featured Novel Card on Hero */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group border border-slate-200/50 dark:border-zinc-800/80">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcz2IHv4kCowCaEfjrnp6OTVXkvISNArgYkKhH3OV8WUW_Ry78UuNfQ6RhDAi0irI_k51AgcGdP8CkReDUx4Pya9k_xepphrKc29XUcRSJR9JvU-9_uho-IT1qPRewmZ-oPLtBjea3f_0SzTPcZd6lZDuWcxe6w9IqitfcgCvuTcSIME2pOW6qxPLg3vvkVp6wB1E8MCdZpGgGMro51QtMtDjwKE_forVMegGMGa6SNgIYkh_xe5fN"
                  alt="Shadow of the Neural Archive Featured Cover"
                  fill
                  sizes="(max-w-768px) 100vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left">
                  <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">
                    Featured AI-Augmented Series
                  </span>
                  <h3 className="text-white text-lg font-bold">
                    Shadow of the Neural Archive
                  </h3>
                </div>
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </section>

        {/* Featured Novels Grid Section */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">
                Tác phẩm tiêu biểu
              </h2>
              <p className="text-slate-500 dark:text-zinc-500 text-sm mt-1">
                Những câu chuyện đặc sắc được lên ý tưởng bởi AI và tinh tuyển bởi biên tập viên.
              </p>
            </div>
            <Link
              href="/truyen"
              className="text-orange-600 dark:text-orange-500 font-bold text-sm flex items-center gap-1 hover:underline"
            >
              Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Grid on Desktop & Scroll on Mobile */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 overflow-x-auto md:overflow-x-visible scrollbar-none snap-x gap-6 px-4 md:px-0 -mx-4 md:mx-0">
            {novelsData.map((novel) => (
              <Link
                key={novel.id}
                href={`/truyen/${novel.slug}`}
                className="flex-none w-64 md:w-auto snap-start flex flex-col group text-left"
              >
                <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden novel-card-shadow border border-slate-200/60 dark:border-zinc-800/80 mb-3 bg-slate-100 dark:bg-zinc-900">
                  <Image
                    src={novel.coverUrl || "https://lh3.googleusercontent.com/..."}
                    alt={novel.title}
                    fill
                    sizes="(max-w-768px) 256px, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-zinc-100 text-base leading-tight group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
                  {novel.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-500 mt-1">
                  <span className="flex items-center gap-0.5 text-orange-500">
                    <span className="material-symbols-outlined !text-xs">star</span>
                    {novel.stats?.rating || "9.0"}
                  </span>
                  <span>•</span>
                  <span>{novel.chapters.length} Chương</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Ad Placement Section (Google AdSense CLS Protected) */}
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="w-full min-h-[192px] bg-slate-100/60 dark:bg-zinc-900/40 rounded-3xl border border-slate-200/50 dark:border-zinc-850 flex flex-col items-center justify-center p-8 relative overflow-hidden text-center group">
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#ea580c_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 space-y-4 max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-zinc-500 font-bold block">
                Liên kết tài trợ
              </span>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                Nâng cấp trải nghiệm với Bukanovel Pro
              </h4>
              <p className="text-slate-500 dark:text-zinc-500 text-xs leading-relaxed">
                Mở khóa các công cụ viết truyện AI chuyên sâu hơn, tùy chỉnh font chữ độc quyền và tận hưởng trải nghiệm đọc không chứa quảng cáo chỉ với chi phí một cốc cà phê mỗi tháng.
              </p>
              <button className="bg-white dark:bg-zinc-900 text-orange-600 dark:text-orange-400 border border-slate-200 dark:border-zinc-800 px-6 py-2 rounded-full text-xs font-bold hover:bg-orange-50 dark:hover:bg-zinc-800/80 active:scale-95 duration-200 transition-colors">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </section>

        {/* Explore Genres Section (Bento Grid) */}
        <section className="py-16 bg-slate-100/30 dark:bg-zinc-900/10 border-y border-slate-200 dark:border-zinc-800/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-left mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">
                Khám phá theo Thể loại
              </h2>
              <p className="text-slate-500 dark:text-zinc-500 text-sm mt-1">
                Tìm kiếm các thế giới song song phù hợp với tâm trạng của bạn.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
              <div className="bg-orange-500/5 dark:bg-orange-500/10 rounded-2xl p-6 flex flex-col justify-end border border-orange-500/10 relative overflow-hidden group h-36 text-left">
                <span className="material-symbols-outlined text-orange-500 text-5xl absolute -top-2 -right-2 opacity-25 group-hover:scale-110 transition-transform">
                  rocket_launch
                </span>
                <span className="font-bold text-slate-900 dark:text-zinc-100 text-base">Sci-Fi</span>
              </div>
              <div className="bg-slate-200/50 dark:bg-zinc-900/60 rounded-2xl p-6 flex flex-col justify-end border border-slate-200 dark:border-zinc-800 relative overflow-hidden group h-36 text-left">
                <span className="material-symbols-outlined text-slate-400 dark:text-zinc-650 text-5xl absolute -top-2 -right-2 opacity-25 group-hover:scale-110 transition-transform">
                  auto_awesome
                </span>
                <span className="font-bold text-slate-900 dark:text-zinc-100 text-base">Fantasy</span>
              </div>
              <div className="bg-red-500/5 dark:bg-red-500/10 rounded-2xl p-6 flex flex-col justify-end border border-red-500/10 relative overflow-hidden group h-36 text-left">
                <span className="material-symbols-outlined text-red-500 text-5xl absolute -top-2 -right-2 opacity-25 group-hover:scale-110 transition-transform">
                  favorite
                </span>
                <span className="font-bold text-slate-900 dark:text-zinc-100 text-base">Romance</span>
              </div>
              <div className="bg-zinc-200/60 dark:bg-zinc-800/40 rounded-2xl p-6 flex flex-col justify-end border border-zinc-200 dark:border-zinc-850 relative overflow-hidden group h-36 text-left">
                <span className="material-symbols-outlined text-zinc-500 text-5xl absolute -top-2 -right-2 opacity-25 group-hover:scale-110 transition-transform">
                  skull
                </span>
                <span className="font-bold text-slate-900 dark:text-zinc-100 text-base">Thriller</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter & VietQR Support Section */}
        <section id="mission" className="py-20 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Mission & Newsletter */}
            <div className="md:col-span-7 space-y-6 text-left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 dark:text-white">
                Ủng hộ tác giả & dịch dịch giả dịch thuật
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed">
                Bukanovel hoạt động trên tinh thần chia sẻ phi lợi nhuận. Sự hỗ trợ tự nguyện từ độc giả trực tiếp tiếp thêm động lực cho dịch giả duy trì tiến độ cập nhật chương mới đều đặn. Hãy tham gia cộng đồng của chúng tôi bằng cách quyên góp qua VietQR hoặc đăng ký email nhận bản tin.
              </p>
              
              <div className="flex gap-2 max-w-md pt-2">
                <input
                  type="email"
                  placeholder="Địa chỉ Email"
                  className="flex-1 rounded-full border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900 px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-slate-800 dark:text-zinc-200 placeholder:text-slate-400 dark:placeholder:text-zinc-650"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer active:scale-95 duration-200">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* QR Payment Box */}
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-150 dark:border-zinc-800/80 shadow-sm flex flex-col items-center gap-4 w-64">
                <div className="w-44 h-44 bg-slate-50 dark:bg-zinc-950 flex items-center justify-center rounded-xl border-2 border-dashed border-slate-200 dark:border-zinc-800 p-3 relative overflow-hidden group">
                  <span className="material-symbols-outlined text-6xl text-slate-350 dark:text-zinc-700 group-hover:scale-105 transition-transform duration-300">
                    qr_code_2
                  </span>
                  <div className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 flex flex-col items-center justify-center text-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] font-bold text-orange-600 dark:text-orange-500 uppercase tracking-wider mb-1">
                      VietQR Code
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-zinc-400 leading-snug">
                      Quét mã ủng hộ team dịch thuật phát triển
                    </p>
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-700 dark:text-zinc-355 uppercase tracking-wider">
                  Mời cafe dịch giả ☕
                </p>
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
