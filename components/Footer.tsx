
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#ff00cc]" fill="currentColor">
              <path d="M12 21.5c-1.35 0-2.52-.76-3.1-1.91-1.46.74-3.15.35-4.14-.94-1.35-1.75-.8-4.31.95-5.65-1.1-1.33-1.46-3.23-.88-4.78.67-1.79 2.5-2.73 4.28-2.22C10.12 4.4 11 3 12 3s1.88 1.4 2.89 3c1.78-.51 3.61.43 4.28 2.22.58 1.55.22 3.45-.88 4.78 1.75 1.34 2.3 3.9.95 5.65-.99 1.29-2.68 1.68-4.14.94-.58 1.15-1.75 1.91-3.1 1.91zM9.54 8.7c-.44.13-.88.31-1.29.54-1.35 1.04-1.78 3.03-.95 4.39.29.47.69.85 1.16 1.12.38-2.19 1.51-4.17 3.25-5.59-1.01-.29-2.07-.39-3.17-.46zm6.31 1.66c1.74 1.42 2.87 3.4 3.25 5.59.47-.27.87-.65 1.16-1.12.83-1.36.4-3.35-.95-4.39-.41-.23-.85-.41-1.29-.54-1.1.07-2.16.17-3.17.46z"/>
            </svg>
            <h1 className="text-xl font-black">SPM AI NOW</h1>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            پیشرو در ارائه محتوا و ابزارهای کاربردی هوش مصنوعی در ایران. همراه شما برای کشف دنیای فردا.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6">دسترسی سریع</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition">درباره ما</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">سوالات متداول</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">حریم خصوصی</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">قوانین و مقررات</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">دسته‌بندی‌ها</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><a href="#" className="hover:text-blue-400 transition">پرامپت‌های گرافیکی</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">کدنویسی هوشمند</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">تولید محتوا</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">آنالیز داده</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">خبرنامه اختصاصی</h4>
          <p className="text-sm text-slate-500 mb-4">با عضویت در خبرنامه، از آخرین ابزارهای معرفی شده باخبر شوید.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="ایمیل شما" 
              className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-blue-500 text-right"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-blue-500 transition btn-glow">عضویت</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-slate-600">© ۱۴۰۳ SPM AI NOW. تمامی حقوق محفوظ است.</p>
        
        {/* امضای طراحی اختصاصی */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mb-1">Developed with Passion</p>
          <p className="text-sm font-bold tracking-wider">
            Designed by <span className="gradient-text font-black text-lg">saeidparvaneh</span>
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-600">
          <a href="#" className="hover:text-white transition">تلگرام</a>
          <a href="#" className="hover:text-white transition">اینستاگرام</a>
          <a href="#" className="hover:text-white transition">لینکدین</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
