import React from 'react';
import { Target, Lightbulb, Shield, Award, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const CompanyStory: React.FC = () => {
  const storyMilestones = [
    {
      year: 'VISION',
      title: 'Global Leadership in Trusted AI',
      desc: 'Empowering organizations worldwide to innovate fearlessly with zero-compromise AI safety, cryptographic resilience, and privacy-first systems.',
      icon: <Lightbulb size={22} className="text-[#00D9FF]" />,
      color: '#00D9FF'
    },
    {
      year: 'MISSION',
      title: 'Bridging Intelligence & Security',
      desc: 'Engineering high-performance artificial intelligence platforms that safeguard sensitive communications, proprietary intellectual property, and enterprise data.',
      icon: <Target size={22} className="text-[#8CC63F]" />,
      color: '#8CC63F'
    },
    {
      year: 'VALUES',
      title: 'Zero-Trust, Verifiable Autonomy',
      desc: 'We operate on verifiable cryptographic proof, sub-millisecond efficiency, and uncompromising transparency across every layer of software.',
      icon: <Shield size={22} className="text-[#A855F7]" />,
      color: '#A855F7'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020712] border-t border-[#00D9FF]/10">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-4 glow-cyan">
              <Sparkles size={14} className="text-[#00D9FF]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                Company Story
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5F7FA] tracking-tight mb-4">
              BUILDING SYSTEMS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#13C8F5] to-[#8CC63F]">PEOPLE CAN TRUST</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8B4C3] max-w-xl mx-auto leading-relaxed">
              SDP Innovation Pvt. Ltd. pioneers the convergence of frontier artificial intelligence, cyber-defense architecture, and spatial computing.
            </p>
          </div>
        </ScrollReveal>

        {/* Storytelling Timeline Cards */}
        <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {storyMilestones.map((item, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-[#05101A] border border-[#1A2E44] rounded-3xl p-8 flex flex-col justify-between h-full hover:border-[#00D9FF]/40 transition-all shadow-xl hover:shadow-[0_10px_35px_rgba(0,217,255,0.15)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${item.color}15`, borderColor: `${item.color}40` }}
                    >
                      {item.icon}
                    </div>
                    <span 
                      className="text-xs font-mono font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider"
                      style={{ color: item.color, borderColor: `${item.color}40`, backgroundColor: `${item.color}10` }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#A8B4C3] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1A2E44] flex items-center gap-2 text-[10px] font-mono text-[#667789]">
                  <Award size={12} className="text-[#8CC63F]" />
                  <span>SDP INNOVATION CORE PRINCIPLE</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
