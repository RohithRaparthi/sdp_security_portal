import React from 'react';
import { ArrowLeft, Clock, Bell, Flame, CalendarClock, Trash2 } from 'lucide-react';

export const SmartMessagingScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center gap-3">
        <ArrowLeft size={18} className="text-[#A8B4C3]" />
        <span className="font-bold text-[#F5F7FA]">Smart Messaging</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
        {/* Expiring Messages */}
        <div className="p-4 bg-[#071625] border border-[#1A2E44] rounded-2xl">
          <div className="flex items-center gap-3 mb-4 border-b border-[#1A2E44] pb-3">
            <Flame size={18} className="text-orange-500" />
            <span className="text-xs font-bold text-[#F5F7FA]">Self-Destruct Timer</span>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mb-3">
            <div className="p-2 rounded-lg border border-[#1A2E44] bg-[#020712] text-center text-[10px] text-[#A8B4C3]">Off</div>
            <div className="p-2 rounded-lg border border-orange-500/40 bg-orange-500/10 text-center text-[10px] font-bold text-orange-500">1 hr</div>
            <div className="p-2 rounded-lg border border-[#1A2E44] bg-[#020712] text-center text-[10px] text-[#A8B4C3]">12 hr</div>
            <div className="p-2 rounded-lg border border-[#1A2E44] bg-[#020712] text-center text-[10px] text-[#A8B4C3]">24 hr</div>
          </div>
          <p className="text-[9px] text-[#667789] leading-relaxed">
            Messages sent in this chat will automatically disappear 1 hour after they are viewed by the recipient.
          </p>
        </div>

        {/* Scheduled Messages */}
        <div className="p-4 bg-[#071625] border border-[#1A2E44] rounded-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-[#1A2E44] pb-3">
            <div className="flex items-center gap-3">
              <CalendarClock size={18} className="text-[#00D9FF]" />
              <span className="text-xs font-bold text-[#F5F7FA]">Scheduled</span>
            </div>
            <button className="text-[10px] text-[#00D9FF] font-bold">+ New</button>
          </div>
          
          <div className="space-y-2">
            <div className="p-3 bg-[#050A14] rounded-xl border border-[#1A2E44] flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-[#F5F7FA] truncate max-w-[150px]">"Don't forget the access key..."</span>
                <span className="text-[9px] text-[#00D9FF]">Tomorrow, 09:00 AM</span>
              </div>
              <button className="text-[#667789] hover:text-red-400"><Trash2 size={14} /></button>
            </div>
          </div>
        </div>

        {/* Reminder Alerts */}
        <div className="p-4 bg-[#071625] border border-[#1A2E44] rounded-2xl">
          <div className="flex items-center justify-between mb-4 border-b border-[#1A2E44] pb-3">
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-[#8CC63F]" />
              <span className="text-xs font-bold text-[#F5F7FA]">Follow-up Reminders</span>
            </div>
            <div className="w-8 h-4 bg-[#8CC63F] rounded-full relative shrink-0">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-[#020712]"></div>
            </div>
          </div>
          
          <p className="text-[9px] text-[#667789] leading-relaxed mb-3">
            S-Chat will intelligently remind you if you haven't received a reply to a question within 24 hours.
          </p>
          <div className="px-3 py-2 bg-[#050A14] rounded-lg border border-[#1A2E44] flex items-center gap-2">
            <Clock size={12} className="text-[#8CC63F]" />
            <span className="text-[9px] text-[#F5F7FA]">Remind me if no reply after: <strong>24 hours</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
};
