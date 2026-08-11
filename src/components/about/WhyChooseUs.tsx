import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldCheck } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    'AI-Powered Solutions',
    'Enterprise Grade Security',
    'Privacy-First Design',
    'Zero Trust Security',
    'Fast & Reliable Performance',
    'Cloud-Native Architecture',
    'Scalable Infrastructure',
    '24/7 Monitoring & Support',
    'Continuous Innovation',
    'Experienced Engineering',
  ];

  return (
    <section className="py-24 relative bg-[#020712]">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="WHY CHOOSE US?" 
            subtitle="Advantages"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {reasons.map((reason, idx) => (
            <StaggerItem key={idx}>
              <motion.div 
                whileHover={{ y: -4, borderColor: "rgba(0,217,255,0.4)", backgroundColor: "#071625" }}
                className="flex items-center gap-3 p-4 bg-[#05101A] border border-[#00D9FF]/10 rounded-lg transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,217,255,0.1)]"
              >
                <ShieldCheck className="w-5 h-5 text-[#00D9FF] shrink-0 opacity-80" />
                <span className="text-[#F5F7FA] font-medium text-[13px] leading-tight">{reason}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
