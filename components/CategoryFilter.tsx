
import React from 'react';
import { PromptCategory } from '../types';

interface CategoryFilterProps {
  selected: PromptCategory | 'ALL';
  onSelect: (cat: PromptCategory | 'ALL') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selected, onSelect }) => {
  const categories = ['ALL', ...Object.values(PromptCategory)] as (PromptCategory | 'ALL')[];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
            selected === cat 
            ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/30' 
            : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:border-slate-500'
          }`}
        >
          {cat === 'ALL' ? 'همه موارد' : cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
