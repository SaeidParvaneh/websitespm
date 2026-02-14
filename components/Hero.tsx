
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#0f042e] pt-24 pb-40">
      {/* Ironic Background Elements */}
      <div className="ironic-blob w-[500px] h-[500px] bg-[#ff00cc] -top-20 -right-20 animate-pulse"></div>
      <div className="ironic-blob w-[400px] h-[400px] bg-[#3333ff] bottom-0 -left-20"></div>
      
      {/* Decorative Circles from the image */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 border-4 border-white/10 rounded-full"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white/40 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full mesh-glass text-white text-xs font-bold mb-8 tracking-widest uppercase">
             PRESENTATION FOR FUTURE AI
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter uppercase">
            SPM <span className="gradient-text">AI NOW</span>
          </h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            به دنیای هوش مصنوعی با استایل مدرن خوش آمدید. ما اینجا هستیم تا رویاهای دیجیتال شما را با پرامپت‌های مهندسی شده واقعی کنیم.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 mesh-glass-active mesh-glass text-white font-black rounded-2xl text-xl shadow-2xl btn-glow">
              کاوش در پرامپت‌ها
            </button>
            <button className="w-full sm:w-auto px-12 py-5 mesh-glass text-white font-bold rounded-2xl text-xl btn-glow">
              آخرین اخبار
            </button>
          </div>
        </div>
      </div>
      
      {/* Stats bar */}
      <div className="max-w-5xl mx-auto mt-24 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-12 mesh-glass rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="text-center">
            <div className="text-3xl font-black mb-1 text-[#ff00cc]">+۱۰k</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">خبر روزانه</div>
          </div>
          <div className="text-center border-r border-white/10 pr-8">
            <div className="text-3xl font-black mb-1 text-[#3333ff]">+۵۰۰</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">پرامپت فعال</div>
          </div>
          <div className="text-center border-r border-white/10 pr-8">
            <div className="text-3xl font-black mb-1 text-white">۹۸٪</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">رضایت کاربران</div>
          </div>
          <div className="text-center border-r border-white/10 pr-8">
            <div className="text-3xl font-black mb-1 text-[#ff00cc]">۲۴/۷</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">پشتیبانی</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
