import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full space-y-6 text-left">
        <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Chính sách bảo mật thông tin – Bukanovel
        </h1>
        <p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">
          Cập nhật lần cuối: Ngày 05 tháng 07 năm 2026
        </p>

        <div className="prose dark:prose-invert space-y-6 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
          <p>
            Chào bạn nha! Cảm ơn bạn đã lựa chọn <strong>Bukanovel</strong> làm nơi đọc truyện thư giãn. 
            Để bạn hoàn toàn yên tâm trải nghiệm, tụi mình xin tuyên bố rõ ràng và minh bạch các cam kết bảo mật dữ liệu dựa trên quy định pháp luật Việt Nam hiện hành và chính sách đối tác của Google.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">1. Cam kết &quot;Zero-Data&quot; từ phía Bukanovel</h2>
            <p>
              Bukanovel vận hành theo triết lý tối giản hoàn toàn nhằm mang lại tốc độ tải trang nhanh nhất:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Không đăng nhập / đăng ký:</strong> Hệ thống không thiết lập bất kỳ tính năng tạo tài khoản nào. Bạn không cần cung cấp Họ tên, Email, Số điện thoại hay bất kỳ thông tin cá nhân nào để đọc truyện.
              </li>
              <li>
                <strong>Không lưu vết máy chủ:</strong> Website không sử dụng cơ sở dữ liệu (Database) để theo dõi hành vi hay lưu trữ lịch sử đọc truyện của bạn trên hệ thống backend.
              </li>
              <li>
                <strong>Lịch sử đọc local:</strong> Toàn bộ tủ truyện hoặc chương truyện bạn đang đọc dở chỉ được lưu tạm thời trên chính trình duyệt điện thoại/máy tính của bạn (qua LocalStorage). Bạn có thể xóa bỏ hoàn toàn dữ liệu này bất cứ lúc nào bằng cách xóa lịch sử duyệt web.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">2. Tuân thủ Luật Quảng cáo Việt Nam 2026</h2>
            <p>
              Bukanovel có tích hợp hiển thị quảng cáo để duy trì chi phí số hóa nội dung số. Đối với hệ thống quảng cáo trên trang, tụi mình cam kết tuân thủ nghiêm ngặt quy định mới:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Tắt quảng cáo một chạm:</strong> Toàn bộ các khối quảng cáo (bao gồm cả quảng cáo chuyển tiếp Interstitial Ads giữa các chương) luôn hiển thị rõ ràng nút đóng (X) hoặc nút bỏ qua ngay lập tức, cho phép bạn tắt quảng cáo chỉ với một lần chạm duy nhất mà không phải chờ đợi ép buộc.
              </li>
              <li>
                <strong>Bảo vệ trải nghiệm đọc:</strong> Quảng cáo không được thiết kế dạng popup che khuất nội dung chính hoặc gây cản trở thao tác chuyển chương tự nhiên của bạn.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">3. Tuyên bố về Cookie quảng cáo của Google AdSense</h2>
            <p>
              Mặc dù Bukanovel không thu thập dữ liệu của bạn, nhưng hệ thống có sử dụng dịch vụ quảng cáo liên kết <strong>Google AdSense</strong>. Theo chính sách toàn cầu của Google và quy định bảo vệ dữ liệu cá nhân (Nghị định 13/NĐ-CP):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Google và các nhà cung cấp bên thứ ba sẽ sử dụng các tệp mã nhỏ gọi là <strong>Cookie</strong> để phân phối quảng cáo dựa trên các lượt truy cập trước đó của bạn vào Bukanovel hoặc các trang web khác trên internet.
              </li>
              <li>
                Việc sử dụng cookie quảng cáo của Google giúp Google và các đối tác hiển thị những nội dung quảng cáo phù hợp, có liên quan và cá nhân hóa tốt hơn đối với sở thích của bạn.
              </li>
              <li>
                Bạn hoàn toàn có quyền chủ động <strong>từ chối</strong> việc sử dụng Cookie cho quảng cáo được cá nhân hóa bằng cách truy cập trực tiếp vào trang <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">Trung tâm quản lý quảng cáo của Google</a>.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">4. Thông tin liên hệ trách nhiệm pháp lý</h2>
            <p>
              Để đáp ứng tính minh bạch thông tin bắt buộc đối với Trang thông tin điện tử cá nhân tại Việt Nam, mọi vấn đề thắc mắc, phản ánh về nội dung truyện số hóa hoặc hiển thị quảng cáo, bạn vui lòng liên hệ ban quản trị qua thông tin sau:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Tên nền tảng số:</strong> Bukanovel – Không gian đọc Light Novel Tối Giản</li>
              <li><strong>Chịu trách nhiệm nội dung:</strong> Nguyễn Đức Tâm</li>
              <li><strong>Địa chỉ điều hành:</strong> Tổ 2, Phường Cầu Giấy, Quận Cầu Giấy, TP. Hà Nội, Việt Nam</li>
              <li><strong>Email hỗ trợ vận hành:</strong> <a href="mailto:contact@bukanovel.com" className="text-orange-600 dark:text-orange-500 hover:underline">contact@bukanovel.com</a></li>
            </ul>
          </section>

          <p className="font-bold text-orange-600 dark:text-orange-500 mt-6 bg-orange-50 dark:bg-orange-950/30 p-4 rounded-xl text-center border border-orange-100 dark:border-orange-900/50">
            Cứ tự nhiên thư giãn cùng những chương truyện hay nha. Chúc bạn có những phút giây vui vẻ tại Bukanovel! ☕🚀
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
