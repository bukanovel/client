import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chính sách bảo mật - Bukanovel",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full space-y-6 text-left">
        <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Chính sách bảo mật thông tin – Bukanovel
        </h1>
        <p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">Cập nhật lần cuối: Ngày 05 tháng 07 năm 2026</p>

        <div className="prose dark:prose-invert space-y-6 text-sm text-slate-700 dark:text-zinc-350 leading-relaxed font-medium">
          <p>
            Chào bạn nha! Cảm ơn bạn đã lựa chọn <strong>Bukanovel</strong> làm nơi đọc truyện thư giãn.
          </p>
          <p>
            Vì Bukanovel ở phiên bản hiện tại hoạt động hoàn toàn miễn phí và không yêu cầu bạn phải tạo tài khoản đăng nhập, nên việc bảo mật thông tin của bạn cực kỳ đơn giản và an toàn. Tuy nhiên, để hệ thống chạy mượt mà và duy trì được nền tảng, tụi mình có áp dụng một vài chính sách nhỏ liên quan đến dữ liệu hệ thống. Bạn dành chút thời gian đọc cùng chúng mình nghen!
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">1. Tụi mình &quot;thu thập&quot; những thông tin gì?</h2>
            <p>Thật ra là... hầu như không có gì mang tính cá nhân cả! ✨</p>
            <p>Ở phiên bản này, Bukanovel chỉ có tính năng đọc truyện Light Novel tĩnh.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Dữ liệu đọc truyện:</strong> Mọi thông tin (chương đang đọc, cấu hình giao diện) được xử lý ngay lập tức trên trình duyệt của bạn qua bộ nhớ `localStorage`. Tụi mình KHÔNG lưu trữ thông tin này về máy chủ (server) của Bukanovel.
              </li>
              <li>
                <strong>Dữ liệu hệ thống (Cookies):</strong> Để trang web load nhanh hơn cho những lần truy cập sau và phục vụ cho việc hiển thị quảng cáo, hệ thống sẽ tự động lưu lại một tệp dữ liệu ẩn danh rất nhỏ gọi là Cookie trên trình duyệt của bạn.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">2. Lời hứa bảo mật từ Bukanovel</h2>
            <p>
              Vì tụi mình không yêu cầu bạn điền họ tên, số điện thoại hay email đăng nhập, nên bạn có thể hoàn toàn yên tâm &quot;lướt&quot; web một cách ẩn danh. Tụi mình cam kết:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Không có bất kỳ dữ liệu cá nhân nào của bạn bị thu thập lén lút.</li>
              <li>Tuyệt đối không có hành vi mua bán hay trao đổi thông tin người dùng cho bất kỳ bên thứ ba nào khác.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">3. LƯU Ý QUAN TRỌNG VỀ QUẢNG CÁO (Google AdSense) 🍪</h2>
            <p>
              Để Bukanovel có kinh phí duy trì server 24/7 và luôn mở cửa miễn phí cho tất cả độc giả, trang web có sử dụng hệ thống quảng cáo từ đối tác <strong>Google AdSense</strong>. Đây là quy định chung từ phía Google mà bạn cần lưu ý nha:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Các nhà cung cấp bên thứ ba, bao gồm cả Google, sẽ sử dụng <strong>Cookie</strong> để phân phát các quảng cáo phù hợp dựa trên các lượt truy cập trước đó của bạn vào Bukanovel hoặc các trang web khác trên Internet.
              </li>
              <li>
                Việc Google và các đối tác của họ sử dụng Cookie quảng cáo cho phép họ hiển thị những quảng cáo có liên quan và hữu ích nhất đến bạn.
              </li>
              <li>
                Tụi mình cam kết tuân thủ nghiêm ngặt các quy định về bảo vệ dữ liệu cá nhân theo <strong>Nghị định 13/NĐ-CP</strong> của Chính phủ Việt Nam đối với mọi hoạt động xử lý dữ liệu liên quan.
              </li>
              <li>
                Bạn hoàn toàn có quyền chủ động <strong>từ chối</strong> việc sử dụng Cookie cho quảng cáo được cá nhân hóa bằng cách truy cập vào trang <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-500 hover:underline">Cài đặt quảng cáo của Google</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">4. Kết nối với chúng mình</h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi nào về các chính sách này, hoặc vô tình thấy một quảng cáo nào đó chưa phù hợp, đừng ngại &quot;ới&quot; tụi mình ngay qua các thông tin dưới đây nha:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Nền tảng:</strong> Bukanovel - Trang đọc truyện Light Novel  </li>
              <li><strong>Chịu trách nhiệm nội dung:</strong> Nguyễn Đức Tâm</li>
              <li><strong>Địa chỉ:</strong> Tổ 2, Phường Cầu Giấy, TP. Hà Nội, Việt Nam</li>
              <li><strong>Email hỗ trợ:</strong> contact@bukanovel.com</li>
            </ul>
          </section>

          <p className="font-bold text-orange-600 dark:text-orange-500 mt-6">
            Cứ tự nhiên thư giãn cùng truyện đọc nha. Chúc bạn có những phút giây vui vẻ! 🚀
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
