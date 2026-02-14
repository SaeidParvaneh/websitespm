
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content?: string;
  category: string;
  date: string;
  imageUrl: string;
  author: string;
  sourceUrl?: string;
  wpId?: number; // شناسه پست در وردپرس
}

export interface PromptItem {
  id: string;
  category: PromptCategory;
  title: string;
  description: string;
  prompt: string;
  imageUrl: string;
  tags: string[];
  wpId?: number;
}

export interface User {
  id: string;
  email: string;
  password?: string;
  isSuperAdmin: boolean;
  name: string;
  wpToken?: string; // برای احراز هویت با وردپرس
}

export enum PromptCategory {
  IMAGE = 'ساخت عکس',
  VIDEO = 'ساخت ویدیو',
  SOFTWARE = 'برنامه‌نویسی',
  SOCIAL = 'شبکه‌های اجتماعی'
}

export type ViewType = 'HOME' | 'NEWS' | 'ADMIN' | PromptCategory;
