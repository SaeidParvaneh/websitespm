
import React from 'react';
import { NewsItem } from '../types';

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <article className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition duration-300 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          {news.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-slate-500 text-[10px] mb-3 block">{news.date}</span>
        <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-blue-400 transition">
          {news.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">
          {news.summary}
        </p>
        <div className="flex items-center justify-between mt-auto">
          {news.sourceUrl ? (
            <a 
              href={news.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-all"
            >
              مطالعه منبع اصلی
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ) : (
            <button className="flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
              بیشتر بخوانید
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
