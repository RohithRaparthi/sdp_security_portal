import React from 'react';
import { ArrowLeft, ShieldCheck, Smartphone, Activity, AlertTriangle, RefreshCw } from 'lucide-react';

export const DeviceSecurityScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#A8B4C3]" />
        <span className="font-bold text-[#F5F7FA]">Device Security</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {/* Status Card */}
        <div className="bg-gradient-to-br from-[#082F16] to-[#020712] rounded-3xl p-5 border border-[#8CC63F]/30 shadow-[0_0_30px_rgba(140,198,63,0.1)] flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#8CC63F]/10 flex items-center justify-center mb-3 relative">
            <ShieldCheck size={32} className="text-[#8CC63F]" />
            <div className="absolute inset-0 rounded-full border border-[#8CC63F]/50 animate-ping" style={{ animationDuration: '3s' }}></div>
          </div>
          <h2 className="text-xl font-black text-[#F5F7FA] tracking-tight mb-1">PROTECTED</h2>
          <p className="text-[10px] text-[#8CC63F] font-mono mb-4">No suspicious activity detected</p>
          
          <button className="w-full py-3 bg-[#071625] hover:bg-[#1A2E44] border border-[#1A2E44] rounded-xl flex items-center justify-center gap-2 text-[#F5F7FA] text-xs font-bold transition-colors">
            <RefreshCw size={14} className="text-[#8CC63F]" />
            Run Security Check
          </button>
        </div>

        {/* Security Checklist */}
        <div className="bg-[#071625] border border-[#1A2E44] rounded-2xl overflow-hidden">
          
          <div className="p-3 border-b border-[#1A2E44] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone size={14} className="text-[#A8B4C3]" />
              <span className="text-[11px] text-[#F5F7FA]">OS Integrity Verified</span>
            </div>
            <ShieldCheck size={14} className="text-[#8CC63F]" />
          </div>

          <div className="p-3 border-b border-[#1A2E44] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity size={14} className="text-[#A8B4C3]" />
              <span className="text-[11px] text-[#F5F7FA]">App Permissions Locked</span>
            </div>
            <ShieldCheck size={14} className="text-[#8CC63F]" />
          </div>

        </div>

        {/* Example Alert (Mocked as if recently resolved or just for demo) */}
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-start gap-3">
          <AlertTriangle size={18} className="text-yellow-500 shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-yellow-500 mb-1">Potential Security Risk</span>
            <span className="text-[10px] text-[#A8B4C3] leading-relaxed">
              Third-party keyboard extension detected. For maximum security, we recommend using the default system keyboard while using S-Chat.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
