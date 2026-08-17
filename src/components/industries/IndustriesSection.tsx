import React from 'react';
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  Factory, 
  Truck, 
  Umbrella, 
  ShoppingBag, 
  Rocket, 
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { HorizontalRail } from '../common/HorizontalRail';
import { motion } from 'framer-motion';

export const IndustriesSection: React.FC = () => {
  const industries = [
    { name: 'Banking & FinTech', icon: Landmark, desc: 'High-frequency transaction fraud prevention & post-quantum vaults', tag: 'FINANCE' },
    { name: 'Healthcare & Life Sciences', icon: HeartPulse, desc: 'HIPAA-compliant zero-knowledge medical data and spatial analytics', tag: 'HEALTH' },
    { name: 'Defense & Government', icon: Building2, desc: 'Air-gapped LLM deployments with sovereign data isolation', tag: 'GOV' },
    { name: 'Fashion & Retail', icon: ShoppingBag, desc: 'Neural 3D try-on, automated styling, and return reduction engines', tag: 'COMMERCE' },
    { name: 'Education & Research', icon: GraduationCap, desc: 'Secure research copilot pipelines and student privacy enclaves', tag: 'ACADEMIA' },
    { name: 'Smart Manufacturing', icon: Factory, desc: 'Edge AI security, OT telemetry monitoring, and anomaly detection', tag: 'INDUSTRY' },
    { name: 'Logistics & Supply Chain', icon: Truck, desc: 'Cryptographic asset provenance tracking and route intelligence', tag: 'LOGISTICS' },
    { name: 'Insurance & Risk', icon: Umbrella, desc: 'Automated claim underwriting and adversarial AI threat audits', tag: 'INSURANCE' },
    { name: 'High-Growth Startups', icon: Rocket, desc: 'Fast SDK integration for instant enterprise-grade AI security', tag: 'STARTUPS' },
    { name: 'Global Enterprises', icon: Briefcase, desc: 'Multi-tenant zero-trust access control and SOC integrations', tag: 'ENTERPRISE' },
  ];

  return (
    <section className="py-24 relative bg-[#030B16] border-t border-[#00D9FF]/10 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        
        <ScrollReveal direction="up">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-full mb-3">
                <Sparkles size={12} className="text-[#8CC63F]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#8CC63F] uppercase">
                  Industry Sectors
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] tracking-tight">
                MISSION-CRITICAL SOLUTIONS BY INDUSTRY
              </h2>
            </div>
            <span className="text-xs font-mono text-[#A8B4C3] shrink-0">
              DISCOVERY CATEGORIES &rarr;
            </span>
          </div>
        </ScrollReveal>

        {/* Horizontal Category Rail */}
        <HorizontalRail className="gap-6 pt-2 pb-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div 
                key={idx}
                whileHover={{ y: -6, scale: 1.02 }}
                className="w-[280px] sm:w-[300px] shrink-0 bg-[#05101A] border border-[#1A2E44] hover:border-[#00D9FF]/40 rounded-2xl p-6 transition-all duration-300 hover:bg-[#071625] hover:shadow-[0_10px_30px_rgba(0,217,255,0.15)] flex flex-col justify-between cursor-pointer group snap-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#071625] border border-[#00D9FF]/20 flex items-center justify-center group-hover:bg-[#00D9FF]/20 group-hover:border-[#00D9FF]/50 transition-all">
                      <Icon className="w-6 h-6 text-[#00D9FF] group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#020712] border border-[#1A2E44] text-[#8CC63F]">
                      {ind.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-[#F5F7FA] font-bold text-base mb-2 group-hover:text-[#00D9FF] transition-colors">{ind.name}</h3>
                  <p className="text-[#A8B4C3] text-xs leading-relaxed">{ind.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#00D9FF]">
                  <span>View Case Study</span>
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
