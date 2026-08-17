import React from 'react';
import { services } from '../../data/content';
import { ScrollReveal } from '../common/ScrollReveal';
import { HorizontalRail } from '../common/HorizontalRail';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {

  return (
    <section id="services" className="py-24 relative bg-[#030B16] overflow-hidden border-t border-[#00D9FF]/10">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full mb-3">
                <Sparkles size={12} className="text-[#00D9FF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                  What We Build
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] tracking-tight">
                ENTERPRISE ENGINEERING & AI SERVICES
              </h2>
            </div>
            <span className="text-xs font-mono text-[#A8B4C3] shrink-0">
              DRAG / SCROLL TO DISCOVER &rarr;
            </span>
          </div>
        </ScrollReveal>

        {/* Discovery Horizontal Rail */}
        <HorizontalRail className="gap-6 pt-2 pb-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                whileHover={{ y: -6, scale: 1.02 }}
                className="w-[280px] sm:w-[320px] shrink-0 bg-[#05101A] border border-[#1A2E44] hover:border-[#00D9FF]/50 rounded-2xl p-6 transition-all duration-300 hover:bg-[#071625] hover:shadow-[0_10px_30px_rgba(0,217,255,0.15)] flex flex-col justify-between cursor-pointer group snap-start"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#071625] border border-[#00D9FF]/20 flex items-center justify-center mb-5 group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF]/50 transition-all">
                    <Icon className="w-6 h-6 text-[#00D9FF] group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <span className="text-[10px] font-mono text-[#8CC63F] block mb-1">SERVICE 0{index + 1}</span>
                  <h3 className="text-[#F5F7FA] font-bold text-lg mb-2 group-hover:text-[#00D9FF] transition-colors">{service.title}</h3>
                  <p className="text-[#A8B4C3] text-xs leading-relaxed">{service.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#00D9FF]">
                  <span>Explore Architecture</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </HorizontalRail>

      </div>
    </section>
  );
};
