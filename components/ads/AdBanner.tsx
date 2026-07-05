"use client";

import React, { useState, useEffect } from "react";

const MOCK_ADS = [
  {
    title: "Đọc Truyện Không Giới Hạn Cùng AI Novelist",
    description: "Khám phá hàng ngàn thế giới truyện dị giới, đô thị được sáng tác độc bản bởi AI thế hệ mới.",
    cta: "Khám phá ngay",
    tag: "Tài trợ",
    gradient: "from-orange-500/10 via-red-500/5 to-transparent",
    border: "border-orange-500/20"
  },
  {
    title: "Tự Sáng Tác Light Novel Của Riêng Bạn",
    description: "Nhận hướng dẫn xây dựng Prompt viết truyện ngắn có nhịp độ cực cuốn từ Bukanovel.",
    cta: "Xem cẩm nang",
    tag: "Đề xuất",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    border: "border-emerald-500/20"
  },
  {
    title: "Mua Trà Sữa Tiếp Sức Admin",
    description: "Ủng hộ server Bukanovel hoạt động miễn phí bằng cách donate ly trà sữa nhỏ nha.",
    cta: "Ủng hộ admin ☕",
    tag: "Bukanovel",
    gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
    border: "border-indigo-500/20"
  }
];

export default function AdBanner() {
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdIndex(Math.floor(Math.random() * MOCK_ADS.length));
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const ad = MOCK_ADS[adIndex];

  return (
    <div 
      className={`w-full min-h-[250px] bg-gradient-to-r ${ad.gradient} bg-white dark:bg-zinc-900 flex flex-col justify-between p-6 my-6 rounded-2xl overflow-hidden border ${ad.border} shadow-sm transition-all duration-300 relative`}
      data-testid="ad-banner"
    >
      <div className="absolute top-3 right-3 flex items-center gap-1">
        <span className="text-[10px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-widest bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
          {ad.tag}
        </span>
      </div>

      <div className="space-y-2 mt-2">
        <span className="text-xs font-bold text-orange-600 dark:text-orange-500 uppercase tracking-wider">
          Quảng cáo liên kết
        </span>
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white leading-snug">
          {ad.title}
        </h3>
        <p className="text-slate-650 dark:text-zinc-400 text-sm max-w-xl leading-relaxed">
          {ad.description}
        </p>
      </div>

      <div className="pt-4 flex justify-between items-center border-t border-slate-100 dark:border-zinc-800/80">
        <span className="text-xs text-slate-400 dark:text-zinc-500">bukanovel.com/ads</span>
        <button className="bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition duration-200 cursor-pointer">
          {ad.cta}
        </button>
      </div>
    </div>
  );
}
