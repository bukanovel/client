import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between transition-colors duration-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full space-y-6 text-left">
        <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
          Điều khoản dịch vụ sử dụng dịch vụ – Bukanovel
        </h1>
        <p className="text-xs text-slate-400 dark:text-zinc-500 font-semibold">
          Cập nhật lần cuối: Ngày 05 tháng 07 năm 2026
        </p>

        <div className="prose dark:prose-invert space-y-6 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-medium">
          <p>
            Chào mừng bạn đến với <strong>Bukanovel</strong>. Khi bạn truy cập, lướt đọc truyện hoặc sử dụng bất kỳ tài nguyên nào trên website này, đồng nghĩa với việc bạn đã đọc, hiểu và đồng ý tuân thủ các điều khoản dưới đây. 
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">1. Bản chất dịch vụ và Miễn trừ thủ tục BCT</h2>
            <p>
              Bukanovel vận hành như một không gian lưu trữ và chia sẻ văn học số hóa tối giản, phi lợi nhuận thương mại:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Nội dung miễn phí:</strong> Toàn bộ các tác phẩm Light Novel lưu trữ trên trang được cung cấp hoàn toàn miễn phí, không yêu cầu nạp tiền, không bán tài khoản VIP và không có bất kỳ cổng thanh toán, giao dịch mua bán nào.
              </li>
              <li>
                <strong>Tuyên bố phân loại:</strong> Do hệ thống không tích hợp cổng thanh toán thương mại và không kinh doanh dịch vụ, dựa theo thông tư hướng dẫn của Bộ Công Thương năm 2026, Bukanovel là một <em>Trang thông tin điện tử cá nhân</em> và thuộc diện miễn trừ nghĩa vụ đăng ký/thông báo website thương mại điện tử.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">2. Thỏa thuận về nội dung số do AI sáng tác (Human-in-the-loop)</h2>
            <p>
              Để bảo vệ quyền lợi sở hữu trí tuệ và tuân thủ các quy định quản lý nội dung không gian mạng:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Toàn bộ cốt truyện, bối cảnh và tuyến nhân vật trên website là sản phẩm độc bản được lên ý tưởng bởi trí tuệ nhân tạo (AI) và có sự biên tập trực tiếp từ con người, không sao chép từ bất kỳ tác phẩm hoặc tác giả có thật nào trên thị trường.
              </li>
              <li>
                Tụi mình nghiêm cấm mọi hành vi sao chép, sử dụng các công cụ tự động để lấy dữ liệu chữ của Bukanovel nhằm mục đích phân phối lại trên các ứng dụng hoặc website thương mại khác khi chưa có sự đồng ý bằng văn bản của ban quản trị.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">3. Quy tắc hành vi độc giả chống gian lận quảng cáo</h2>
            <p>
              Bukanovel sử dụng mạng lưới quảng cáo liên kết từ đối tác thứ ba (Google AdSense) để trang trải chi phí vận hành hệ thống. Chúng mình yêu cầu bạn cam kết bảo vệ hệ thống:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Không gian lận tương tác quảng cáo:</strong> Nghiêm cấm mọi hành vi cố tình nhấp chuột liên tục vào quảng cáo, sử dụng các công cụ tạo lưu lượng truy cập ảo hoặc giả lập hành vi người dùng nhằm mục đích trục lợi hoặc phá hoại tài khoản quảng cáo của trang.
              </li>
              <li>
                <strong>Bảo vệ an ninh mạng:</strong> Tuyệt đối không thực hiện các hành vi tấn công mạng, chèn mã độc hoặc tìm cách can thiệp trái phép vào hệ thống của Bukanovel (Tuân thủ Luật An ninh mạng Việt Nam). Hệ thống bảo vệ tự động sẽ tự động chặn truy cập vĩnh viễn đối với các hành vi bất thường.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">4. Đóng góp tự nguyện (Donate)</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Nút Donate đặt tĩnh ở cuối chương truyện (&quot;Mời tác giả ly cafe ☕&quot;) hoàn toàn dựa trên tinh thần tự nguyện và yêu mến từ phía độc giả.
              </li>
              <li>
                Khoản đóng góp này được xem là quà tặng/tặng cho cá nhân và không cấu thành một giao dịch mua bán hàng hóa hay dịch vụ bắt buộc. Ban quản trị Bukanovel sẽ chủ động thực hiện nghĩa vụ khai trình thuế thu nhập cá nhân theo quý/năm đối với các khoản thu phát sinh từ nội dung số này theo đúng Nghị định 253/2026/NĐ-CP.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-950 dark:text-white">5. Cơ chế giải quyết khiếu nại & Điều chỉnh</h2>
            <p>
              Tụi mình giữ quyền bổ sung, gỡ bỏ chương truyện hoặc cập nhật các điều khoản này bất kỳ lúc nào để phù hợp với định hướng nội dung và tiến trình thay đổi của luật pháp Việt Nam. 
            </p>
            <p>
              Nếu bạn phát hiện bất kỳ nội dung chữ nào vi phạm chuẩn chính tả, lỗi hiển thị UI hoặc nội dung phân phối quảng cáo tự động từ phía đối tác chưa phù hợp, bạn vui lòng gửi phản hồi về địa chỉ email chính thức: <a href="mailto:contact@bukanovel.com" className="text-orange-600 dark:text-orange-500 hover:underline font-semibold">contact@bukanovel.com</a>. Chúng mình sẽ rà soát và xử lý trong vòng 24 giờ làm việc.
            </p>
          </section>

          <p className="font-bold text-slate-400 dark:text-zinc-500 text-center text-xs border-t border-slate-200 dark:border-zinc-800/80 pt-6">
            Bukanovel – Đọc Light Novel Tối Giản, Tốc Độ & Hợp Pháp tại Việt Nam.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
