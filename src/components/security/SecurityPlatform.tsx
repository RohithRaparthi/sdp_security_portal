import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { securityFeaturesLeft, securityFeaturesRight } from '../../data/content';
import { Shield, ShieldAlert, Cpu } from 'lucide-react';
import { cn } from '../../utils/cn';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const SecurityPlatform: React.FC = () => {
  return (
    <section id="security" className="py-24 relative overflow-hidden bg-[#030B16]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D9FF]/5 via-[#020712] to-[#020712]"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="AI SECURITY PLATFORM" 
            subtitle="Enterprise Security Engine"
            description="Protect every user, every device, every application, and every interaction with intelligent security."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-16">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <StaggerContainer staggerDelay={0.1}>
              {securityFeaturesLeft.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <FeatureItem text={feature} align="right" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Center Visual */}
          <ScrollReveal direction="up" delay={0.2} className="lg:col-span-4 relative flex items-center justify-center py-12 lg:py-0">
            <div className="relative w-64 h-80 flex items-center justify-center">
              {/* Glow Behind */}
              <div className="absolute inset-0 bg-[#00D9FF]/10 rounded-full blur-[40px]"></div>
              
              {/* Outer Rings */}
              <div className="absolute inset-[-20%] rounded-full border border-[#00D9FF]/10 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-[-10%] rounded-full border border-[#00D9FF]/20 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>
              
              {/* Core Shield Component */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full bg-[#05101A]/90 backdrop-blur-md border border-[#00D9FF]/60 rounded-2xl flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,217,255,0.15)] overflow-hidden z-10 cursor-pointer transition-shadow hover:shadow-[0_0_35px_rgba(0,217,255,0.3)]"
              >
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,217,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF]/80 to-transparent"></div>

                <Cpu className="w-16 h-16 text-[#00D9FF] mb-4 opacity-50 relative z-10" strokeWidth={1} />
                <Shield className="absolute text-[#00D9FF] w-8 h-8 opacity-90 animate-slow-pulse z-10" />
                
                <div className="mt-8 flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 text-[#00D9FF] text-[10px] font-mono font-bold tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full animate-pulse shadow-[0_0_5px_#00D9FF]"></span>
                    Engine Active
                  </div>
                  <div className="text-[10px] text-[#A8B4C3] font-mono tracking-wider opacity-60">
                    REAL-TIME MONITORING
                  </div>
                </div>
              </motion.div>

              {/* Decorative Connections */}
              <div className="absolute top-1/2 -left-[50%] w-[50%] h-[1px] bg-gradient-to-r from-transparent to-[#00D9FF]/40 hidden lg:block"></div>
              <div className="absolute top-1/2 -right-[50%] w-[50%] h-[1px] bg-gradient-to-l from-transparent to-[#00D9FF]/40 hidden lg:block"></div>
            </div>
          </ScrollReveal>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <StaggerContainer staggerDelay={0.1}>
              {securityFeaturesRight.map((feature, idx) => (
                <StaggerItem key={idx}>
                  <FeatureItem text={feature} align="left" />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{ text: string, align: 'left' | 'right' }> = ({ text, align }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03, x: align === 'left' ? 4 : -4 }}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg border border-transparent hover:bg-[#071625]/80 hover:border-[#00D9FF]/30 transition-all duration-300 cursor-default",
        align === 'right' ? "lg:flex-row-reverse text-left lg:text-right" : "flex-row text-left"
      )}
    >
      <div className="w-8 h-8 rounded bg-[#00D9FF]/10 flex items-center justify-center shrink-0 border border-[#00D9FF]/20">
        <ShieldAlert className="w-4 h-4 text-[#00D9FF]" />
      </div>
      <span className="text-[#F5F7FA] font-medium text-sm">{text}</span>
    </motion.div>
  );
};
