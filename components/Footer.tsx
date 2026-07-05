import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border mt-20 min-h-[200px]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start justify-between">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">Bukanovel</h3>
            <p className="text-sm font-semibold text-slate-800 dark:text-zinc-200">Trang đọc truyện Light Novel miễn phí.</p>
            <div className="space-y-1.5 text-xs text-slate-500 dark:text-zinc-400">
              <p>Chịu trách nhiệm nội dung: Nguyễn Đức Tâm</p>
              <p>Địa chỉ: Tổ 2, Phường Cầu Giấy, TP. Hà Nội</p>
              <p>Email hỗ trợ: contact@bukanovel.com</p>
            </div>
          </div>
          <div className="space-y-3 md:text-right">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-widest uppercase">Thông tin pháp lý</h4>
            <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-zinc-400">
              <Link href="/terms-of-service" className="hover:text-slate-950 dark:hover:text-white transition">
                Điều khoản dịch vụ
              </Link>
              <Link href="/privacy-policy" className="hover:text-slate-950 dark:hover:text-white transition">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-card-border text-center">
          <p className="text-[10px] text-slate-400 dark:text-zinc-500 font-semibold uppercase tracking-wider">
            © 2026 Bukanovel. Tất cả các quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
