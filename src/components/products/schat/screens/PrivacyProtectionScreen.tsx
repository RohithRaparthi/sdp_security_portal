import React from 'react';
import { ArrowLeft, ShieldAlert, MonitorOff, CameraOff, AlertTriangle } from 'lucide-react';

export const PrivacyProtectionScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#A8B4C3]" />
        <span className="font-bold text-[#F5F7FA]">Privacy Protection</span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#8CC63F]/10 flex items-center justify-center border border-[#8CC63F]/30">
            <ShieldAlert size={20} className="text-[#8CC63F]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#F5F7FA]">Screen Security</span>
            <span className="text-[10px] text-[#A8B4C3]">Prevent unauthorized captures</span>
          </div>
        </div>

        <div className="space-y-4">
          
          {/* Screenshot Restriction */}
          <div className="p-4 bg-[#071625] border border-[#1A2E44] rounded-2xl flex items-start justify-between">
            <div className="flex gap-3">
              <CameraOff size={18} className="text-[#F5F7FA] mt-0.5" />
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-xs font-bold text-[#F5F7FA]">Block Screenshots</span>
                <span className="text-[10px] text-[#A8B4C3] leading-relaxed">
                  Prevents participants from taking screenshots of this chat. S-Chat will display a black screen if captured.
                </span>
              </div>
            </div>
            <div className="w-9 h-5 bg-[#8CC63F] rounded-full relative shrink-0">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-[#020712] shadow-sm"></div>
            </div>
          </div>

          {/* Screen Recording Restriction */}
          <div className="p-4 bg-[#071625] border border-[#8CC63F]/40 rounded-2xl flex items-start justify-between shadow-[0_0_15px_rgba(140,198,63,0.1)]">
            <div className="flex gap-3">
              <MonitorOff size={18} className="text-[#8CC63F] mt-0.5" />
              <div className="flex flex-col gap-1 pr-4">
                <span className="text-xs font-bold text-[#8CC63F]">Block Screen Recording</span>
                <span className="text-[10px] text-[#A8B4C3] leading-relaxed">
                  Instantly terminates secure connections if iOS/Android screen recording APIs are activated.
                </span>
              </div>
            </div>
            <div className="w-9 h-5 bg-[#8CC63F] rounded-full relative shrink-0">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-[#020712] shadow-sm"></div>
            </div>
          </div>

        </div>

        {/* Info Box */}
        <div className="mt-6 p-3 bg-[#07101C] rounded-xl border border-yellow-500/20 flex items-start gap-2">
          <AlertTriangle size={14} className="text-yellow-500 shrink-0 mt-0.5" />
          <p className="text-[9px] text-[#A8B4C3] leading-relaxed">
            Note: While these protections block native OS capture methods, they cannot prevent someone from photographing their screen with another physical device.
          </p>
        </div>
      </div>
      
    </div>
  );
};
