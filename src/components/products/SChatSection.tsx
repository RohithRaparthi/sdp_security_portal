import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';
import { useNavigation } from '../../utils/router';

export const SChatSection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-24 relative bg-[#030B16] overflow-hidden border-t border-[#8CC63F]/10" id="s-chat">
      {/* Dynamic Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CC63F]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 35%: Concise Story & Specs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#8CC63F] uppercase">
                  Quantum-Resistant Messenger
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FA] tracking-tight mb-4">
                S-CHAT AI
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#A8B4C3] leading-relaxed mb-6 max-w-lg">
                The enterprise private messaging platform engineered for the quantum computing era. 100% zero-knowledge data architecture.
              </p>
            </ScrollReveal>

            <div className="space-y-2.5 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
                <span>Kyber-1024 Post-Quantum Key Encapsulation</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
                <span>Hardware OS Screen Capture Blackout Hook</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#8CC63F] shrink-0" />
                <span>Cryptographic RAM Ephemeral Destruct Timers</span>
              </div>
            </div>

            <ScrollReveal direction="up" delay={0.5}>
              <GlowButton 
                variant="green" 
                onClick={() => navigateTo('s-chat')}
                className="px-8 py-4 flex items-center gap-2 text-xs font-mono font-bold uppercase shadow-[0_0_25px_rgba(140,198,63,0.3)] cursor-pointer"
              >
                <Sparkles size={15} />
                <span>Launch S-Chat Sandbox</span>
                <ArrowRight size={15} />
              </GlowButton>
            </ScrollReveal>
          </div>

          {/* Right 65%: Massive Interactive Visual Preview */}
          <ScrollReveal direction="left" delay={0.2} className="lg:col-span-7 flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => navigateTo('s-chat')}
              className="w-full bg-[#020712] border-2 border-[#8CC63F]/40 hover:border-[#8CC63F] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(140,198,63,0.15)] cursor-pointer group relative overflow-hidden flex flex-col gap-5"
            >
              {/* Top Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1A2E44] text-xs font-mono">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#8CC63F]/20 border border-[#8CC63F]/40 flex items-center justify-center font-bold text-[#8CC63F]">
                    S
                  </div>
                  <div>
                    <span className="text-[#F5F7FA] font-bold block">S-CHAT #001 &bull; PQ-KYBER ACTIVE</span>
                    <span className="text-[10px] text-[#8CC63F]">● ZERO SERVER RETENTION</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#A8B4C3] bg-[#071625] px-2.5 py-1 rounded border border-[#1A2E44]">
                  30s BURN ACTIVE
                </span>
              </div>

              {/* Messages Simulation */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-2xl bg-[#071625] border border-[#1A2E44] text-[#F5F7FA] max-w-[85%]">
                  <p>🔒 Handshake initiated with quantum seed. All memory buffers locked.</p>
                  <span className="text-[10px] text-[#8CC63F] block mt-1">CIPHER: 0xe4a899c7f21b0042d38827ab10f99a...</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#8CC63F]/15 border border-[#8CC63F]/40 text-[#F5F7FA] max-w-[85%] ml-auto text-right">
                  <p>Session confirmed. Forward secrecy verified. Ephemeral timer: 30s.</p>
                  <span className="text-[10px] text-[#8CC63F] block mt-1">INTEGRITY: 100% VERIFIED</span>
                </div>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="p-3.5 bg-[#05101A] rounded-2xl border border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#00D9FF]">
                <span>Click to launch full interactive chat & protocol switcher &rarr;</span>
                <span className="text-[#8CC63F] font-bold">ENTER DEMO</span>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
