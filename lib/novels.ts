import fs from 'fs';
import path from 'path';
import { Novel, Chapter } from '@/types';

const NOVELS_DIR = path.join(process.cwd(), 'data/novels');

/**
 * Đọc danh sách tất cả các truyện (chỉ chứa metadata và danh sách chương rút gọn)
 */
export function getAllNovels(): Novel[] {
  if (!fs.existsSync(NOVELS_DIR)) return [];
  
  const novelDirs = fs.readdirSync(NOVELS_DIR);
  const novels: Novel[] = [];

  for (const dirName of novelDirs) {
    const novelPath = path.join(NOVELS_DIR, dirName);
    if (fs.statSync(novelPath).isDirectory()) {
      const overviewPath = path.join(novelPath, 'overview.json');
      if (fs.existsSync(overviewPath)) {
        try {
          const content = fs.readFileSync(overviewPath, 'utf-8');
          const novelData = JSON.parse(content) as Novel;
          novels.push(novelData);
        } catch (e) {
          console.error(`Error reading overview for ${dirName}:`, e);
        }
      }
    }
  }
  return novels;
}

/**
 * Đọc chi tiết thông tin 1 truyện theo slug
 */
export function getNovelBySlug(slug: string): Novel | null {
  const overviewPath = path.join(NOVELS_DIR, slug, 'overview.json');
  if (!fs.existsSync(overviewPath)) return null;
  
  try {
    const content = fs.readFileSync(overviewPath, 'utf-8');
    return JSON.parse(content) as Novel;
  } catch (e) {
    console.error(`Error reading novel overview for ${slug}:`, e);
    return null;
  }
}

/**
 * Đọc nội dung 1 chương cụ thể
 */
export function getChapter(novelSlug: string, chapterSlug: string): Chapter | null {
  const chapterPath = path.join(NOVELS_DIR, novelSlug, 'chapters', `${chapterSlug}.json`);
  if (!fs.existsSync(chapterPath)) return null;
  
  try {
    const content = fs.readFileSync(chapterPath, 'utf-8');
    return JSON.parse(content) as Chapter;
  } catch (e) {
    console.error(`Error reading chapter ${chapterSlug} for novel ${novelSlug}:`, e);
    return null;
  }
}
