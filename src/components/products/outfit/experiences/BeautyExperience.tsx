import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';

interface BeautyExperienceProps {
  onChange: () => void;
}

export const BeautyExperience: React.FC<BeautyExperienceProps> = ({ onChange }) => {
  const categories = ['Lipstick', 'Foundation', 'Blush', 'Eyeliner', 'Eyeshadow'];
  const [activeCategory, setActiveCategory] = useState('Lipstick');
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const mockColors: Record<string, string[]> = {
    'Lipstick': ['#8B0000', '#FF0000', '#FF69B4', '#CD5C5C', '#E9967A', '#8B4513'],
    'Foundation': ['#FFE4C4', '#F5DEB3', '#DEB887', '#D2B48C', '#BC8F8F', '#8B4513'],
    'Blush': ['#FFB6C1', '#FFC0CB', '#DB7093', '#F08080', '#CD5C5C'],
    'Eyeliner': ['#000000', '#2F4F4F', '#8B4513', '#4B0082', '#000080'],
    'Eyeshadow': ['#D3D3D3', '#F5F5DC', '#DAA520', '#A0522D', '#556B2F', '#483D8B'],
  };

  const handleSelect = (color: string) => {
    setSelectedColor(color);
    onChange();
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-2">
      
      {/* Horizontal Category Tabs */}
      <div className="flex border-b border-[#1A2E44]">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedColor(null);
            }}
            className={cn(
              "px-4 py-3 text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer flex-1 text-center",
              activeCategory === cat 
                ? "border-[#F5F7FA] text-[#F5F7FA]" 
                : "border-transparent text-[#A8B4C3] hover:text-[#F5F7FA]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Shade Selection */}
      <div>
        <h3 className="text-[#F5F7FA] font-bold text-lg mb-4">Select Shade</h3>
        <div className="flex flex-wrap gap-4">
          {mockColors[activeCategory]?.map((colorHex, idx) => {
            const isSelected = selectedColor === colorHex;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(colorHex)}
                className={cn(
                  "w-12 h-12 rounded-full cursor-pointer transition-all flex items-center justify-center relative",
                  isSelected ? "scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]" : "hover:scale-105"
                )}
                style={{ backgroundColor: colorHex }}
              >
                {isSelected && (
                  <div className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="p-6 bg-[#071625] rounded-2xl border border-[#1A2E44]">
        <p className="text-sm text-[#A8B4C3] mb-2">Selected Product</p>
        <h4 className="text-lg font-bold text-[#F5F7FA]">
          {selectedColor ? `Premium ${activeCategory} Variant` : `Select a ${activeCategory.toLowerCase()} shade`}
        </h4>
      </div>

    </div>
  );
};
