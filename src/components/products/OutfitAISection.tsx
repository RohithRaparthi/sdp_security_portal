import React from 'react';
import { Sparkles, Shirt, Scissors, Maximize, Palette, TrendingUp } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const OutfitAISection: React.FC = () => {
  const features = [
    { icon: <Sparkles className="w-4 h-4 text-[#A855F7]" />, label: 'AI Outfit Recommendation' },
    { icon: <Shirt className="w-4 h-4 text-[#A855F7]" />, label: 'Virtual Try-On' },
    { icon: <Scissors className="w-4 h-4 text-[#A855F7]" />, label: 'Personalized Styling' },
    { icon: <Maximize className="w-4 h-4 text-[#A855F7]" />, label: 'Wardrobe Management' },
    { icon: <Palette className="w-4 h-4 text-[#A855F7]" />, label: 'AI Color Matching' },
    { icon: <TrendingUp className="w-4 h-4 text-[#A855F7]" />, label: 'Fashion Trend Analysis' },
  ];

  return (
    <section className="py-24 relative bg-[#020712] overflow-hidden" id="outfit-ai">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] h-[80%] bg-[#A855F7]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Mobile Phone Mockup */}
          <ScrollReveal direction="right" delay={0.2} className="flex justify-center items-center order-1 relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#A855F7]/10 to-[#00D9FF]/10 rounded-full blur-[80px]"></div>
              
              <div className="w-[300px] h-[600px] bg-[#020712] rounded-[40px] border-8 border-[#0F1E2E] shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden flex flex-col z-10">
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-32 h-6 bg-[#0F1E2E] rounded-b-2xl"></div>
                </div>

                {/* App Header */}
                <div className="pt-10 pb-4 px-5 bg-[#05101A] border-b border-[#1A2E44] flex items-center justify-between relative z-10">
                  <h4 className="text-[#F5F7FA] font-bold text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#A855F7]" />
                    Outfit AI
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-[#1A2E44] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" className="text-[#F5F7FA]"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                </div>

                {/* App Body */}
                <div className="flex-1 bg-[#020712] p-4 flex flex-col gap-4 overflow-y-auto relative z-10 no-scrollbar">
                  
                  {/* AI Recommendation Banner */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-r from-[#A855F7]/20 to-[#00D9FF]/20 rounded-xl p-4 border border-[#A855F7]/30 transition-transform cursor-pointer"
                  >
                    <h5 className="text-[#F5F7FA] font-bold text-sm mb-1">Today's Pick for You</h5>
                    <p className="text-[#A8B4C3] text-xs mb-3">Based on weather & your style</p>
                    <div className="w-full h-32 bg-[#05101A] rounded-lg border border-[#1A2E44] flex items-center justify-center overflow-hidden relative group">
                      <div className="absolute inset-0 bg-[#A855F7]/10 flex flex-col items-center justify-center">
                        <Shirt className="w-10 h-10 text-[#A855F7]/80 mb-2 animate-bounce" />
                        <span className="text-[#A8B4C3] text-xs font-semibold">AI Generated Look</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right Content */}
          <div className="flex flex-col items-start order-2">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest text-[#A855F7] uppercase">
                  Fashion AI Engine
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#071625] border border-[#A855F7]/20 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#A855F7]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5F7FA]">Outfit AI</h2>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-lg text-[#A8B4C3] leading-relaxed mb-8 max-w-xl">
                An intelligent fashion assistant that analyzes personal style, occasion, weather, and current trends to curate tailored outfit recommendations and virtual try-ons.
              </p>
            </ScrollReveal>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full max-w-xl">
              {features.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <motion.div 
                    whileHover={{ scale: 1.03, borderColor: "rgba(168,85,247,0.4)" }}
                    className="flex items-center gap-3 p-3 bg-[#05101A] border border-[#A855F7]/10 rounded-lg transition-all cursor-default"
                  >
                    {feature.icon}
                    <span className="text-sm font-medium text-[#F5F7FA]">{feature.label}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal direction="up" delay={0.5}>
              <GlowButton variant="secondary" className="px-8 py-3 group hover:border-[#A855F7]/50">
                <span className="group-hover:text-[#A855F7] transition-colors">Explore Outfit AI</span>
              </GlowButton>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
