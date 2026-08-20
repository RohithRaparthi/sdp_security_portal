import React from 'react';
import { cn } from '../../../utils/cn';
import { type ExperienceMode } from './types';
import { Shirt, Sparkles, Scissors, Layers } from 'lucide-react';

interface ExperienceSelectorProps {
  activeMode: ExperienceMode;
  onSelect: (mode: ExperienceMode) => void;
}

export const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({ activeMode, onSelect }) => {
  const modes: { id: ExperienceMode; label: string; icon: React.ReactNode }[] = [
    { id: 'fashion', label: 'Fashion', icon: <Shirt size={16} /> },
    { id: 'beauty', label: 'Beauty', icon: <Sparkles size={16} /> },
    { id: 'hairstyle', label: 'Hairstyle', icon: <Scissors size={16} /> },
    { id: 'complete', label: 'Complete Look', icon: <Layers size={16} /> },
  ];

  return (
    <div className="flex overflow-x-auto no-scrollbar gap-2 mb-6 pb-2 border-b border-[#1A2E44]">
      {modes.map((mode) => {
        const isActive = activeMode === mode.id;
        return (
          <button
            key={mode.id}
            onClick={() => onSelect(mode.id)}
            className={cn(
              "flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide transition-all shrink-0 cursor-pointer",
              isActive 
                ? "bg-[#F5F7FA] text-[#020712] shadow-[0_4px_15px_rgba(255,255,255,0.15)]" 
                : "text-[#A8B4C3] hover:bg-[#071625] hover:text-[#F5F7FA]"
            )}
          >
            <span className={cn(isActive ? "text-[#A855F7]" : "opacity-70")}>
              {mode.icon}
            </span>
            {mode.label}
          </button>
        );
      })}
    </div>
  );
};
