
import React, { useState } from 'react';
import { PromptItem } from '../types';

interface KeepPromptCardProps {
  prompt: PromptItem;
}

const KeepPromptCard: React.FC<KeepPromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="break-inside-avoid mb-6 bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col hover:border-[#ff00cc]/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ff00cc]/10">
      <div className="relative overflow-hidden">
        <img src={prompt.imageUrl} alt={prompt.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f042e] to-transparent opacity-40"></div>
        <div className="absolute top-3 left-3 mesh-glass px-2 py-1 rounded-lg text-[10px] text-white font-black uppercase">Premium</div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-[#0f042e]/80">
        <h4 className="font-black text-xl mb-3 text-white group-hover:text-[#ff00cc] transition-colors">{prompt.title}</h4>
        
        <div className="relative mb-4 flex-grow">
          <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light italic opacity-80">
            «{prompt.prompt}»
          </p>
          <div className="flex flex-wrap gap-2">
            {prompt.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold text-[#3333ff]">#{tag}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
          <div className="flex gap-2">
            <button className="p-2 mesh-glass rounded-xl text-slate-300 hover:text-[#ff00cc]"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>
          </div>
          
          <button onClick={handleCopy} className={`px-6 py-2 rounded-xl text-xs font-black transition-all duration-300 ${copied ? 'bg-green-600/30 text-green-400 border border-green-500/50' : 'mesh-glass text-white'}`}>
            {copied ? 'کپی شد' : 'کپی دستور'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeepPromptCard;
