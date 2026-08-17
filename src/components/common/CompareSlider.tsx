import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, Shirt } from 'lucide-react';

interface CompareSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export const CompareSlider: React.FC<CompareSliderProps> = ({
  beforeLabel = 'Original Silhouette',
  afterLabel = 'Neural Diffusion Styled',
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPos(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onClick={(e) => handleMove(e.clientX)}
      className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#A855F7]/30 bg-[#05101A] select-none cursor-ew-resize shadow-2xl"
    >
      {/* After Image View (Underneath Layer - Styled) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E1035] via-[#0B1528] to-[#020712] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-48 h-64 rounded-xl border border-[#A855F7]/40 bg-[#071625]/90 flex flex-col items-center justify-center relative shadow-[0_0_40px_rgba(168,85,247,0.25)] p-4">
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#A855F7]/20 border border-[#A855F7]/40 text-[9px] font-mono text-[#A855F7] font-bold">
            STYLED 99.4%
          </div>
          <Shirt className="w-24 h-24 text-[#A855F7] mb-3 animate-pulse" />
          <span className="text-xs font-bold text-[#F5F7FA]">Italian Midnight Blazer</span>
          <span className="text-[10px] text-[#A8B4C3]">Deep Amethyst Velvet</span>
        </div>
        <span className="absolute bottom-4 right-4 text-xs font-mono font-bold text-[#A855F7] bg-[#020712]/80 px-3 py-1 rounded-md border border-[#A855F7]/30">
          {afterLabel} &rarr;
        </span>
      </div>

      {/* Before Image View (Top Clipped Layer - Wireframe/Original) */}
      <div 
        className="absolute inset-0 bg-[#020712] border-r border-[#00D9FF] flex flex-col items-center justify-center p-6 text-center overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="w-48 h-64 rounded-xl border border-[#1A2E44] bg-[#030B16] flex flex-col items-center justify-center relative p-4 shrink-0">
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono text-[#A8B4C3]">
            RAW INPUT
          </div>
          {/* Wireframe Silhouette Icon */}
          <svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" className="text-[#A8B4C3]/60 mb-3">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span className="text-xs font-bold text-[#A8B4C3]">Unstyled Casual</span>
          <span className="text-[10px] text-[#667789]">Basic Cotton Layer</span>
        </div>
        <span className="absolute bottom-4 left-4 text-xs font-mono font-bold text-[#00D9FF] bg-[#020712]/80 px-3 py-1 rounded-md border border-[#00D9FF]/30 whitespace-nowrap">
          &larr; {beforeLabel}
        </span>
      </div>

      {/* Slider Divider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D9FF] via-white to-[#A855F7] shadow-[0_0_15px_#00D9FF] pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#020712] border-2 border-white flex items-center justify-center shadow-lg text-white text-xs font-bold">
          <Sparkles size={14} className="text-[#00D9FF]" />
        </div>
      </div>

    </div>
  );
};
