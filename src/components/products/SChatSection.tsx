import React from 'react';
import { Shield, Lock, EyeOff, FileText, PhoneCall, Timer } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';

export const SChatSection: React.FC = () => {
  const features = [
    { icon: <Lock className="w-4 h-4 text-[#8CC63F]" />, label: 'End-to-End Encryption' },
    { icon: <PhoneCall className="w-4 h-4 text-[#8CC63F]" />, label: 'Secure Voice & Video Calls' },
    { icon: <EyeOff className="w-4 h-4 text-[#8CC63F]" />, label: 'Screenshot Protection' },
    { icon: <Shield className="w-4 h-4 text-[#8CC63F]" />, label: 'Screen Recording Protection' },
    { icon: <Timer className="w-4 h-4 text-[#8CC63F]" />, label: 'Self-Destruct Messages' },
    { icon: <FileText className="w-4 h-4 text-[#8CC63F]" />, label: 'Secure File Sharing' },
  ];

  return (
    <section className="py-24 relative bg-[#030B16] overflow-hidden" id="s-chat">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] bg-[#8CC63F]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-[#8CC63F] uppercase">
                Secure Messenger
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#071625] border border-[#8CC63F]/20 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#8CC63F]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5F7FA]">S-Chat AI</h2>
            </div>
            
            <p className="text-lg text-[#A8B4C3] leading-relaxed mb-8 max-w-xl">
              A next-generation secure communication platform powered by artificial intelligence. Built for enterprises that demand absolute privacy, data protection, and real-time threat detection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-xl">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[#05101A] border border-[#8CC63F]/10 rounded-lg">
                  {feature.icon}
                  <span className="text-sm font-medium text-[#F5F7FA]">{feature.label}</span>
                </div>
              ))}
            </div>

            <GlowButton variant="secondary" className="px-8 py-3 group hover:border-[#8CC63F]/50">
              <span className="group-hover:text-[#8CC63F] transition-colors">Explore S-Chat</span>
            </GlowButton>
          </div>

          {/* Right Mobile Phone Mockup */}
          <div className="flex justify-center items-center order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8CC63F]/10 to-[#00D9FF]/10 rounded-full blur-[80px]"></div>
            
            <div className="w-[300px] h-[600px] bg-[#020712] rounded-[40px] border-8 border-[#0F1E2E] shadow-[0_0_50px_rgba(140,198,63,0.15)] relative overflow-hidden flex flex-col z-10">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-32 h-6 bg-[#0F1E2E] rounded-b-2xl"></div>
              </div>

              {/* Chat Header */}
              <div className="pt-10 pb-4 px-5 bg-[#05101A] border-b border-[#1A2E44] flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A2E44] flex items-center justify-center relative">
                    <span className="text-[#A8B4C3] text-sm font-bold">JD</span>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#8CC63F] border-2 border-[#05101A] rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="text-[#F5F7FA] font-medium text-sm">John Doe</h4>
                    <p className="text-[#8CC63F] text-xs">Online</p>
                  </div>
                </div>
                <Shield className="w-5 h-5 text-[#8CC63F]" />
              </div>

              {/* Chat Body */}
              <div className="flex-1 bg-[#020712] p-4 flex flex-col gap-4 overflow-hidden relative z-10">
                {/* Security Notice */}
                <div className="bg-[#8CC63F]/10 border border-[#8CC63F]/20 rounded-md p-2 text-center">
                  <span className="text-[10px] text-[#8CC63F]">Messages are end-to-end encrypted.</span>
                </div>

                {/* Messages */}
                <div className="self-start max-w-[80%]">
                  <div className="bg-[#1A2E44] rounded-2xl rounded-tl-sm p-3 text-sm text-[#F5F7FA]">
                    Hi, how are you?
                  </div>
                  <span className="text-[10px] text-[#A8B4C3] mt-1 ml-1 block">10:42 AM</span>
                </div>

                <div className="self-end max-w-[80%]">
                  <div className="bg-[#8CC63F]/20 border border-[#8CC63F]/30 rounded-2xl rounded-tr-sm p-3 text-sm text-[#F5F7FA]">
                    I'm good. How about our meeting today?
                  </div>
                  <span className="text-[10px] text-[#A8B4C3] mt-1 mr-1 block text-right text-[#8CC63F]">10:45 AM ✓✓</span>
                </div>

                <div className="self-end max-w-[80%]">
                  <div className="bg-[#8CC63F]/20 border border-[#8CC63F]/30 rounded-2xl rounded-tr-sm p-3 text-sm text-[#F5F7FA]">
                    Everything is set.
                  </div>
                  <span className="text-[10px] text-[#A8B4C3] mt-1 mr-1 block text-right text-[#8CC63F]">10:46 AM ✓✓</span>
                </div>

                <div className="self-start max-w-[80%]">
                  <div className="bg-[#1A2E44] rounded-2xl rounded-tl-sm p-3 text-sm text-[#F5F7FA]">
                    Great! See you at 11 AM.
                  </div>
                  <span className="text-[10px] text-[#A8B4C3] mt-1 ml-1 block">10:48 AM</span>
                </div>

                {/* Voice Note */}
                <div className="self-end max-w-[80%] w-48 mt-2">
                  <div className="bg-[#8CC63F]/20 border border-[#8CC63F]/30 rounded-2xl rounded-tr-sm p-2 px-3 flex items-center justify-between">
                    <div className="w-6 h-6 rounded-full bg-[#8CC63F] flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    </div>
                    <div className="flex-1 mx-2 h-1 bg-[#8CC63F]/40 rounded-full relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#8CC63F] rounded-full"></div>
                    </div>
                    <span className="text-[10px] text-[#F5F7FA]">00:12</span>
                  </div>
                </div>

              </div>

              {/* Chat Input */}
              <div className="p-4 bg-[#05101A] border-t border-[#1A2E44] flex items-center gap-3 pb-8 relative z-10">
                <div className="flex-1 bg-[#020712] border border-[#1A2E44] rounded-full h-10 px-4 flex items-center">
                  <span className="text-sm text-[#A8B4C3]">Message...</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8CC63F] flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-[#020712]"><path d="M22 2L11 13"></path><path d="M22 2L15 22 11 13 2 9 22 2z"></path></svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
