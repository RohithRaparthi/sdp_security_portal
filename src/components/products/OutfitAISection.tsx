import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';
import { useNavigation } from '../../utils/router';

export const OutfitAISection: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedLook, setSelectedLook] = useState('executive');

  const looks: Record<string, { title: string; fabric: string; fit: string; drape: string }> = {
    executive: { title: 'Italian Midnight Wool Blazer', fabric: 'Super 150s Virgin Wool', fit: '99.4%', drape: '<580ms' },
    gala: { title: 'Deep Amethyst Velvet Tuxedo', fabric: 'Mulberry Silk Velvet', fit: '98.9%', drape: '<620ms' },
    techwear: { title: '3-Layer Ergonomic Modular Shell', fabric: 'Matte Cordura GORE-TEX', fit: '97.8%', drape: '<510ms' },
    riviera: { title: 'Breezy Camp-Collar Linen Shirt', fabric: 'Italian Raw Flax Linen', fit: '99.1%', drape: '<490ms' },
  };

  const active = looks[selectedLook];

  return (
    <section className="py-24 relative bg-[#020712] overflow-hidden border-t border-[#A855F7]/10" id="outfit-ai">
      {/* Dynamic Amethyst Atmosphere */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A855F7]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 65%: Massive Interactive Visual Fashion Studio Preview */}
          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-7 flex justify-center items-center order-2 lg:order-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={() => navigateTo('outfit-ai')}
              className="w-full bg-[#070D1E] border-2 border-[#A855F7]/40 hover:border-[#A855F7] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.15)] cursor-pointer group relative overflow-hidden flex flex-col gap-6"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1A2E44] text-xs font-mono">
                <div className="flex items-center gap-2 text-[#A855F7]">
                  <Sparkles size={16} />
                  <span className="font-bold">OUTFIT AI &bull; 3D SPATIAL DRESSING ROOM</span>
                </div>
                <span className="text-[10px] text-[#8CC63F] bg-[#020712] px-2.5 py-1 rounded border border-[#1A2E44]">
                  85+ MESH POINTS
                </span>
              </div>

              {/* Look Preview Stage */}
              <div className="p-5 bg-[#020712] rounded-2xl border border-[#A855F7]/30 flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A855F7] uppercase tracking-wider font-bold">Selected Neural Silhouette</span>
                  <span className="text-[#8CC63F]">Fit: {active.fit}</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-[#F5F7FA] font-mono">
                  {active.title}
                </div>
                <div className="flex justify-between text-[11px] font-mono text-[#A8B4C3] pt-2 border-t border-[#1A2E44]">
                  <span>Fabric: {active.fabric}</span>
                  <span className="text-[#00D9FF]">Drape: {active.drape}</span>
                </div>
              </div>

              {/* Interactive Switchers */}
              <div className="grid grid-cols-4 gap-2 text-[10px] font-mono font-bold">
                {Object.keys(looks).map((k) => (
                  <button
                    key={k}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLook(k);
                    }}
                    className={`py-2 rounded-xl border uppercase transition-all cursor-pointer ${
                      selectedLook === k
                        ? 'bg-[#A855F7] text-white border-[#A855F7]'
                        : 'bg-[#05101A] text-[#A8B4C3] border-[#1A2E44] hover:text-white'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

              {/* Bottom Interactive Prompt */}
              <div className="p-3.5 bg-[#05101A] rounded-2xl border border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#A855F7]">
                <span>Click to launch full AI styling studio & 3D virtual try-on &rarr;</span>
                <span className="font-bold">ENTER STUDIO</span>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right 35%: Concise Story & Specs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left order-1 lg:order-2">
            <ScrollReveal direction="left" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-pulse"></span>
                <span className="text-xs font-mono font-bold tracking-widest text-[#A855F7] uppercase">
                  Spatial Generative Fashion Intelligence
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FA] tracking-tight mb-4">
                OUTFIT AI
              </h2>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#A8B4C3] leading-relaxed mb-6 max-w-lg">
                Generative fashion diffusion analyzing 85+ dimensional body geometry points and spectral undertones under 600ms.
              </p>
            </ScrollReveal>

            <div className="space-y-2.5 mb-8 w-full max-w-lg">
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#A855F7] shrink-0" />
                <span>Millimeter-Precision 3D Body Mesh Extraction</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#A855F7] shrink-0" />
                <span>Sub-600ms Neural Virtual Fabric Drape Engine</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                <CheckCircle2 size={16} className="text-[#A855F7] shrink-0" />
                <span>Automated Color Harmony & Undertone Calibration</span>
              </div>
            </div>

            <ScrollReveal direction="up" delay={0.5}>
              <GlowButton 
                variant="purple" 
                onClick={() => navigateTo('outfit-ai')}
                className="px-8 py-4 flex items-center gap-2 text-xs font-mono font-bold uppercase shadow-[0_0_25px_rgba(168,85,247,0.3)] cursor-pointer"
              >
                <Sparkles size={15} />
                <span>Launch AI Styling Studio</span>
                <ArrowRight size={15} />
              </GlowButton>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
