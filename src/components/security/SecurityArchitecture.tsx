import React, { useState } from 'react';
import { User, Fingerprint, Layout, Network, Database, Server, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const SecurityArchitecture: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(6); // Default to AI Security Engine

  const layers = [
    { 
      id: 0, 
      icon: User, 
      title: 'USER', 
      subtitle: 'Endpoint & Biometric Verification',
      desc: 'Hardware WebAuthn FIDO2 keys and zero-trust biometric handshake at the user boundary.',
      specs: ['Hardware Security Key Integration', 'Biometric Enclave Gating', 'Zero-Knowledge Session Nonce'],
      latency: '0.2ms',
      color: '#00D9FF'
    },
    { 
      id: 1, 
      icon: Fingerprint, 
      title: 'IDENTITY', 
      subtitle: 'Cryptographic Auth & IAM',
      desc: 'Continuous behavioral verification and short-lived ephemeral certificates for zero-trust.',
      specs: ['SCIM & Okta / Azure AD Sync', 'Ephemeral mTLS Key Pairs', 'Continuous Contextual Scoring'],
      latency: '0.4ms',
      color: '#00D9FF'
    },
    { 
      id: 2, 
      icon: Layout, 
      title: 'APPLICATION', 
      subtitle: 'Frontend & UI Hardening',
      desc: 'OS-level anti-screen capture, memory buffer redaction, and strict CSP execution.',
      specs: ['Hardware Screen Blackout Hook', 'Dynamic Code Obfuscation', 'Sub-resource Integrity (SRI)'],
      latency: '0.1ms',
      color: '#8CC63F'
    },
    { 
      id: 3, 
      icon: Network, 
      title: 'API GATEWAY', 
      subtitle: 'Pre-Inference Semantic Proxy',
      desc: 'High-throughput Rust reverse-proxy evaluating every prompt AST token under 1.2ms.',
      specs: ['Sub-1.2ms Token Parsing', 'DDoS & Rate Sentinel', 'Automated PII Masking Engine'],
      latency: '0.8ms',
      color: '#00D9FF'
    },
    { 
      id: 4, 
      icon: Database, 
      title: 'DATA ENCLAVE', 
      subtitle: 'Post-Quantum Storage',
      desc: 'AES-256-GCM data-at-rest wrapped with Kyber-1024 lattice key encapsulation.',
      specs: ['Kyber-1024 Envelope Encryption', 'Customer-Managed BYOK HSM', 'Zero Plaintext Server Exposure'],
      latency: '1.4ms',
      color: '#8CC63F'
    },
    { 
      id: 5, 
      icon: Server, 
      title: 'INFRASTRUCTURE', 
      subtitle: 'Sovereign Confidential Cloud',
      desc: 'Air-gapped Kubernetes clusters and AMD SEV-SNP confidential hardware enclaves.',
      specs: ['Confidential Computing Memory', 'Sovereign On-Prem Deployments', 'Air-Gapped Isolation Support'],
      latency: '0.3ms',
      color: '#00D9FF'
    },
    { 
      id: 6, 
      icon: Shield, 
      title: 'AI SECURITY ENGINE', 
      subtitle: 'Central Defense & Threat Sentinel',
      desc: 'Continuous autonomous red-teaming, vector alignment sandbox, and multi-agent RBAC enforcement.',
      specs: ['Autonomous Red Teaming', 'Zero-Trust Agent Capability Gating', 'Differential Privacy Guarantees'],
      latency: '1.18ms',
      color: '#A855F7'
    },
  ];

  const currentLayerData = layers[activeLayer];

  return (
    <section id="security-architecture" className="py-24 relative overflow-hidden bg-[#020712] border-t border-[#00D9FF]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-left max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-4 glow-cyan">
              <Sparkles size={14} className="text-[#00D9FF]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                End-to-End Defense
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FA] tracking-tight leading-tight mb-4">
              CONNECTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7]">SECURITY ARCHITECTURE</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8B4C3] max-w-xl leading-relaxed">
              Every request traverses a 7-stage cryptographic defense highway. Click any node to inspect its protocol layer.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Giant Connected Pipeline Visual (Horizontal on Desktop, Grid on Mobile) */}
        <div className="relative mb-12">
          
          {/* Illuminated Connecting Bus Line */}
          <div className="hidden lg:block absolute top-[38px] left-[5%] right-[5%] h-[3px] bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7] opacity-40 shadow-[0_0_15px_#00D9FF]"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative z-10">
            {layers.map((layer) => {
              const Icon = layer.icon;
              const isSelected = activeLayer === layer.id;

              return (
                <motion.button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className={`p-4 sm:p-5 rounded-3xl border text-center flex flex-col items-center justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#071625] border-white shadow-[0_0_30px_rgba(0,217,255,0.35)] scale-105'
                      : 'bg-[#05101A]/90 border-[#1A2E44] hover:border-[#00D9FF]/50'
                  }`}
                >
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 border transition-transform shadow-md"
                    style={{ backgroundColor: `${layer.color}15`, borderColor: `${layer.color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: layer.color }} />
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-[#A8B4C3] block mb-1">0{layer.id + 1}</span>
                    <h4 className="text-xs font-black tracking-wider text-[#F5F7FA] font-mono">{layer.title}</h4>
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* 2. Interactive Layer Inspector Canvas */}
        <div className="bg-[#05101A] border border-[#1A2E44] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#1A2E44]">
            
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-3xl flex items-center justify-center border shadow-xl shrink-0"
                style={{ backgroundColor: `${currentLayerData.color}20`, borderColor: currentLayerData.color }}
              >
                <currentLayerData.icon className="w-8 h-8" style={{ color: currentLayerData.color }} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#8CC63F] uppercase tracking-widest">
                  LAYER 0{currentLayerData.id + 1} &bull; ACTIVE INSPECTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA]">{currentLayerData.title}</h3>
                <p className="text-xs sm:text-sm font-mono text-[#A8B4C3]">{currentLayerData.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="p-3 bg-[#020712] rounded-2xl border border-[#1A2E44] text-center">
                <span className="text-[9px] text-[#667789] block">LAYER LATENCY</span>
                <span className="text-[#00D9FF] font-bold">{currentLayerData.latency}</span>
              </div>
              <div className="p-3 bg-[#020712] rounded-2xl border border-[#1A2E44] text-center">
                <span className="text-[9px] text-[#667789] block">STATUS</span>
                <span className="text-[#8CC63F] font-bold">100% ENFORCED</span>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm sm:text-base text-[#F5F7FA] leading-relaxed mb-6">
                {currentLayerData.desc}
              </p>
              <div className="space-y-2.5">
                {currentLayerData.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#A8B4C3]">
                    <CheckCircle2 size={16} style={{ color: currentLayerData.color }} className="shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#020712] p-5 rounded-2xl border border-[#1A2E44] font-mono text-xs text-[#A8B4C3] space-y-2">
              <div className="text-[10px] text-[#667789] pb-2 border-b border-[#1A2E44] flex justify-between">
                <span>STAGE LOG DUMP</span>
                <span className="text-[#8CC63F]">VERIFIED</span>
              </div>
              <p className="text-[#00D9FF]">&gt; layer.bind({currentLayerData.id}) initialized</p>
              <p>&gt; telemetry stream: nominal &bull; integrity proof signed with Kyber seed</p>
              <p className="text-[#8CC63F]">&gt; zero trust gate: PASS (capability token authorized)</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
