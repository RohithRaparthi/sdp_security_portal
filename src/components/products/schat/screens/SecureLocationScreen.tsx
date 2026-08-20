import React from 'react';
import { ArrowLeft, MapPin, StopCircle, Navigation } from 'lucide-react';

export const SecureLocationScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="absolute top-0 inset-x-0 pt-2 pb-3 px-4 bg-gradient-to-b from-black/80 to-transparent z-20 flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#F5F7FA] drop-shadow-md" />
        <span className="font-bold text-[#F5F7FA] drop-shadow-md">Live Location</span>
      </div>

      {/* Mock Map Background */}
      <div className="flex-1 relative bg-[#0B1528] overflow-hidden">
        {/* SVG Grid / Map representation */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'radial-gradient(#1A2E44 1px, transparent 1px)', 
          backgroundSize: '20px 20px' 
        }}></div>
        
        {/* Radar effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#8CC63F]/20 bg-[#8CC63F]/5">
          <div className="absolute inset-0 rounded-full border border-[#8CC63F]/40 animate-ping" style={{ animationDuration: '4s' }}></div>
        </div>

        {/* User Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="bg-[#8CC63F] p-1.5 rounded-full shadow-[0_0_15px_rgba(140,198,63,0.6)]">
            <MapPin size={16} className="text-[#020712] fill-current" />
          </div>
          <div className="w-1.5 h-1.5 bg-[#8CC63F]/50 rounded-full mt-1"></div>
        </div>
      </div>

      {/* Bottom Control Panel */}
      <div className="bg-[#07101C] border-t border-[#1A2E44] rounded-t-3xl p-5 -mt-6 z-20 relative">
        <div className="w-10 h-1 bg-[#1A2E44] rounded-full mx-auto mb-4"></div>
        
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8CC63F] to-[#4D7C0F] p-0.5">
              <div className="w-full h-full rounded-full bg-[#05101A] flex items-center justify-center text-xs font-bold text-[#F5F7FA]">
                JD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#F5F7FA]">Sharing with Jane Doe</span>
              <span className="text-[10px] text-[#A8B4C3]">Updated just now</span>
            </div>
          </div>
          
          <button className="w-10 h-10 rounded-full bg-[#1A2E44] flex items-center justify-center text-[#F5F7FA]">
            <Navigation size={16} />
          </button>
        </div>

        <div className="flex items-center justify-between px-3 py-2.5 bg-[#020712] border border-[#1A2E44] rounded-xl mb-4">
          <span className="text-xs text-[#A8B4C3]">Duration</span>
          <span className="text-xs font-bold text-[#8CC63F]">Ends in 45m</span>
        </div>

        <button className="w-full py-3.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center gap-2 text-red-500 text-xs font-bold transition-colors">
          <StopCircle size={16} />
          Stop Sharing
        </button>
      </div>

    </div>
  );
};
