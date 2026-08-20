import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';
import { Check, CheckCircle2 } from 'lucide-react';

interface CompleteLookExperienceProps {
  onGenerate: () => void;
}

export const CompleteLookExperience: React.FC<CompleteLookExperienceProps> = ({ onGenerate }) => {
  const [selectedAcc, setSelectedAcc] = useState<string[]>([]);
  
  const accessories = ['Earrings', 'Necklace', 'Bag', 'Glasses', 'Watch'];

  const toggleAcc = (acc: string) => {
    setSelectedAcc(prev => 
      prev.includes(acc) ? prev.filter(a => a !== acc) : [...prev, acc]
    );
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-2">
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#F5F7FA] mb-2">Build Your Complete Look</h3>
        <p className="text-sm text-[#A8B4C3] leading-relaxed">
          Combine your selected clothing, makeup, hairstyle, and accessories into one unified personalized style.
        </p>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex items-center justify-between p-4 bg-[#071625] rounded-xl border border-[#1A2E44]">
          <span className="text-[#F5F7FA] font-bold">Clothing</span>
          <CheckCircle2 size={18} className="text-[#8CC63F]" />
        </div>
        <div className="flex items-center justify-between p-4 bg-[#071625] rounded-xl border border-[#1A2E44]">
          <span className="text-[#F5F7FA] font-bold">Makeup</span>
          <CheckCircle2 size={18} className="text-[#8CC63F]" />
        </div>
        <div className="flex items-center justify-between p-4 bg-[#071625] rounded-xl border border-[#1A2E44]">
          <span className="text-[#F5F7FA] font-bold">Hairstyle</span>
          <CheckCircle2 size={18} className="text-[#8CC63F]" />
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-sm font-bold text-[#F5F7FA] mb-4 uppercase tracking-wider">Add Accessories</h4>
        <div className="flex flex-wrap gap-3">
          {accessories.map(acc => {
            const isSelected = selectedAcc.includes(acc);
            return (
              <button
                key={acc}
                onClick={() => toggleAcc(acc)}
                className={cn(
                  "px-4 py-2 text-sm font-bold rounded-lg border transition-all flex items-center gap-2 cursor-pointer",
                  isSelected
                    ? "bg-[#F5F7FA] text-[#020712] border-[#F5F7FA]"
                    : "bg-[#020712] text-[#A8B4C3] border-[#1A2E44] hover:border-[#A8B4C3]"
                )}
              >
                {isSelected && <Check size={14} />}
                {acc}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-auto">
        <button 
          onClick={onGenerate}
          className="w-full py-4 bg-[#F5F7FA] hover:bg-[#A855F7] hover:text-white text-[#020712] font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center cursor-pointer"
        >
          Generate Complete Look
        </button>
      </div>

    </div>
  );
};
