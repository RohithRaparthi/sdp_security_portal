import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Building2, HeartPulse, GraduationCap, Landmark, Factory, ShoppingCart, Truck, Umbrella, ShoppingBag, Rocket, Briefcase } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const IndustriesSection: React.FC = () => {
  const industries = [
    { name: 'Banking', icon: Landmark },
    { name: 'Healthcare', icon: HeartPulse },
    { name: 'Education', icon: GraduationCap },
    { name: 'Government', icon: Building2 },
    { name: 'Manufacturing', icon: Factory },
    { name: 'Retail', icon: ShoppingCart },
    { name: 'Logistics', icon: Truck },
    { name: 'Insurance', icon: Umbrella },
    { name: 'E-Commerce', icon: ShoppingBag },
    { name: 'Startups', icon: Rocket },
    { name: 'Enterprises', icon: Briefcase },
  ];

  return (
    <section className="py-24 relative bg-[#030B16] border-t border-[#00D9FF]/10">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="INDUSTRIES WE SERVE" 
            subtitle="Sectors"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 justify-center">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <StaggerItem key={idx}>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.05, borderColor: "rgba(0,217,255,0.4)" }}
                  className="flex flex-col items-center justify-center p-4 bg-[#05101A] border border-[#00D9FF]/10 rounded-lg transition-all group cursor-default h-full shadow-sm hover:shadow-[0_0_20px_rgba(0,217,255,0.15)]"
                >
                  <Icon className="w-6 h-6 text-[#A8B4C3] group-hover:text-[#00D9FF] transition-colors mb-2" strokeWidth={1.5} />
                  <span className="text-[#F5F7FA] font-medium text-[11px] xl:text-xs text-center uppercase tracking-wider">{ind.name}</span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
