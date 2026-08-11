import React from 'react';
import { GlowButton } from '../common/GlowButton';
import { SecurityVisual } from './SecurityVisual';
import { ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center" id="home">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#020712]"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00D9FF]/5 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#8CC63F]/5 blur-[120px]"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-16 lg:mb-24">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071625] border border-[#00D9FF]/30 mb-8 glow-cyan">
              <ShieldCheck className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-[11px] font-bold tracking-widest text-[#00D9FF] uppercase">
                AI-Powered Security Platform
              </span>
            </div>

            <h1 className="text-fluid-h1 font-extrabold text-[#F5F7FA] mb-6 text-glow">
              AI BUILD<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#176BFF]">
                SECURITY PORTAL
              </span>
            </h1>

            <div className="flex flex-col gap-1 mb-6 border-l-2 border-[#8CC63F] pl-5">
              <p className="text-xl md:text-2xl font-medium text-[#F5F7FA]">Secure Intelligence.</p>
              <p className="text-xl md:text-2xl font-medium text-[#F5F7FA]">Trusted Innovation.</p>
              <p className="text-xl md:text-2xl font-medium text-[#F5F7FA]">Future-Ready AI.</p>
            </div>

            <p className="text-lg text-[#A8B4C3] max-w-xl leading-relaxed mb-10">
              Build, protect, and scale intelligent applications with enterprise-grade AI security, privacy-first architecture, and real-time protection.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <GlowButton variant="primary">
                Explore Platform &rarr;
              </GlowButton>
              <GlowButton variant="secondary">
                Request Demo
              </GlowButton>
              <a href="#contact" className="ml-4 text-sm font-semibold text-[#A8B4C3] hover:text-[#F5F7FA] transition-colors">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <SecurityVisual />
          </div>

        </div>

        {/* Feature Badges Strip */}
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-center gap-6 md:gap-12 pt-8 border-t border-[#00D9FF]/10">
          <FeatureBadge icon={<ShieldCheck size={18} />} label="SECURE" />
          <FeatureBadge icon={<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>} label="SMART" />
          <FeatureBadge icon={<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 3l-6 6"></path><path d="M21 3v6"></path><path d="M21 3h-6"></path><path d="M3 21l6-6"></path><path d="M3 21v-6"></path><path d="M3 21h6"></path></svg>} label="SCALABLE" />
          <FeatureBadge icon={<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>} label="INTELLIGENT" />
        </div>
      </div>
    </section>
  );
};

const FeatureBadge: React.FC<{ icon: React.ReactNode, label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-2 text-[#A8B4C3] group hover:text-[#00D9FF] transition-colors">
    <div className="text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors">
      {icon}
    </div>
    <span className="text-xs font-bold tracking-widest">{label}</span>
  </div>
);
