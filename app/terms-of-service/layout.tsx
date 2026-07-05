import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản dịch vụ sử dụng Bukanovel",
  description: "Quy định và điều khoản sử dụng nền tảng đọc Light Novel Bukanovel, miễn trừ trách nhiệm nội dung và quy tắc donate.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
