import React, { useState } from 'react';
import { ShieldCheck, Lock, Activity, Cpu, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  const evidenceCards = [
    {
      id: 0,
      title: 'AI-POWERED DEFENSE',
      subtitle: 'Continuous Pre-Inference Neural Sentinel',
      summary: 'Automated generative adversary simulations test endpoints 24/7 against emerging zero-day vulnerabilities.',
      details: [
        'Sub-1.2ms latency pre-inference parsing',
        'Autonomous jailbreak and DAN token smuggling filter',
        'Continuous red teaming with zero training contamination'
      ],
      icon: <Cpu className="w-6 h-6 text-[#00D9FF]" />,
      color: '#00D9FF'
    },
    {
      id: 1,
      title: 'ZERO-TRUST ARCHITECTURE',
      subtitle: 'Cryptographic Capability Boundaries',
      summary: 'Never trust, always verify. Every API request, agent tool invocation, and memory query requires cryptographic authentication.',
      details: [
        'Role-based multi-agent tool execution permissions',
        'Hardware-enforced FIDO2 WebAuthn & biometric gating',
        'Fine-grained RAG vector database access controls'
      ],
      icon: <Lock className="w-6 h-6 text-[#8CC63F]" />,
      color: '#8CC63F'
    },
    {
      id: 2,
      title: 'PRIVACY-FIRST DESIGN',
      subtitle: '100% Zero-Knowledge Data Guarantees',
      summary: 'Customer data and private keys never touch public servers in plaintext. Sovereign deployment with complete cryptographic autonomy.',
      details: [
        'Post-Quantum Kyber-1024 on-device key encapsulation',
        'Hardware anti-screen capture & screen recording sniffer',
        'Automated real-time PII & API secret token redaction'
      ],
      icon: <ShieldCheck className="w-6 h-6 text-[#A855F7]" />,
      color: '#A855F7'
    },
    {
      id: 3,
      title: 'REAL-TIME TELEMETRY & AUDIT',
      subtitle: 'Forensic Provenance & Compliance',
      summary: 'Instant forensic visibility into every prompt, token, and agent interaction with cryptographic decision provenance.',
      details: [
        'NIST AI RMF and EU AI Act compliance engine',
        'Instant forensic event logs and anomaly alerts',
        '99.999% high-availability enterprise SLA'
      ],
      icon: <Activity className="w-6 h-6 text-[#00D9FF]" />,
      color: '#00D9FF'
    }
  ];

  return (
    <section className="py-24 relative bg-[#020712] border-t border-[#00D9FF]/10 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-4 glow-cyan">
              <Sparkles size={14} className="text-[#00D9FF]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                Core Foundation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F7FA] tracking-tight mb-4 leading-tight">
              SECURITY ISN'T A FEATURE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7]">
                IT'S THE FOUNDATION.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8B4C3] max-w-xl mx-auto leading-relaxed">
              We engineer intelligence where security, speed, and privacy are baked into the fundamental silicon and mathematical layers.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Large Evidence Cards */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {evidenceCards.map((card) => {
            const isExpanded = activeCard === card.id;

            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCard(isExpanded ? null : card.id)}
                whileHover={{ y: -4 }}
                className={`p-8 rounded-3xl border transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden flex flex-col justify-between ${
                  isExpanded
                    ? 'bg-[#071625] border-[#00D9FF]/50 shadow-[0_15px_40px_rgba(0,217,255,0.15)]'
                    : 'bg-[#05101A] border-[#1A2E44] hover:border-[#00D9FF]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                      style={{ backgroundColor: `${card.color}15`, borderColor: `${card.color}40` }}
                    >
                      {card.icon}
                    </div>
                    <span 
                      className="text-[10px] font-mono font-bold px-3 py-1 rounded-full border uppercase"
                      style={{ color: card.color, borderColor: `${card.color}40`, backgroundColor: `${card.color}10` }}
                    >
                      VERIFIED PILLAR 0{card.id + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] mb-1">{card.title}</h3>
                  <p className="text-xs font-mono font-bold text-[#A8B4C3] mb-3" style={{ color: card.color }}>
                    {card.subtitle}
                  </p>
                  <p className="text-sm text-[#A8B4C3] leading-relaxed mb-6">
                    {card.summary}
                  </p>

                  {/* Interactive Details Reveal */}
                  <div className={`space-y-2.5 pt-4 border-t border-white/10 transition-all duration-300 ${isExpanded ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    {card.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                        <CheckCircle2 size={15} style={{ color: card.color }} className="shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono" style={{ color: card.color }}>
                  <span>{isExpanded ? 'Click to collapse specifications' : 'Click to inspect specifications'}</span>
                  <ChevronRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
