export interface Question {
  id: string;
  content: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

export interface DailyStreak {
  count: number;
  activeToday: boolean;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  streakCount: number;
}

export interface Chapter {
  id: string;
  title: string;
  slug: string;
  content: string;
  timeAgo?: string;
  isLocked?: boolean;
}

export interface Stats {
  views: string;
  nominations: string;
  followers: string;
  rating: number;
}

export interface Novel {
  id: string;
  title: string;
  slug: string;
  author: string;
  synopsis: string;
  coverUrl?: string;
  stats?: Stats;
  genres?: string[];
  chapters: Chapter[];
}

