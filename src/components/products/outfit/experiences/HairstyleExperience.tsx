import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';

interface HairstyleExperienceProps {
  onChange: () => void;
}

export const HairstyleExperience: React.FC<HairstyleExperienceProps> = ({ onChange }) => {
  const categories = ['Haircuts', 'Hairstyles', 'Hair Colors', 'Beards', 'Moustaches'];
  const [activeCategory, setActiveCategory] = useState('Haircuts');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState('#2C1B18');

  const mockStyles: Record<string, string[]> = {
    'Haircuts': ['Short Bob', 'Pixie Cut', 'Layered', 'Fade', 'Buzz Cut', 'Crew Cut'],
    'Hairstyles': ['Long Waves', 'Straight', 'Curly', 'Ponytail', 'Messy Bun'],
    'Hair Colors': [], // Handled separately below
    'Beards': ['Stubble', 'Full Beard', 'Goatee', 'Van Dyke', 'Chinstrap'],
    'Moustaches': ['Chevron', 'Handlebar', 'Pencil', 'Walrus']
  };

  const hairColors = ['#090806', '#2C1B18', '#71635A', '#B89778', '#D6C4C2', '#8D4A43'];

  const handleSelect = (style: string) => {
    setSelectedStyle(style);
    onChange();
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2">
      
      <div className="flex flex-wrap gap-2 mb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedStyle(null);
            }}
            className={cn(
              "px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer",
              activeCategory === cat 
                ? "bg-[#020712] border-[#F5F7FA] text-[#F5F7FA]" 
                : "bg-transparent border-[#1A2E44] text-[#A8B4C3] hover:border-[#A8B4C3]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {activeCategory === 'Hair Colors' ? (
        <div>
          <h3 className="text-[#F5F7FA] font-bold text-lg mb-4">Select Hair Color</h3>
          <div className="flex flex-wrap gap-4">
            {hairColors.map((colorHex, idx) => {
              const isSelected = selectedColor === colorHex;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedColor(colorHex);
                    onChange();
                  }}
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
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {mockStyles[activeCategory]?.map(style => {
            const isSelected = selectedStyle === style;
            return (
              <div 
                key={style}
                onClick={() => handleSelect(style)}
                className={cn(
                  "p-4 rounded-xl border transition-all cursor-pointer text-center",
                  isSelected 
                    ? "bg-[#F5F7FA] border-[#F5F7FA] text-[#020712] shadow-lg" 
                    : "bg-[#071625] border-[#1A2E44] text-[#A8B4C3] hover:text-[#F5F7FA] hover:border-[#A8B4C3]"
                )}
              >
                <span className="font-bold text-sm">{style}</span>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
