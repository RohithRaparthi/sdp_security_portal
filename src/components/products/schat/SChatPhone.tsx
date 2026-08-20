import React from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SChatPhoneProps {
  children: React.ReactNode;
  className?: string;
}

export const SChatPhone: React.FC<SChatPhoneProps> = ({ children, className }) => {
  return (
    <div className={cn("relative mx-auto w-full max-w-[290px] sm:max-w-[340px] aspect-[9/19] bg-[#0A101D] rounded-[3rem] sm:rounded-[3.5rem] p-2.5 shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_40px_rgba(140,198,63,0.15)] border-2 border-[#1A2E44] ring-4 ring-[#020712]", className)}>
      {/* Hardware Buttons */}
      <div className="absolute top-[120px] -left-[14px] w-1.5 h-12 bg-[#1A2E44] rounded-l-md"></div>
      <div className="absolute top-[180px] -left-[14px] w-1.5 h-12 bg-[#1A2E44] rounded-l-md"></div>
      <div className="absolute top-[140px] -right-[14px] w-1.5 h-16 bg-[#1A2E44] rounded-r-md"></div>
      
      {/* Screen Base */}
      <div className="relative w-full h-full bg-[#030811] rounded-[2.8rem] overflow-hidden flex flex-col border border-white/5">
        
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2 inset-x-0 h-7 flex justify-center z-50 pointer-events-none">
          <div className="w-24 h-7 bg-[#000000] rounded-full flex items-center justify-end px-3">
             <div className="w-2 h-2 rounded-full bg-blue-500/20 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-12 w-full flex items-center justify-between px-6 pt-1 text-[#F5F7FA] z-40 text-[11px] font-medium tracking-wide bg-gradient-to-b from-black/40 to-transparent">
          <span className="ml-1">9:41</span>
          <div className="flex items-center gap-1.5 mr-1">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={14} className="text-[#F5F7FA]" />
          </div>
        </div>

        {/* Screen Content Wrapper */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-[#050A14]">
          {children}
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 w-full flex justify-center items-center z-50 pointer-events-none">
          <div className="w-1/3 h-1 bg-[#F5F7FA]/40 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
