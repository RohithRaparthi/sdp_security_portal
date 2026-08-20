import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';
import { useNavigation } from '../../utils/router';
import { SChatPhone } from './schat/SChatPhone';
import { SecureChatScreen } from './schat/screens/SecureChatScreen';
import { SChatLogo } from './schat/SChatLogo';

export const SChatSection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-24 relative bg-[#030B16] overflow-hidden border-t border-[#8CC63F]/10" id="s-chat">
      {/* Dynamic Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CC63F]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 50%: Concise Story & Specs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <ScrollReveal direction="right" delay={0.1}>
              <SChatLogo className="mb-6 scale-90 origin-left" />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FA] tracking-tight mb-4">
                S-CHAT AI
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#A8B4C3] leading-relaxed mb-6 max-w-lg">
                The premium secure messaging product engineered for absolute privacy. E2E encrypted chats, voice, and video.
              </p>
            </ScrollReveal>

            <div className="space-y-2.5 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
                <span>End-to-End Encrypted Secure Chat & Calls</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
                <span>Hardware Screen Capture Protection</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
                <span>Secure File Transfer & Shared Logs</span>
              </div>
            </div>

            <ScrollReveal direction="up" delay={0.5}>
              <GlowButton 
                variant="green" 
                onClick={() => navigateTo('s-chat')}
                className="px-8 py-4 flex items-center gap-2 text-xs font-mono font-bold uppercase shadow-[0_0_25px_rgba(140,198,63,0.3)] cursor-pointer"
              >
                <Sparkles size={15} />
                <span>Explore S-Chat Features</span>
                <ArrowRight size={15} />
              </GlowButton>
            </ScrollReveal>
          </div>

          {/* Right 50%: Phone Preview */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-6 flex justify-center items-center">
            <motion.div
              whileHover={{ y: -5 }}
              onClick={() => navigateTo('s-chat')}
              className="cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-[#8CC63F]/20 blur-[100px] rounded-full scale-75"></div>
              <div className="scale-90 sm:scale-100 origin-center pointer-events-none relative z-10">
                <SChatPhone>
                  <SecureChatScreen />
                </SChatPhone>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
