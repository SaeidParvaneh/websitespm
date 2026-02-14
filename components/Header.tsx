
import React, { useState } from 'react';
import { ViewType, PromptCategory } from '../types';

interface HeaderProps {
  onNavigate: (view: ViewType) => void;
  activeView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activeView }) => {
  const [showPromptsMenu, setShowPromptsMenu] = useState(false);

  const getCategoryIcon = (category: PromptCategory) => {
    switch (category) {
      case PromptCategory.IMAGE:
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
      case PromptCategory.VIDEO:
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
      case PromptCategory.SOFTWARE:
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
      case PromptCategory.SOCIAL:
        return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L3 11l5.586-5.586A1.994 1.994 0 019 5h6a2 2 0 012 2v1" /></svg>;
      default: return null;
    }
  };

  return (
    <header className="sticky top-0 z-50 glass header-glow">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 cursor-pointer butterfly-anim group" onClick={() => onNavigate('HOME')}>
          <div className="relative">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#ff00cc] drop-shadow-[0_0_8px_rgba(255,0,204,0.5)]" fill="currentColor">
              <path className="wing" d="M12 21.5c-1.35 0-2.52-.76-3.1-1.91-1.46.74-3.15.35-4.14-.94-1.35-1.75-.8-4.31.95-5.65-1.1-1.33-1.46-3.23-.88-4.78.67-1.79 2.5-2.73 4.28-2.22C10.12 4.4 11 3 12 3s1.88 1.4 2.89 3c1.78-.51 3.61.43 4.28 2.22.58 1.55.22 3.45-.88 4.78 1.75 1.34 2.3 3.9.95 5.65-.99 1.29-2.68 1.68-4.14.94-.58 1.15-1.75 1.91-3.1 1.91zM9.54 8.7c-.44.13-.88.31-1.29.54-1.35 1.04-1.78 3.03-.95 4.39.29.47.69.85 1.16 1.12.38-2.19 1.51-4.17 3.25-5.59-1.01-.29-2.07-.39-3.17-.46zm6.31 1.66c1.74 1.42 2.87 3.4 3.25 5.59.47-.27.87-.65 1.16-1.12.83-1.36.4-3.35-.95-4.39-.41-.23-.85-.41-1.29-.54-1.1.07-2.16.17-3.17.46z"/>
            </svg>
          </div>
          <h1 className="text-2xl font-black tracking-tighter hidden md:block group-hover:gradient-text transition-all">
            SPM <span className="text-[#ff00cc]">AI</span> NOW
          </h1>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-bold">
          <button onClick={() => onNavigate('HOME')} className={`px-4 py-2 rounded-xl transition-all ${activeView === 'HOME' ? 'text-[#ff00cc]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>خانه</button>
          <button onClick={() => onNavigate('NEWS')} className={`px-4 py-2 rounded-xl transition-all ${activeView === 'NEWS' ? 'text-[#ff00cc]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}>اخبار داغ</button>

          <a 
            href="https://saeidparvaneh.github.io/AiSPM/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 rounded-xl text-slate-300 hover:text-[#3333ff] transition flex items-center gap-2 group hover:bg-white/5"
          >
            <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 0L9 4" />
            </svg>
            قطب نمای Ai
          </a>

          <div className="relative" onMouseEnter={() => setShowPromptsMenu(true)} onMouseLeave={() => setShowPromptsMenu(false)}>
            <button className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1 hover:bg-white/5 ${Object.values(PromptCategory).includes(activeView as any) ? 'text-[#ff00cc]' : 'text-slate-300 hover:text-white'}`}>
              پرامپت‌ها
              <svg className={`w-4 h-4 transition-transform ${showPromptsMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            {showPromptsMenu && (
              <div className="absolute top-full right-0 mt-2 w-56 mesh-glass rounded-2xl overflow-hidden shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 border border-white/10">
                {Object.values(PromptCategory).map((cat) => (
                  <button key={cat} onClick={() => { onNavigate(cat); setShowPromptsMenu(false); }} className="w-full text-right px-4 py-3 text-sm text-slate-200 hover:bg-white/10 hover:text-[#ff00cc] transition flex items-center justify-between">
                    <span>{cat}</span>
                    <span className="opacity-50">{getCategoryIcon(cat)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button onClick={() => onNavigate('ADMIN')} className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 hover:bg-white/5 ${activeView === 'ADMIN' ? 'text-[#3333ff]' : 'text-slate-400 hover:text-white'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            پنل مدیریت
          </button>
        </nav>

        <button className="mesh-glass btn-glow px-8 py-2.5 rounded-full text-sm font-black text-white hover:mesh-glass-active whitespace-nowrap">
          ورود اعضاء
        </button>
      </div>
    </header>
  );
};

export default Header;
