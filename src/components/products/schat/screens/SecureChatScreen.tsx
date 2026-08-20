import React from 'react';
import { Phone, Video, MoreVertical, Plus, Mic, Send, Shield, CheckCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const SecureChatScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] animate-in fade-in duration-300">
      
      {/* App Header */}
      <div className="pt-2 pb-3 px-4 bg-[#07101C] border-b border-[#1A2E44] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8CC63F] to-[#4D7C0F] p-0.5">
            <div className="w-full h-full rounded-full bg-[#020712] flex items-center justify-center text-[10px] font-bold text-[#F5F7FA]">
              JD
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#F5F7FA] leading-tight">Jane Doe</span>
            <span className="text-[10px] text-[#8CC63F]">Online</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#A8B4C3]">
          <Video size={18} className="hover:text-[#F5F7FA] cursor-pointer" />
          <Phone size={18} className="hover:text-[#F5F7FA] cursor-pointer" />
          <MoreVertical size={18} className="hover:text-[#F5F7FA] cursor-pointer" />
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-hidden flex flex-col p-4 gap-4 bg-[#03060C]">
        
        {/* Encryption Notice */}
        <div className="mx-auto bg-[#071625] border border-[#8CC63F]/20 rounded-xl py-2 px-3 flex items-center gap-2 max-w-[85%] text-center">
          <Shield size={12} className="text-[#FBBF24] shrink-0" />
          <span className="text-[9px] text-[#A8B4C3] leading-tight">
            Messages and calls are <strong className="text-[#8CC63F]">End-to-End Encrypted</strong>. No one outside of this chat can read or listen to them.
          </span>
        </div>

        {/* Message Bubble (Received) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="self-start max-w-[80%] bg-[#1A2E44] rounded-2xl rounded-tl-sm p-3 shadow-md"
        >
          <p className="text-xs text-[#F5F7FA] leading-relaxed">
            The Q3 financial reports are ready for review. Did you secure the transfer pipeline?
          </p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="text-[9px] text-[#667789]">10:41 AM</span>
          </div>
        </motion.div>

        {/* Message Bubble (Sent) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="self-end max-w-[80%] bg-[#082F16] border border-[#8CC63F]/20 rounded-2xl rounded-tr-sm p-3 shadow-md"
        >
          <p className="text-xs text-[#F5F7FA] leading-relaxed">
            Yes, pipeline is locked. Forward the files whenever you're ready.
          </p>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className="text-[9px] text-[#8CC63F]">10:42 AM</span>
            <CheckCheck size={12} className="text-[#8CC63F]" />
          </div>
        </motion.div>

      </div>

      {/* Input Area */}
      <div className="p-3 bg-[#07101C] border-t border-[#1A2E44] pb-6">
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-[#1A2E44] flex items-center justify-center text-[#A8B4C3] hover:text-[#F5F7FA]">
            <Plus size={18} />
          </button>
          <div className="flex-1 h-9 bg-[#020712] border border-[#1A2E44] rounded-full px-3 flex items-center justify-between">
            <span className="text-xs text-[#667789]">Message...</span>
            <button className="text-[#A8B4C3] hover:text-[#F5F7FA]">
              <Mic size={16} />
            </button>
          </div>
          <button className="w-9 h-9 rounded-full bg-[#8CC63F] flex items-center justify-center text-[#020712] shadow-[0_0_10px_rgba(140,198,63,0.3)]">
            <Send size={16} className="translate-x-[1px]" />
          </button>
        </div>
      </div>

    </div>
  );
};
