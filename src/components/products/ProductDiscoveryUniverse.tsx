import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Shirt, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import { useNavigation } from '../../utils/router';
import { ScrollReveal } from '../common/ScrollReveal';

export const ProductDiscoveryUniverse: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section id="products-universe" className="py-24 relative overflow-hidden bg-[#020712]">
      {/* Background Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#00D9FF]/8 via-[#8CC63F]/8 to-[#A855F7]/8 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-left max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-4 glow-cyan">
              <Sparkles size={14} className="text-[#00D9FF]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                Product Discovery
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F7FA] tracking-tight leading-[1.02] mb-4">
              THREE PRODUCTS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7]">
                THREE INTELLIGENT WORLDS
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#A8B4C3] max-w-2xl leading-relaxed">
              Explore dedicated AI platforms built with zero-trust privacy, post-quantum key encapsulation, and spatial generative intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Product Showcase */}
        <div className="space-y-12">
          
          {/* Major Heroic Product 01: S-CHAT AI (70% UI / 30% Text) */}
          <ScrollReveal direction="up">
            <motion.div 
              whileHover={{ y: -4 }}
              onClick={() => navigateTo('s-chat')}
              className="bg-gradient-to-br from-[#05101A] via-[#020712] to-[#05101A] border border-[#8CC63F]/40 hover:border-[#8CC63F] rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] cursor-pointer group transition-all relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left 30%: Product Story & Specs */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-2xl bg-[#8CC63F]/10 border border-[#8CC63F]/40 text-[#8CC63F]">
                        <Lock size={24} />
                      </div>
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/30 uppercase">
                        QUANTUM SECURE
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] mb-2 group-hover:text-white">
                      S-CHAT AI
                    </h3>
                    <p className="text-sm font-mono font-bold text-[#8CC63F] mb-4">
                      Quantum-Safe Private Communication
                    </p>
                    <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed mb-6">
                      Post-Quantum Kyber-1024 double-ratchet key encapsulation paired with hardware anti-screen capture.
                    </p>

                    <div className="space-y-2 mb-8">
                      <div className="flex items-center gap-2 text-xs text-[#F5F7FA]">
                        <CheckCircle2 size={15} className="text-[#8CC63F]" />
                        <span>Kyber-1024 Post-Quantum Handshake</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#F5F7FA]">
                        <CheckCircle2 size={15} className="text-[#8CC63F]" />
                        <span>Zero-Trace Ephemeral RAM Overwrite</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#F5F7FA]">
                        <CheckCircle2 size={15} className="text-[#8CC63F]" />
                        <span>Hardware Screen Blackout Hook</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-bold text-[#8CC63F] font-mono group-hover:translate-x-2 transition-transform">
                    <span>EXPLORE S-CHAT PLATFORM</span>
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Right 70%: Massive Interactive Visual Chat Interface */}
                <div className="lg:col-span-8 bg-[#010308] border border-[#8CC63F]/30 rounded-2xl p-5 sm:p-6 shadow-2xl flex flex-col gap-4">
                  {/* Chat Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#1A2E44] text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#8CC63F]">
                      <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-ping"></span>
                      <span className="font-bold">S-CHAT #001 &bull; KYBER-1024 PQ ACTIVE</span>
                    </div>
                    <span className="text-[10px] text-[#A8B4C3]">0.0ms SERVER EXPOSURE</span>
                  </div>

                  {/* Messages Preview */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-[#071625] border border-[#1A2E44] text-[#F5F7FA] max-w-[90%]">
                      <p>🔒 Handshake initiated with quantum seed. All memory buffers locked.</p>
                      <span className="text-[10px] text-[#8CC63F] block mt-1 break-all">CIPHER: 0xe4a899c7f21b0042d38827ab10f99a...</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#8CC63F]/15 border border-[#8CC63F]/40 text-[#F5F7FA] max-w-[90%] ml-auto text-right">
                      <p>Session confirmed. Forward secrecy verified. Ephemeral timer: 30s.</p>
                      <span className="text-[10px] text-[#8CC63F] block mt-1">INTEGRITY: 100% VERIFIED</span>
                    </div>
                  </div>

                  {/* Visual Protocol & Cipher Stream */}
                  <div className="p-3 bg-[#05101A] rounded-xl border border-[#1A2E44] flex items-center justify-between text-[11px] font-mono text-[#A8B4C3]">
                    <span>PROTOCOL: Kyber-1024 Post-Quantum</span>
                    <span className="text-[#8CC63F] font-bold">● SCREEN SHIELD: ARMED</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </ScrollReveal>

          {/* Discovery Rail for OUTFIT AI & AI BUILD SECURITY */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* OUTFIT AI (70% UI / 30% Text) */}
            <ScrollReveal direction="up" delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => navigateTo('outfit-ai')}
                className="bg-gradient-to-b from-[#070D1E] via-[#020712] to-[#070D1E] border border-[#A855F7]/40 hover:border-[#A855F7] rounded-3xl p-6 sm:p-8 shadow-xl cursor-pointer group transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/40 text-[#A855F7]">
                      <Shirt size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30 uppercase">
                      SPATIAL AI
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] mb-1 group-hover:text-white">
                    OUTFIT AI
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#A855F7] mb-3">
                    Generative Spatial Fashion Studio
                  </p>
                  <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed mb-6">
                    3D body geometry analysis across 85+ measurement scan points with sub-600ms fabric diffusion.
                  </p>

                  {/* 70% Product UI Preview */}
                  <div className="w-full bg-[#010308] border border-[#A855F7]/30 rounded-2xl p-4 mb-6 space-y-3">
                    <div className="flex justify-between text-[10px] font-mono text-[#A855F7]">
                      <span>3D MESH SCANNER</span>
                      <span>● 85+ PTS EXTRACTED</span>
                    </div>
                    <div className="p-3 bg-[#071625] rounded-xl border border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#F5F7FA]">
                      <span>Italian Midnight Velvet Tuxedo</span>
                      <span className="text-[#8CC63F]">Fit: 99.4%</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-[#A8B4C3]">
                      <span>Occasion: Executive Boardroom</span>
                      <span className="text-[#A855F7]">Drape: &lt;600ms</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A855F7]">
                  <span className="font-bold">LAUNCH AI STYLING STUDIO</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            </ScrollReveal>

            {/* AI BUILD SECURITY (70% UI / 30% Text) */}
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                onClick={() => navigateTo('ai-build')}
                className="bg-gradient-to-b from-[#05101A] via-[#020712] to-[#05101A] border border-[#00D9FF]/40 hover:border-[#00D9FF] rounded-3xl p-6 sm:p-8 shadow-xl cursor-pointer group transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/40 text-[#00D9FF]">
                      <ShieldCheck size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30 uppercase">
                      ENTERPRISE SOC
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] mb-1 group-hover:text-white">
                    AI BUILD SECURITY
                  </h3>
                  <p className="text-xs font-mono font-bold text-[#00D9FF] mb-3">
                    Zero-Trust LLM Defense & Firewall
                  </p>
                  <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed mb-6">
                    Pre-inference prompt parsing, autonomous red-teaming, and multi-agent capability boundaries.
                  </p>

                  {/* 70% Product UI Preview */}
                  <div className="w-full bg-[#010308] border border-[#00D9FF]/30 rounded-2xl p-4 mb-6 space-y-3">
                    <div className="flex justify-between text-[10px] font-mono text-[#00D9FF]">
                      <span>SOC FIREWALL ACTIVE</span>
                      <span>● LATENCY: 1.1ms</span>
                    </div>
                    <div className="p-3 bg-[#071625] rounded-xl border border-[#1A2E44] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#F5F7FA]">Adversarial Prompt Injection</span>
                      <span className="text-[#8CC63F] font-bold">100% BLOCKED</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-[#667789] truncate">
                      &gt; payload: DAN_jailbreak_probe_v4.2 [quarantined]
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#00D9FF]">
                  <span className="font-bold">OPEN SECURITY CONSOLE</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
