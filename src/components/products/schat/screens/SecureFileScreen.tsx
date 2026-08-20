import React from 'react';
import { ArrowLeft, FileText, Lock, Download, Share, Eye, EyeOff, FileClock, ShieldAlert } from 'lucide-react';

export const SecureFileScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#A8B4C3]" />
        <span className="font-bold text-[#F5F7FA]">File Details</span>
      </div>

      {/* File Preview Card */}
      <div className="p-5 flex flex-col items-center border-b border-[#1A2E44] bg-gradient-to-b from-[#082F16]/20 to-transparent">
        <div className="w-16 h-16 rounded-2xl bg-[#071625] border border-[#8CC63F]/30 flex items-center justify-center mb-4 relative shadow-[0_0_20px_rgba(140,198,63,0.1)]">
          <FileText size={28} className="text-[#8CC63F]" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#8CC63F] flex items-center justify-center border-2 border-[#050A14]">
            <Lock size={10} className="text-[#050A14] fill-current" />
          </div>
        </div>
        <h3 className="text-sm font-bold text-[#F5F7FA] mb-1 text-center">Project_Q3_Financials_Confidential.pdf</h3>
        <p className="text-[10px] text-[#A8B4C3] font-mono mb-3">4.2 MB &bull; PDF Document</p>
        
        <div className="px-3 py-1 bg-[#8CC63F]/10 border border-[#8CC63F]/20 rounded-full flex items-center gap-1.5">
          <ShieldAlert size={10} className="text-[#8CC63F]" />
          <span className="text-[9px] text-[#8CC63F] font-bold tracking-wider">E2E ENCRYPTED &bull; RESTRICTED</span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 space-y-3">
        <button className="w-full flex items-center gap-3 p-3.5 bg-[#1A2E44] rounded-xl hover:bg-[#2A415C] transition-colors">
          <Eye size={18} className="text-[#F5F7FA]" />
          <span className="text-xs font-bold text-[#F5F7FA]">View File</span>
        </button>
        
        <button className="w-full flex items-center justify-between p-3.5 bg-[#071625] border border-[#8CC63F]/20 rounded-xl">
          <div className="flex items-center gap-3">
            <EyeOff size={18} className="text-[#8CC63F]" />
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#8CC63F]">One-Time View</span>
              <span className="text-[10px] text-[#A8B4C3]">Self-destructs after opening</span>
            </div>
          </div>
          <div className="w-8 h-4 bg-[#8CC63F]/20 rounded-full relative">
            <div className="absolute right-0 top-0 w-4 h-4 rounded-full bg-[#8CC63F]"></div>
          </div>
        </button>

        <div className="flex gap-3">
          <button className="flex-1 flex flex-col items-center justify-center gap-1 p-3 bg-[#07101C] border border-[#1A2E44] rounded-xl text-[#A8B4C3] hover:text-[#F5F7FA]">
            <Download size={18} />
            <span className="text-[10px] font-bold">Download</span>
          </button>
          <button className="flex-1 flex flex-col items-center justify-center gap-1 p-3 bg-[#07101C] border border-[#1A2E44] rounded-xl text-[#A8B4C3] hover:text-[#F5F7FA]">
            <Share size={18} />
            <span className="text-[10px] font-bold">Share</span>
          </button>
        </div>
      </div>

      {/* Logs Preview */}
      <div className="mt-2 px-4 pb-4 flex-1">
        <h4 className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <FileClock size={12} />
          Shared File Logs
        </h4>
        <div className="bg-[#07101C] rounded-xl border border-[#1A2E44] p-3 space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#F5F7FA] font-medium">Downloaded by Jane Doe</span>
              <span className="text-[9px] text-[#667789]">IP: 192.168.1.42</span>
            </div>
            <span className="text-[9px] text-[#667789] font-mono">10:45 AM</span>
          </div>
          <div className="w-full h-px bg-[#1A2E44]"></div>
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#F5F7FA] font-medium">Shared via Encrypted Link</span>
              <span className="text-[9px] text-[#667789]">Access: View Only</span>
            </div>
            <span className="text-[9px] text-[#667789] font-mono">10:41 AM</span>
          </div>
        </div>
      </div>

    </div>
  );
};
