import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowButton } from '../common/GlowButton';
import { SecurityVisual } from './SecurityVisual';
import { Sparkles, ArrowRight, Shield } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { useNavigation } from '../../utils/router';

export const HeroSection: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 24,
      y: (clientY / innerHeight - 0.5) * 24,
    });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden min-h-[95vh] flex items-center justify-center bg-[#020712]" 
      id="home"
    >
      {/* 1. Deep Space Atmosphere with Radial Parallax */}
      <div className="absolute inset-0 bg-[#020712]"></div>
      
      {/* 2. Cybernetic Dynamic Ambient Lighting */}
      <motion.div 
        animate={{ 
          x: mousePos.x * 0.7,
          y: mousePos.y * 0.7,
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-[#00D9FF]/15 blur-[150px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: -mousePos.x * 0.7,
          y: -mousePos.y * 0.7,
          scale: [1.15, 1, 1.15],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-[#8CC63F]/15 blur-[150px] pointer-events-none"
      />

      {/* 3. Subtle Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(0,217,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,1)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* 4. Main Viewport Container */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Typography & Story */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Brand Pill Badge */}
            <ScrollReveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#071625]/90 border border-[#00D9FF]/40 mb-8 glow-cyan">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00D9FF]"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                  SDP INNOVATION &bull; ENTERPRISE AI
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Hero Headline */}
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-5xl sm:text-7xl lg:text-6xl xl:text-7xl font-black text-[#F5F7FA] tracking-tighter leading-[0.9] mb-8">
                <span className="block">WE BUILD</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7] animate-pulse">
                  AI SECURITY
                </span>
                <span className="block">AND SPATIAL AI</span>
              </h1>
            </ScrollReveal>

            {/* Supporting Line */}
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-xl sm:text-2xl font-bold text-[#F5F7FA] mb-4">
                Intelligent infrastructure for the AI era.
              </p>
            </ScrollReveal>

            {/* Concise Mission Paragraph */}
            <ScrollReveal direction="up" delay={0.4}>
              <p className="text-sm sm:text-base text-[#A8B4C3] max-w-lg leading-relaxed mb-10">
                Deploy autonomous zero-trust guardrails, post-quantum private communications, and generative spatial intelligence across your enterprise.
              </p>
            </ScrollReveal>

            {/* Primary & Secondary Action Portals */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <GlowButton 
                  variant="primary"
                  onClick={() => {
                    const el = document.getElementById('products-universe');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-4 flex items-center gap-2.5 text-sm font-bold shadow-[0_0_30px_rgba(0,217,255,0.4)] cursor-pointer"
                >
                  <Sparkles size={16} />
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight size={16} />
                </GlowButton>
                
                <GlowButton 
                  variant="secondary"
                  onClick={() => navigateTo('ai-build')}
                  className="px-8 py-4 flex items-center gap-2.5 text-sm border-[#00D9FF]/40 text-[#00D9FF] hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 cursor-pointer"
                >
                  <Shield size={16} />
                  <span>OPEN SECURITY CONSOLE</span>
                </GlowButton>
              </div>
            </ScrollReveal>

            {/* Verified Foundation Indicators */}
            <ScrollReveal direction="up" delay={0.6}>
              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A8B4C3] pt-6 border-t border-white/10 w-full">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                  <span className="font-bold text-[#F5F7FA]">AI PROTECTED</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8CC63F]"></span>
                  <span className="font-bold text-[#F5F7FA]">ZERO TRUST</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                  <span className="font-bold text-[#F5F7FA]">PQ SECURE</span>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Massive Central AI Security Engine */}
          <ScrollReveal direction="left" delay={0.3} className="lg:col-span-6 relative flex justify-center">
            <motion.div
              animate={{ 
                x: -mousePos.x * 0.5,
                y: -mousePos.y * 0.5,
              }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className="w-full"
            >
              <SecurityVisual />
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
