import React from 'react';
import { ArrowLeft, Smartphone, ArrowRight, Shield, CheckCircle2, Loader2 } from 'lucide-react';

export const ChatTransferScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#A8B4C3]" />
        <span className="font-bold text-[#F5F7FA]">Device Transfer</span>
      </div>

      <div className="flex-1 overflow-y-auto p-5 flex flex-col items-center">
        
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold text-[#F5F7FA] mb-1">Transfer Chat History</h2>
          <p className="text-[10px] text-[#A8B4C3] leading-relaxed max-w-[200px] mx-auto">
            Securely migrate your keys and history directly to your new device via local Wi-Fi.
          </p>
        </div>

        {/* Visualizer */}
        <div className="flex items-center justify-center w-full gap-2 mb-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-16 bg-[#071625] border border-[#1A2E44] rounded-xl flex items-center justify-center shadow-lg">
              <Smartphone size={20} className="text-[#A8B4C3]" />
            </div>
            <span className="text-[9px] text-[#A8B4C3]">Old Device</span>
          </div>
          
          <div className="flex flex-col items-center justify-center w-16">
            <div className="flex items-center w-full overflow-hidden">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#8CC63F] to-transparent relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-[#8CC63F] shadow-[0_0_5px_#8CC63F] animate-[slide-right_1.5s_linear_infinite]" 
                     style={{ animationName: 'transfer-slide' }}></div>
              </div>
            </div>
            <ArrowRight size={12} className="text-[#8CC63F] mt-1" />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-16 bg-[#071625] border-2 border-[#8CC63F] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(140,198,63,0.2)]">
              <Smartphone size={20} className="text-[#8CC63F]" />
            </div>
            <span className="text-[9px] text-[#8CC63F] font-bold">New Device</span>
          </div>
        </div>

        {/* Transfer Status Steps */}
        <div className="w-full space-y-4">
          
          <div className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#F5F7FA]">Devices Connected</span>
              <span className="text-[9px] text-[#A8B4C3]">Direct encrypted P2P tunnel established</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[11px] font-bold text-[#F5F7FA]">Verifying Keys</span>
              <span className="text-[9px] text-[#A8B4C3]">Identity confirmed via QR exchange</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Loader2 size={16} className="text-[#00D9FF] shrink-0 animate-spin" />
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] font-bold text-[#00D9FF]">Transferring Data</span>
                <span className="text-[9px] text-[#00D9FF]">68%</span>
              </div>
              <div className="w-full h-1 bg-[#1A2E44] rounded-full overflow-hidden">
                <div className="w-[68%] h-full bg-[#00D9FF] rounded-full"></div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div className="p-4 border-t border-[#1A2E44] bg-[#07101C]">
        <div className="p-3 rounded-xl bg-[#071625] border border-[#8CC63F]/20 flex items-start gap-2">
          <Shield size={14} className="text-[#8CC63F] shrink-0 mt-0.5" />
          <p className="text-[9px] text-[#A8B4C3] leading-relaxed">
            S-Chat never uploads your chat history to the cloud. This local transfer is the only way to migrate your data.
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes transfer-slide {
          0% { transform: translate(-10px, -50%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(50px, -50%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
