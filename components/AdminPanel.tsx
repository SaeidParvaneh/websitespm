
import React, { useState } from 'react';
import { PromptCategory, NewsItem, PromptItem, User } from '../types';

// AdminPanelProps updated to match usage in App.tsx and include onLogin
interface AdminPanelProps {
  onSaveNews: (news: NewsItem) => void;
  onSavePrompt: (prompt: PromptItem) => void;
  onAddUser?: (user: User) => void;
  users?: User[];
  currentUser: User | null;
  onLogin: (user: User) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  onSaveNews, 
  onSavePrompt, 
  onAddUser, 
  users = [], 
  currentUser,
  onLogin 
}) => {
  const [activeTab, setActiveTab] = useState<'NEWS' | 'PROMPT' | 'USERS'>('NEWS');
  
  // News Form State
  const [newsData, setNewsData] = useState({
    title: '', summary: '', category: '', imageUrl: '', sourceUrl: ''
  });

  // Prompt Form State
  const [promptData, setPromptData] = useState({
    title: '', description: '', prompt: '', category: PromptCategory.IMAGE, imageUrl: '', tags: ''
  });

  // User Form State
  const [userData, setUserData] = useState({
    name: '', email: '', password: ''
  });

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNews: NewsItem = {
      ...newsData,
      id: 'n-' + Date.now(),
      date: new Date().toLocaleDateString('fa-IR'),
      author: currentUser?.name || 'مدیر سیستم'
    };
    onSaveNews(newNews);
    setNewsData({ title: '', summary: '', category: '', imageUrl: '', sourceUrl: '' });
    alert('خبر با موفقیت اضافه شد!');
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPrompt: PromptItem = {
      ...promptData,
      id: 'p-' + Date.now(),
      tags: promptData.tags.split(',').map(t => t.trim())
    };
    onSavePrompt(newPrompt);
    setPromptData({ title: '', description: '', prompt: '', category: PromptCategory.IMAGE, imageUrl: '', tags: '' });
    alert('پرامپت با موفقیت اضافه شد!');
  };

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser?.isSuperAdmin || !onAddUser) {
      alert('شما اجازه دسترسی به این بخش را ندارید!');
      return;
    }
    const newUser: User = {
      ...userData,
      id: 'u-' + Date.now(),
      isSuperAdmin: false
    };
    onAddUser(newUser);
    setUserData({ name: '', email: '', password: '' });
    alert('کاربر جدید با موفقیت اضافه شد!');
  };

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff00cc] transition-all placeholder:text-slate-600 text-right";
  const labelClass = "block text-slate-400 text-sm font-bold mb-2 mr-2";

  // Handle case where user is not logged in by showing a login form
  if (!currentUser) {
    return (
      <div className="py-32 px-4 max-w-md mx-auto">
        <div className="mesh-glass p-8 md:p-12 rounded-[3rem] text-center border border-white/10 shadow-2xl">
          <div className="w-20 h-20 mesh-glass mesh-glass-active rounded-3xl flex items-center justify-center font-black text-4xl text-white mx-auto mb-8">S</div>
          <h2 className="text-3xl font-black mb-2 text-white italic">ورود به <span className="gradient-text">پنل مدیریت</span></h2>
          <p className="text-slate-400 text-sm mb-8">لطفاً برای دسترسی به بخش مدیریت وارد شوید</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            // Mock login for demonstration - in real app, verify against WP or DB
            onLogin({ 
              id: 'admin-1', 
              email: 'admin@spm.ai', 
              name: 'مدیر اصلی', 
              isSuperAdmin: true 
            });
          }} className="space-y-4">
             <div>
                <input required className={inputClass} placeholder="ایمیل یا نام کاربری" />
             </div>
             <div>
                <input required type="password" className={inputClass} placeholder="رمز عبور" />
             </div>
             <button type="submit" className="w-full py-4 mesh-glass-active mesh-glass text-white font-black rounded-2xl text-lg shadow-xl hover:scale-[1.02] transition-transform mt-4">
               ورود به سیستم
             </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black mb-4 tracking-tighter italic">Admin <span className="gradient-text">Control</span></h1>
        <p className="text-slate-400">خوش آمدید، {currentUser?.name}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <button 
          onClick={() => setActiveTab('NEWS')}
          className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeTab === 'NEWS' ? 'mesh-glass-active mesh-glass text-white' : 'mesh-glass text-slate-500'}`}
        >
          افزودن خبر
        </button>
        <button 
          onClick={() => setActiveTab('PROMPT')}
          className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeTab === 'PROMPT' ? 'mesh-glass-active mesh-glass text-white' : 'mesh-glass text-slate-500'}`}
        >
          افزودن پرامپت
        </button>
        {currentUser?.isSuperAdmin && (
          <button 
            onClick={() => setActiveTab('USERS')}
            className={`px-8 py-3 rounded-2xl font-black text-sm transition-all ${activeTab === 'USERS' ? 'mesh-glass-active mesh-glass text-white' : 'mesh-glass text-slate-500'}`}
          >
            مدیریت اعضا
          </button>
        )}
      </div>

      <div className="mesh-glass p-8 md:p-12 rounded-[3rem]">
        {activeTab === 'NEWS' && (
          <form onSubmit={handleNewsSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>عنوان خبر</label>
                <input required value={newsData.title} onChange={e => setNewsData({...newsData, title: e.target.value})} className={inputClass} placeholder="مثلا: نسخه جدید جمینای معرفی شد" />
              </div>
              <div>
                <label className={labelClass}>دسته‌بندی</label>
                <input required value={newsData.category} onChange={e => setNewsData({...newsData, category: e.target.value})} className={inputClass} placeholder="مثلا: مدل‌های زبانی" />
              </div>
            </div>
            <div>
              <label className={labelClass}>آدرس تصویر (URL)</label>
              <input required value={newsData.imageUrl} onChange={e => setNewsData({...newsData, imageUrl: e.target.value})} className={inputClass} placeholder="https://..." />
            </div>
            <div>
              <label className={labelClass}>خلاصه خبر</label>
              <textarea required value={newsData.summary} onChange={e => setNewsData({...newsData, summary: e.target.value})} className={`${inputClass} h-32`} placeholder="توضیح کوتاه در مورد خبر..." />
            </div>
            <button type="submit" className="w-full py-4 mesh-glass-active mesh-glass text-white font-black rounded-2xl text-lg">
              انتشار خبر
            </button>
          </form>
        )}

        {activeTab === 'PROMPT' && (
          <form onSubmit={handlePromptSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>عنوان پرامپت</label>
                <input required value={promptData.title} onChange={e => setPromptData({...promptData, title: e.target.value})} className={inputClass} placeholder="مثلا: پرتره سایبرپانک" />
              </div>
              <div>
                <label className={labelClass}>دسته‌بندی</label>
                <select value={promptData.category} onChange={e => setPromptData({...promptData, category: e.target.value as PromptCategory})} className={inputClass}>
                  {Object.values(PromptCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>آدرس تصویر نمونه (URL)</label>
              <input required value={promptData.imageUrl} onChange={e => setPromptData({...promptData, imageUrl: e.target.value})} className={inputClass} placeholder="https://..." />
            </div>
            <div>
              <label className={labelClass}>تگ‌ها (با کاما جدا کنید)</label>
              <input required value={promptData.tags} onChange={e => setPromptData({...promptData, tags: e.target.value})} className={inputClass} placeholder="AI, Art, Cinematic" />
            </div>
            <div>
              <label className={labelClass}>متن پرامپت (دستور)</label>
              <textarea required value={promptData.prompt} onChange={e => setPromptData({...promptData, prompt: e.target.value})} className={`${inputClass} font-mono text-left dir-ltr h-32`} placeholder="/imagine prompt: ..." />
            </div>
            <button type="submit" className="w-full py-4 mesh-glass-active mesh-glass text-white font-black rounded-2xl text-lg">
              ثبت در کتابخانه
            </button>
          </form>
        )}

        {activeTab === 'USERS' && currentUser?.isSuperAdmin && (
          <div className="space-y-12">
            <form onSubmit={handleUserSubmit} className="space-y-6">
              <h3 className="text-2xl font-black text-white mb-6">تعریف عضو جدید</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>نام کامل</label>
                  <input required value={userData.name} onChange={e => setUserData({...userData, name: e.target.value})} className={inputClass} placeholder="سعید ..." />
                </div>
                <div>
                  <label className={labelClass}>ایمیل</label>
                  <input required type="email" value={userData.email} onChange={e => setUserData({...userData, email: e.target.value})} className={inputClass} placeholder="example@gmail.com" />
                </div>
                <div>
                  <label className={labelClass}>رمز عبور</label>
                  <input required type="text" value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})} className={inputClass} placeholder="******" />
                </div>
              </div>
              <button type="submit" className="w-full py-4 bg-[#3333ff]/20 border border-[#3333ff]/50 text-white font-black rounded-2xl hover:bg-[#3333ff]/40 transition">
                افزودن به لیست دسترسی
              </button>
            </form>

            <div className="pt-8 border-t border-white/5">
              <h3 className="text-xl font-black text-white mb-6">لیست اعضای فعلی</h3>
              <div className="space-y-3">
                {users.map(u => (
                  <div key={u.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <div className="font-bold text-white">{u.name} {u.isSuperAdmin && <span className="text-[10px] bg-[#ff00cc] px-2 py-0.5 rounded-full mr-2">مدیر کل</span>}</div>
                      <div className="text-xs text-slate-500">{u.email}</div>
                    </div>
                    <div className="text-xs font-mono text-slate-400">{u.password}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
