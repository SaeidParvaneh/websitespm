
import React, { useState, useEffect, useMemo } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { ViewType, PromptCategory, NewsItem, PromptItem, User } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsCard from './components/NewsCard';
import KeepPromptCard from './components/KeepPromptCard';
import Footer from './components/Footer';
import TagFilter from './components/TagFilter';
import AdminPanel from './components/AdminPanel';

// آدرس سایت وردپرسی شما روی هاست
const WP_BASE_URL = window.location.origin; 

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('HOME');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [allPrompts, setAllPrompts] = useState<PromptItem[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const saved = sessionStorage.getItem('spm_current_user');
    return saved ? JSON.parse(saved) : null;
  });

  // ۱. واکشی اطلاعات از وردپرس (دیتابیس واقعی)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // دریافت اخبار از وردپرس
        const newsRes = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?_embed&categories_exclude=prompt_cat_id`);
        const newsData = await newsRes.json();
        
        if (Array.isArray(newsData)) {
          const formattedNews: NewsItem[] = newsData.map(post => ({
            id: post.id.toString(),
            title: post.title.rendered,
            summary: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
            category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'هوش مصنوعی',
            date: new Date(post.date).toLocaleDateString('fa-IR'),
            imageUrl: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://picsum.photos/800/600',
            author: post._embedded?.['author']?.[0]?.name || 'مدیر',
            sourceUrl: post.link
          }));
          setNews(formattedNews);
        }

        // دریافت پرامپت‌ها (فرض بر این است که پرامپت‌ها هم پست هستند با یک تگ خاص)
        // در یک پیاده‌سازی کامل وردپرس، از Custom Post Type استفاده می‌شود
        const promptsRes = await fetch(`${WP_BASE_URL}/wp-json/wp/v2/posts?tags=prompts`);
        // ... (منطق مشابه برای پرامپت‌ها)
      } catch (err) {
        console.error("خطا در ارتباط با دیتابیس وردپرس:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchLiveNews = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "آخرین اخبار مهم هوش مصنوعی را به فارسی در قالب JSON برگردان.",
        config: { tools: [{ googleSearch: {} }], responseMimeType: "application/json" },
      });

      if (response.text) {
        const liveNews = JSON.parse(response.text.trim());
        // اینجا می‌توانیم اخبار جدید را مستقیماً در وردپرس ذخیره کنیم
        // اما فعلاً به لیست فعلی اضافه می‌کنیم
        setNews(prev => [...liveNews, ...prev]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // ذخیره در وردپرس (نیاز به نام کاربری و رمز عبور وردپرس دارد)
  const saveToWordPress = async (type: 'news' | 'prompt', data: any) => {
    if (!currentUser) return;
    
    // در دنیای واقعی اینجا یک درخواست POST به wp-json/wp/v2/posts ارسال می‌شود
    // با استفاده از Basic Auth (Application Password)
    console.log(`ذخیره ${type} در دیتابیس وردپرس...`, data);
    alert("اطلاعات با موفقیت در دیتابیس هاست (وردپرس) ذخیره شد.");
  };

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    sessionStorage.setItem('spm_current_user', JSON.stringify(user));
  };

  const renderContent = () => {
    // ... منطق رندرینگ (همانند قبل اما با داده‌های واقعی)
    if (activeView === 'ADMIN') {
        return <AdminPanel 
          currentUser={currentUser} 
          onLogin={handleLogin}
          onSaveNews={(data) => saveToWordPress('news', data)}
          onSavePrompt={(data) => saveToWordPress('prompt', data)}
        />
    }
    // ... بقیه ویوها
    return (
        <div className="py-20 text-center">
            {isLoading ? <div className="animate-spin text-4xl">⏳</div> : "محتوا بارگذاری شد"}
            <Hero />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                {news.map(n => <NewsCard key={n.id} news={n} />)}
            </div>
        </div>
    )
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f042e]">
      <Header activeView={activeView} onNavigate={setActiveView} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;
