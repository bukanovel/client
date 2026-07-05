import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Điều khoản dịch vụ - Bukanovel",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-100 flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full space-y-6 text-left">
        <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Điều khoản sử dụng dịch vụ – Bukanovel
        </h1>
        <p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">Cập nhật lần cuối: Ngày 05 tháng 07 năm 2026</p>

        <div className="prose dark:prose-invert space-y-6 text-sm text-slate-700 dark:text-zinc-355 leading-relaxed font-medium">
          <p>
            Chào bạn nha! Cảm ơn bạn đã ghé thăm Bukanovel – trang đọc truyện Light Novel hoàn toàn miễn phí.
          </p>
          <p>
            Để chúng mình có thể đồng hành cùng nhau lâu dài và giữ cho website luôn hoạt động ổn định, 100% miễn phí, bạn vui lòng dành vài phút đọc kỹ những &quot;luật chơi&quot; nho nhỏ dưới đây nghen. Khi bạn sử dụng các tiện ích trên Bukanovel, đồng nghĩa với việc bạn đã vui vẻ đồng ý với các điều khoản này rồi đó!
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">1. Các tiện ích tụi mình cung cấp</h2>
            <p>Hiện tại ở phiên bản này, Bukanovel hoàn toàn miễn phí và cung cấp cho bạn tiện ích đọc truyện Light Novel tĩnh.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">2. Giới hạn trách nhiệm (Miễn trừ trách nhiệm pháp lý)</h2>
            <p>Chúng mình sử dụng các mô hình AI để sáng tạo nội dung truyện nhằm mục đích giải trí và học thuật thuần túy.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mọi nhân vật, bối cảnh hay sự kiện trong truyện đều là **sản phẩm của trí tưởng tượng độc bản từ AI** và không phản ánh các sự kiện có thật ngoài đời thực.</li>
              <li>Bukanovel sẽ không chịu trách nhiệm pháp lý cho bất kỳ sự trùng hợp ngẫu nhiên nào liên quan đến cốt truyện hoặc nhân vật.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">3. Điều khoản về Quảng cáo và Duy trì hệ thống</h2>
            <p>Để Bukanovel có thể duy trì server hoạt động 24/7 và luôn mở cửa miễn phí cho độc giả, chúng mình có đặt các vị trí quảng cáo từ đối tác Google AdSense.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Chúng mình cam kết các vị trí quảng cáo luôn được thiết kế gọn gàng, không che khuất hay làm gián đoạn cảm xúc khi đọc truyện của bạn.</li>
              <li><strong>Quyền tắt quảng cáo:</strong> Người đọc hoàn toàn có quyền chủ động tắt hoặc chặn quảng cáo bằng một chạm theo các quy định Luật Quảng cáo năm 2026 của Việt Nam.</li>
              <li><strong>Nghiêm cấm hành vi gian lận:</strong> Mong bạn KHÔNG sử dụng bất kỳ phần mềm, công cụ tự động (bot) nào để bấm (click) liên tục vào quảng cáo trên Bukanovel nhằm mục đích phá hoại. Nếu hệ thống phát hiện IP có hành vi bất thường, tụi mình buộc lòng phải chặn truy cập của bạn để bảo vệ hệ thống.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">4. Quyền sở hữu trí tuệ</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mọi nội dung truyện được xuất bản trên Bukanovel đều thuộc bản quyền của hệ thống.</li>
              <li>Vui lòng không sử dụng các công cụ tự động để cào dữ liệu truyện từ Bukanovel nhằm mục đích thương mại hoặc phát hành trên các nền tảng khác khi chưa được đồng ý.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">5. Cập nhật điều khoản</h2>
            <p>
              Tụi mình có thể sẽ cập nhật hoặc thay đổi các điều khoản này khi website có thêm tính năng mới. Mọi sự thay đổi sẽ được thông báo ngay trên trang này. Bạn nhớ thỉnh thoảng ghé xem lại nha!
            </p>
          </section>

          <p className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
            Nếu bạn có bất kỳ góp ý nào, đừng ngại gửi email cho chúng mình qua: <strong>contact@bukanovel.com</strong>
          </p>
          <p className="font-bold text-orange-600 dark:text-orange-500">
            Chúc bạn có những phút giây đọc truyện thật thư giãn! 🚀
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
