
import React from 'react';

interface TagFilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onTagSelect(null)}
        className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${
          selectedTag === null
            ? 'mesh-glass-active mesh-glass text-white'
            : 'mesh-glass text-slate-400 hover:text-white'
        }`}
      >
        همه تگ‌ها
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagSelect(tag)}
          className={`px-6 py-2 rounded-xl text-xs font-black transition-all ${
            selectedTag === tag
              ? 'mesh-glass-active mesh-glass text-white'
              : 'mesh-glass text-slate-400 hover:text-white'
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;
