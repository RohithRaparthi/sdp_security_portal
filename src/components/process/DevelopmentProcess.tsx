import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const DevelopmentProcess: React.FC = () => {
  const steps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Understanding goals, challenges, users, and security requirements.' },
    { num: '02', title: 'UI/UX Design', desc: 'Designing intuitive and engaging experiences.' },
    { num: '03', title: 'AI Model Development', desc: 'Building and integrating intelligent AI models.' },
    { num: '04', title: 'Secure Development', desc: 'Developing applications using security-first engineering practices.' },
    { num: '05', title: 'Testing & QA', desc: 'Rigorous functional, security, performance, and usability testing.' },
    { num: '06', title: 'Deployment', desc: 'Secure and scalable deployment.' },
    { num: '07', title: 'Monitoring & Support', desc: 'Continuous monitoring, optimization, and support.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030B16]">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="OUR DEVELOPMENT PROCESS" 
            subtitle="Methodology"
          />
        </ScrollReveal>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block mt-20 relative">
          
          {/* Animated Connecting Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-[24px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#00D9FF]/10 via-[#00D9FF]/60 to-[#00D9FF]/10 origin-left"
          />

          <StaggerContainer staggerDelay={0.15} className="flex justify-between items-start relative z-10">
            {steps.map((step, idx) => (
              <StaggerItem key={idx} className="relative flex flex-col items-center text-center flex-1 px-2 group">
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  className="w-12 h-12 rounded-full bg-[#020712] border-2 border-[#00D9FF] flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(0,217,255,0.2)] mb-6 group-hover:bg-[#00D9FF] group-hover:shadow-[0_0_25px_rgba(0,217,255,0.5)] transition-all duration-300 cursor-pointer"
                >
                  <span className="font-bold text-[#00D9FF] group-hover:text-[#020712] transition-colors">{step.num}</span>
                </motion.div>
                <h4 className="text-[#F5F7FA] font-bold text-xs xl:text-sm mb-2 min-h-[40px]">{step.title}</h4>
                <p className="text-[#A8B4C3] text-[11px] xl:text-xs leading-relaxed max-w-[150px]">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden flex flex-col mt-12 relative pl-6">
          {/* Connecting Line */}
          <div className="absolute top-4 bottom-4 left-[34px] w-[1px] bg-[#00D9FF]/20"></div>

          <StaggerContainer staggerDelay={0.1}>
            {steps.map((step, idx) => (
              <StaggerItem key={idx} className="relative flex gap-6 items-start mb-8 last:mb-0 group">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 shrink-0 rounded-full bg-[#020712] border-2 border-[#00D9FF] flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(0,217,255,0.2)]"
                >
                  <span className="font-bold text-[#00D9FF] text-sm">{step.num}</span>
                </motion.div>
                <div className="pt-2">
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">{step.title}</h4>
                  <p className="text-[#A8B4C3] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};
