import { MetadataRoute } from 'next';
import { getAllNovels } from '@/lib/novels';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bukanovel.com';
  
  // Các đường dẫn trang tĩnh cơ bản
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/truyen`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    }
  ];

  // Lấy danh sách truyện và chương để tạo link
  const novels = getAllNovels();
  
  novels.forEach((novel) => {
    // Trang chi tiết truyện
    routes.push({
      url: `${baseUrl}/truyen/${novel.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    });


    // Trang đọc chương truyện
    novel.chapters.forEach((chap) => {
      routes.push({
        url: `${baseUrl}/truyen/${novel.slug}/${chap.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  return routes;
}
