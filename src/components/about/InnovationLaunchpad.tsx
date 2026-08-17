import React from 'react';
import { GlowButton } from '../common/GlowButton';
import { ShieldCheck, Lock, Shirt, Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';
import { useNavigation } from '../../utils/router';

export const InnovationLaunchpad: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="py-28 relative overflow-hidden bg-[#020712] border-t border-[#00D9FF]/20">
      {/* Dynamic Ambient Spotlight */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[800px] h-[800px] bg-gradient-to-tr from-[#00D9FF]/15 via-[#8CC63F]/10 to-[#A855F7]/15 rounded-full blur-[160px]"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10 text-center">
        
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-6 glow-cyan">
            <Sparkles className="w-4 h-4 text-[#00D9FF]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
              Unified Platform Access
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F7FA] tracking-tight leading-[1.02] mb-6">
            READY TO ENTER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7]">
              THE SDP ECOSYSTEM?
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-base sm:text-lg text-[#A8B4C3] max-w-2xl mx-auto leading-relaxed mb-16">
            Select a dedicated intelligent product portal to launch live interactive testbenches and evaluate our cryptographic benchmarks.
          </p>
        </ScrollReveal>

        {/* 3 Large Visual Product Portals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          
          {/* 1. S-CHAT AI Portal */}
          <motion.div 
            whileHover={{ y: -8 }}
            onClick={() => navigateTo('s-chat')}
            className="bg-gradient-to-b from-[#05101A] to-[#020712] border-2 border-[#8CC63F]/40 hover:border-[#8CC63F] rounded-3xl p-8 flex flex-col justify-between h-full transition-all cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(140,198,63,0.25)] group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#8CC63F]/10 border border-[#8CC63F]/40 flex items-center justify-center text-[#8CC63F] group-hover:scale-110 transition-transform">
                  <Lock size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/30 uppercase">
                  PORTAL 01
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#F5F7FA] mb-2 group-hover:text-white transition-colors">
                S-CHAT AI
              </h3>
              <p className="text-xs font-mono font-bold text-[#8CC63F] mb-3">
                Quantum-Safe Messenger
              </p>
              <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed mb-8">
                Kyber-1024 Post-Quantum key exchange with hardware anti-screen capture.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#8CC63F]">
              <span>ENTER S-CHAT WORLD</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

          {/* 2. OUTFIT AI Portal */}
          <motion.div 
            whileHover={{ y: -8 }}
            onClick={() => navigateTo('outfit-ai')}
            className="bg-gradient-to-b from-[#070D1E] to-[#020712] border-2 border-[#A855F7]/40 hover:border-[#A855F7] rounded-3xl p-8 flex flex-col justify-between h-full transition-all cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)] group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/40 flex items-center justify-center text-[#A855F7] group-hover:scale-110 transition-transform">
                  <Shirt size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30 uppercase">
                  PORTAL 02
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#F5F7FA] mb-2 group-hover:text-white transition-colors">
                OUTFIT AI
              </h3>
              <p className="text-xs font-mono font-bold text-[#A855F7] mb-3">
                Spatial Fashion Studio
              </p>
              <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed mb-8">
                3D body geometry analysis with sub-600ms diffusion virtual try-on.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#A855F7]">
              <span>ENTER OUTFIT AI WORLD</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

          {/* 3. AI BUILD SECURITY Portal */}
          <motion.div 
            whileHover={{ y: -8 }}
            onClick={() => navigateTo('ai-build')}
            className="bg-gradient-to-b from-[#05101A] to-[#020712] border-2 border-[#00D9FF]/40 hover:border-[#00D9FF] rounded-3xl p-8 flex flex-col justify-between h-full transition-all cursor-pointer shadow-xl hover:shadow-[0_20px_50px_rgba(0,217,255,0.25)] group relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/40 flex items-center justify-center text-[#00D9FF] group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 uppercase">
                  PORTAL 03
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#F5F7FA] mb-2 group-hover:text-white transition-colors">
                AI BUILD SECURITY
              </h3>
              <p className="text-xs font-mono font-bold text-[#00D9FF] mb-3">
                Flagship Enterprise SOC
              </p>
              <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed mb-8">
                Zero-trust LLM firewall, prompt injection defense, and multi-agent RBAC.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-[#00D9FF]">
              <span>ENTER SECURITY SOC</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.div>

        </div>

        {/* Global CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <GlowButton 
              variant="primary" 
              onClick={() => navigateTo('ai-build')}
              className="text-sm px-8 py-4 font-mono font-bold uppercase shadow-[0_0_30px_rgba(0,217,255,0.35)]"
            >
              Deploy Enterprise Platform
            </GlowButton>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-4 text-xs font-mono font-bold uppercase rounded-xl bg-[#071625] border border-[#1A2E44] text-[#A8B4C3] hover:text-[#00D9FF] hover:border-[#00D9FF]/40 transition-all cursor-pointer"
            >
              Back to Top &uarr;
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
