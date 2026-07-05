import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản dịch vụ sử dụng hệ thống – Bukanovel",
  description: "Quy định, thỏa thuận sử dụng và chính sách miễn trừ trách nhiệm nội dung số đối với độc giả truy cập Bukanovel.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
