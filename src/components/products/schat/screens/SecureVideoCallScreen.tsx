import React from 'react';
import { MicOff, PhoneOff, VideoOff, Lock } from 'lucide-react';

export const SecureVideoCallScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#000000] animate-in fade-in duration-300 relative">
      
      {/* Mock Video Background (Jane Doe) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E44] to-[#07101C]">
        {/* Simulating a blurry background/person */}
        <div className="absolute top-[20%] left-[20%] w-[60%] h-[50%] bg-[#8CC63F]/5 rounded-[100px] blur-[40px]"></div>
      </div>

      {/* Picture-in-Picture (Self) */}
      <div className="absolute top-10 right-4 w-20 h-32 bg-[#020712] border border-[#1A2E44] rounded-xl shadow-xl overflow-hidden z-20">
        <div className="w-full h-full bg-gradient-to-t from-[#0A101D] to-[#1A2E44]"></div>
      </div>

      {/* Top Header */}
      <div className="relative pt-6 pb-2 px-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent">
        <div className="w-8" />
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-full backdrop-blur-md">
          <Lock size={10} className="text-[#8CC63F]" />
          <span className="text-[10px] text-[#8CC63F] font-bold tracking-wider">E2E ENCRYPTED</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Bottom Controls Area */}
      <div className="absolute bottom-0 inset-x-0 p-8 pb-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 flex flex-col items-center">
        
        <span className="text-[#F5F7FA] font-bold mb-1">Jane Doe</span>
        <span className="text-xs text-[#A8B4C3] font-mono mb-6">14:02</span>

        <div className="flex justify-between items-center w-full px-2">
          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F5F7FA] hover:bg-white/20 transition-colors">
            <MicOff size={20} />
          </button>
          
          <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:scale-105 transition-transform">
            <PhoneOff size={28} />
          </button>
          
          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#F5F7FA] hover:bg-white/20 transition-colors">
            <VideoOff size={20} />
          </button>
        </div>
      </div>

    </div>
  );
};
