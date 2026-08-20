import React from 'react';
import { cn } from '../../../utils/cn';
import schatLogo from '../../../assets/schat-logo.jpg';

interface SChatLogoProps {
  className?: string;
}

export const SChatLogo: React.FC<SChatLogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img src={schatLogo} alt="S-Chat Logo" className="w-14 h-14 rounded-xl object-cover shadow-[0_0_15px_rgba(140,198,63,0.15)]" />
      <div className="flex flex-col">
        <span className="text-[#F5F7FA] font-black text-2xl leading-none tracking-tight">
          S<span className="text-[#8CC63F]">-CHAT</span>
        </span>
        <span className="text-[#A8B4C3] text-[10px] leading-tight font-mono tracking-wider mt-1">
          Secure Today &ndash; Safe Tomorrow
        </span>
      </div>
    </div>
  );
};
