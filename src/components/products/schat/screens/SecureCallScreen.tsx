import React from 'react';
import { MicOff, PhoneOff, Volume2, Lock } from 'lucide-react';

export const SecureCallScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#020712] animate-in fade-in duration-300 relative">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#082F16]/40 via-[#020712] to-[#020712] pointer-events-none" />

      {/* Top Header */}
      <div className="relative pt-6 pb-2 px-4 flex justify-between items-center z-10">
        <div className="w-8" />
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-full">
          <Lock size={10} className="text-[#8CC63F]" />
          <span className="text-[10px] text-[#8CC63F] font-bold tracking-wider">END-TO-END ENCRYPTED</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Profile Section */}
      <div className="relative flex-1 flex flex-col items-center justify-center -mt-10 z-10">
        
        {/* Pulsing Avatar */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-[#8CC63F]/20 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-2 rounded-full bg-[#8CC63F]/30 animate-ping" style={{ animationDuration: '2s' }}></div>
          
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#8CC63F] to-[#4D7C0F] p-1 shadow-[0_0_30px_rgba(140,198,63,0.3)]">
            <div className="w-full h-full rounded-full bg-[#05101A] flex items-center justify-center text-3xl font-black text-[#F5F7FA]">
              JD
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-black text-[#F5F7FA] tracking-tight mb-1">Jane Doe</h2>
        <span className="text-sm text-[#A8B4C3] font-mono">14:02</span>
      </div>

      {/* Call Controls */}
      <div className="relative p-8 pb-12 z-10">
        <div className="flex justify-between items-center px-4">
          <button className="w-14 h-14 rounded-full bg-[#1A2E44] flex items-center justify-center text-[#F5F7FA] hover:bg-[#2A415C] transition-colors">
            <MicOff size={24} />
          </button>
          
          <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105 transition-transform">
            <PhoneOff size={28} />
          </button>
          
          <button className="w-14 h-14 rounded-full bg-[#1A2E44] flex items-center justify-center text-[#F5F7FA] hover:bg-[#2A415C] transition-colors">
            <Volume2 size={24} />
          </button>
        </div>
      </div>

    </div>
  );
};
