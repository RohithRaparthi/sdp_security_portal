import React from 'react';
import { ArrowLeft, Siren, Phone, ShieldAlert, MapPin } from 'lucide-react';

export const EmergencyHelpScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#1A0B0B] border-b border-red-900/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeft size={18} className="text-red-400" />
          <span className="font-bold text-red-400">Emergency Protocol</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col">
        
        {/* Panic Button Area */}
        <div className="flex-1 flex flex-col items-center justify-center py-6">
          <button className="w-28 h-28 rounded-full bg-red-600 border-4 border-red-500/30 flex flex-col items-center justify-center text-white shadow-[0_0_40px_rgba(220,38,38,0.3)] hover:scale-95 active:scale-90 transition-transform mb-6">
            <Siren size={32} className="mb-1" />
            <span className="text-[10px] font-bold uppercase tracking-widest">SOS</span>
          </button>
          
          <p className="text-[10px] text-center text-[#A8B4C3] max-w-[220px]">
            Activating SOS will immediately ping your Trusted Contacts with your live location.
          </p>
        </div>

        {/* Trusted Contacts */}
        <div className="bg-[#07101C] border border-[#1A2E44] rounded-2xl p-4 mt-auto">
          <div className="flex items-center gap-2 mb-4 text-[#F5F7FA]">
            <ShieldAlert size={14} className="text-red-400" />
            <span className="text-xs font-bold">Trusted Contacts</span>
          </div>

          <div className="space-y-3">
            
            <div className="flex items-center justify-between p-3 bg-[#050A14] border border-[#1A2E44] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A2E44] to-[#020712] flex items-center justify-center text-[10px] font-bold text-[#F5F7FA]">
                  JS
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#F5F7FA]">John Smith</span>
                  <span className="text-[9px] text-[#A8B4C3]">Brother</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-7 h-7 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                  <MapPin size={12} />
                </button>
                <button className="w-7 h-7 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                  <Phone size={12} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-[#050A14] border border-[#1A2E44] rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A2E44] to-[#020712] flex items-center justify-center text-[10px] font-bold text-[#F5F7FA]">
                  ES
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold text-[#F5F7FA]">Emma Smith</span>
                  <span className="text-[9px] text-[#A8B4C3]">Partner</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-7 h-7 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                  <MapPin size={12} />
                </button>
                <button className="w-7 h-7 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center">
                  <Phone size={12} />
                </button>
              </div>
            </div>

          </div>
          
          <button className="w-full mt-3 py-2 border border-dashed border-[#1A2E44] rounded-lg text-[10px] text-[#A8B4C3] hover:text-[#F5F7FA] hover:border-[#F5F7FA] transition-colors">
            + Add Contact
          </button>
        </div>

      </div>
    </div>
  );
};
