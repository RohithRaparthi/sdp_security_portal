import React from 'react';
import { ArrowLeft, Palette, Layout, Music, CheckCircle2 } from 'lucide-react';

export const PersonalizationScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#A8B4C3]" />
        <span className="font-bold text-[#F5F7FA]">Personalization</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-5">
        
        {/* Accent Color */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#F5F7FA]">
            <Palette size={16} />
            <span className="text-xs font-bold">Accent Color</span>
          </div>
          <div className="flex justify-between px-2">
            <button className="w-8 h-8 rounded-full bg-[#8CC63F] ring-2 ring-[#8CC63F] ring-offset-2 ring-offset-[#050A14] relative flex items-center justify-center">
              <CheckCircle2 size={14} className="text-[#050A14]" />
            </button>
            <button className="w-8 h-8 rounded-full bg-[#00D9FF] hover:scale-110 transition-transform"></button>
            <button className="w-8 h-8 rounded-full bg-[#A855F7] hover:scale-110 transition-transform"></button>
            <button className="w-8 h-8 rounded-full bg-[#FBBF24] hover:scale-110 transition-transform"></button>
            <button className="w-8 h-8 rounded-full bg-[#EF4444] hover:scale-110 transition-transform"></button>
          </div>
        </div>

        <div className="w-full h-px bg-[#1A2E44]"></div>

        {/* App Icon */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#F5F7FA]">
            <Layout size={16} />
            <span className="text-xs font-bold">App Icon (Disguise Mode)</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-2xl bg-[#020712] border-2 border-[#8CC63F] flex items-center justify-center shadow-[0_0_15px_rgba(140,198,63,0.2)]">
                <span className="text-lg font-black text-[#8CC63F]">S</span>
              </div>
              <span className="text-[9px] text-[#F5F7FA] font-bold">Default</span>
            </div>
            
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-gray-300"></div>
              </div>
              <span className="text-[9px] text-[#A8B4C3]">Calculator</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500 border border-blue-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">W</span>
              </div>
              <span className="text-[9px] text-[#A8B4C3]">Weather</span>
            </div>

            <div className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-2xl bg-black border border-gray-800 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded-full"></div>
              </div>
              <span className="text-[9px] text-[#A8B4C3]">Stealth</span>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#1A2E44]"></div>

        {/* Ringtone */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-[#F5F7FA]">
            <Music size={16} />
            <span className="text-xs font-bold">Notifications</span>
          </div>
          <div className="bg-[#071625] rounded-xl border border-[#1A2E44] overflow-hidden">
            <div className="p-3 flex items-center justify-between border-b border-[#1A2E44]">
              <span className="text-xs text-[#F5F7FA]">Secure Ringtone</span>
              <span className="text-[10px] text-[#8CC63F] font-bold">Sonar (Default)</span>
            </div>
            <div className="p-3 flex items-center justify-between">
              <span className="text-xs text-[#F5F7FA]">Vibration Pattern</span>
              <span className="text-[10px] text-[#A8B4C3]">Heartbeat</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
