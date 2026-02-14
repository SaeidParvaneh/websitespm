
import React, { useState } from 'react';
import { PromptItem } from '../types';

interface PromptCardProps {
  prompt: PromptItem;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl hover:bg-slate-800 transition duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h4 className="font-bold text-lg">{prompt.title}</h4>
          <span className="text-[10px] uppercase tracking-wider text-slate-500">{prompt.category}</span>
        </div>
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden mb-5 bg-slate-800 relative group">
        {/* Changed exampleImageUrl to imageUrl to match the PromptItem interface */}
        <img src={prompt.imageUrl} alt="Example" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs">نمونه خروجی</span>
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {prompt.description}
      </p>

      <div className="relative">
        <div className="bg-slate-950 p-4 rounded-2xl text-xs font-mono text-slate-300 mb-4 h-32 overflow-y-auto break-words border border-slate-800">
          {prompt.prompt}
        </div>
        <button 
          onClick={handleCopy}
          className={`absolute bottom-3 left-3 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            copied ? 'bg-green-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {copied ? 'کپی شد!' : 'کپی پرامپت'}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-2">
          <span>❤️ ۱۲۸</span>
          <span>👁️ ۱.۲k</span>
        </div>
        <span>سازنده: SPM AI</span>
      </div>
    </div>
  );
};

export default PromptCard;
