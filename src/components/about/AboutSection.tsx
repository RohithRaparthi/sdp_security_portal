import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Target, Lightbulb, Brain, Shield, Clock, Award, Zap, Lock, Users, Activity } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#020712]">
      <div className="absolute left-[-10%] bottom-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#8CC63F]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Content */}
          <ScrollReveal direction="right" delay={0.1}>
            <div>
              <SectionHeader 
                title="ABOUT SDP INNOVATION" 
                subtitle="Company"
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-6 text-[#A8B4C3] text-lg leading-relaxed mb-12">
                <p>
                  SDP Innovation Pvt. Ltd. is a forward-thinking technology company focused on building secure, intelligent, and scalable digital solutions.
                </p>
                <p>
                  We combine artificial intelligence, cybersecurity, software engineering, and cloud technologies to help businesses communicate securely, operate efficiently, and innovate confidently.
                </p>
              </div>

              {/* About Badges */}
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <StaggerItem>
                  <motion.div whileHover={{ y: -4, borderColor: "rgba(0,217,255,0.4)" }} className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center cursor-default transition-colors">
                    <Brain className="w-6 h-6 text-[#8CC63F] mb-3" />
                    <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">AI-Powered<br/>Solutions</span>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div whileHover={{ y: -4, borderColor: "rgba(0,217,255,0.4)" }} className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center cursor-default transition-colors">
                    <Shield className="w-6 h-6 text-[#8CC63F] mb-3" />
                    <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">Security<br/>First</span>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div whileHover={{ y: -4, borderColor: "rgba(0,217,255,0.4)" }} className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center cursor-default transition-colors">
                    <Clock className="w-6 h-6 text-[#8CC63F] mb-3" />
                    <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">24/7<br/>Monitoring</span>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div whileHover={{ y: -4, borderColor: "rgba(0,217,255,0.4)" }} className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center cursor-default transition-colors">
                    <Award className="w-6 h-6 text-[#8CC63F] mb-3" />
                    <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">Enterprise<br/>Ready</span>
                  </motion.div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </ScrollReveal>

          {/* Vision/Mission Cards */}
          <ScrollReveal direction="left" delay={0.2} className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.02, borderColor: "rgba(0,217,255,0.5)" }}
              className="bg-[#071625]/80 border border-[#00D9FF]/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group transition-all shadow-sm hover:shadow-[0_8px_30px_rgba(0,217,255,0.15)]"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-[30px] group-hover:bg-[#00D9FF]/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FA]">VISION</h3>
              </div>
              <p className="text-[#A8B4C3] leading-relaxed relative z-10">
                To become a global leader in AI-driven security solutions that empower organizations to operate in a safer, smarter, and connected digital world.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, borderColor: "rgba(140,198,63,0.5)" }}
              className="bg-[#071625]/80 border border-[#8CC63F]/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group transition-all shadow-sm hover:shadow-[0_8px_30px_rgba(140,198,63,0.15)]"
            >
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#8CC63F]/10 rounded-full blur-[30px] group-hover:bg-[#8CC63F]/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#8CC63F]/10 border border-[#8CC63F]/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#8CC63F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FA]">MISSION</h3>
              </div>
              <p className="text-[#A8B4C3] leading-relaxed relative z-10">
                To innovate and deliver secure, scalable, and intelligent AI applications that protect businesses and simplify lives.
              </p>
            </motion.div>

            {/* Vision/Mission Badges */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-4 pt-6 border-t border-[#00D9FF]/10">
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-2 group cursor-default">
                <Zap className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">INNOVATE</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-2 group cursor-default">
                <Lock className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">PROTECT</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-2 group cursor-default">
                <Users className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">EMPOWER</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center gap-2 group cursor-default">
                <Activity className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">TRANSFORM</span>
              </motion.div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
