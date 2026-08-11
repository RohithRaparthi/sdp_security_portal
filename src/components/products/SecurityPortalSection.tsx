import React from 'react';
import { ShieldCheck, Network, Lock, Cpu, Search, Activity, Fingerprint, Database } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const SecurityPortalSection: React.FC = () => {
  const capabilities = [
    { icon: <Search className="w-5 h-5 text-[#00D9FF]" />, label: 'AI Threat Detection' },
    { icon: <Lock className="w-5 h-5 text-[#00D9FF]" />, label: 'Zero Trust Architecture' },
    { icon: <Fingerprint className="w-5 h-5 text-[#00D9FF]" />, label: 'Identity Security' },
    { icon: <Network className="w-5 h-5 text-[#00D9FF]" />, label: 'API Security' },
    { icon: <Database className="w-5 h-5 text-[#00D9FF]" />, label: 'Data Protection' },
    { icon: <Cpu className="w-5 h-5 text-[#00D9FF]" />, label: 'Behavioral Analysis' },
    { icon: <Activity className="w-5 h-5 text-[#00D9FF]" />, label: 'Real-Time Monitoring' },
    { icon: <ShieldCheck className="w-5 h-5 text-[#00D9FF]" />, label: 'Compliance Monitoring' },
  ];

  return (
    <section className="py-32 relative bg-[#010308] border-y border-[#00D9FF]/10 overflow-hidden" id="ai-build">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D9FF]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-8 glow-cyan cursor-pointer">
            <ShieldCheck className="w-5 h-5 text-[#00D9FF]" />
            <span className="text-[13px] font-bold tracking-widest text-[#00D9FF] uppercase">
              Enterprise AI Security Platform
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F7FA] mb-6">
            AI BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#176BFF]">SECURITY PORTAL</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-[#A8B4C3] max-w-3xl mx-auto leading-relaxed mb-20">
            Our flagship enterprise security engine protects every user, every device, and every interaction. Deliver next-generation security, intelligent automation, and seamless experiences.
          </p>
        </ScrollReveal>

        {/* Central Flagship Visualization */}
        <ScrollReveal direction="up" delay={0.3} className="relative w-full max-w-[1000px] mx-auto aspect-[16/10] md:aspect-[21/9] flex items-center justify-center mb-20">
          
          {/* Circular Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-[#00D9FF]/20 rounded-full animate-[spin_80s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-[#00D9FF]/10 rounded-full border-dashed animate-[spin_60s_linear_infinite_reverse]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[750px] md:h-[750px] border border-[#00D9FF]/5 rounded-full"></div>

          {/* Central AI Engine */}
          <motion.div 
            whileHover={{ scale: 1.08 }}
            className="relative z-20 w-40 h-40 md:w-56 md:h-56 bg-[#020712] border border-[#00D9FF]/40 rounded-3xl flex flex-col items-center justify-center shadow-[0_0_60px_rgba(0,217,255,0.15)] relative overflow-hidden group cursor-pointer transition-shadow hover:shadow-[0_0_80px_rgba(0,217,255,0.3)]"
          >
            <div className="absolute inset-0 bg-[#00D9FF]/5 group-hover:bg-[#00D9FF]/10 transition-colors duration-700"></div>
            
            {/* Scanning line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#00D9FF] shadow-[0_0_10px_#00D9FF] opacity-50 animate-[scan_4s_ease-in-out_infinite]"></div>

            <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-[#00D9FF] mb-4 group-hover:scale-110 transition-transform" />
            <span className="text-[#F5F7FA] font-bold text-sm tracking-wider uppercase text-center leading-tight">AI Security<br/>Engine</span>
          </motion.div>

          {/* Feature Nodes positioned around the rings */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] left-[15%] flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#05101A] border border-[#00D9FF]/30 rounded-xl flex items-center justify-center shadow-lg">
                <Search className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <span className="text-[10px] text-[#A8B4C3] font-bold uppercase tracking-wider bg-[#020712] px-2 py-1 rounded border border-[#00D9FF]/10">Threat Detection</span>
            </motion.div>
            
            {/* Top Right */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[10%] right-[15%] flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#05101A] border border-[#00D9FF]/30 rounded-xl flex items-center justify-center shadow-lg">
                <Lock className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <span className="text-[10px] text-[#A8B4C3] font-bold uppercase tracking-wider bg-[#020712] px-2 py-1 rounded border border-[#00D9FF]/10">Zero Trust</span>
            </motion.div>

            {/* Bottom Left */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[10%] left-[15%] flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#05101A] border border-[#00D9FF]/30 rounded-xl flex items-center justify-center shadow-lg">
                <Network className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <span className="text-[10px] text-[#A8B4C3] font-bold uppercase tracking-wider bg-[#020712] px-2 py-1 rounded border border-[#00D9FF]/10">API Security</span>
            </motion.div>

            {/* Bottom Right */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[10%] right-[15%] flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#05101A] border border-[#00D9FF]/30 rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <span className="text-[10px] text-[#A8B4C3] font-bold uppercase tracking-wider bg-[#020712] px-2 py-1 rounded border border-[#00D9FF]/10">Real-Time Sync</span>
            </motion.div>
            
            {/* Left center */}
            <motion.div animate={{ x: [0, -6, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute top-1/2 -translate-y-1/2 left-[5%] flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#05101A] border border-[#00D9FF]/30 rounded-xl flex items-center justify-center shadow-lg">
                <Fingerprint className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <span className="text-[10px] text-[#A8B4C3] font-bold uppercase tracking-wider bg-[#020712] px-2 py-1 rounded border border-[#00D9FF]/10">Identity</span>
            </motion.div>

            {/* Right center */}
            <motion.div animate={{ x: [0, 6, 0] }} transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} className="absolute top-1/2 -translate-y-1/2 right-[5%] flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-[#05101A] border border-[#00D9FF]/30 rounded-xl flex items-center justify-center shadow-lg">
                <Database className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <span className="text-[10px] text-[#A8B4C3] font-bold uppercase tracking-wider bg-[#020712] px-2 py-1 rounded border border-[#00D9FF]/10">Data Shield</span>
            </motion.div>
          </div>
          
        </ScrollReveal>

        {/* All Capabilities Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto mb-12">
          {capabilities.map((cap, idx) => (
            <StaggerItem key={idx}>
              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(0,217,255,0.4)" }}
                className="flex items-center gap-3 p-4 bg-[#05101A] border border-[#00D9FF]/10 rounded-lg transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,217,255,0.15)]"
              >
                <div className="shrink-0">{cap.icon}</div>
                <span className="text-sm font-medium text-[#F5F7FA] text-left">{cap.label}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.4}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <GlowButton variant="primary" className="px-10 py-4 text-base">
              Deploy AI Security Platform
            </GlowButton>
          </motion.div>
        </ScrollReveal>

      </div>
    </section>
  );
};
