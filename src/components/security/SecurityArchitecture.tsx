import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { User, Fingerprint, Layout, Network, Database, Server, Shield } from 'lucide-react';

export const SecurityArchitecture: React.FC = () => {
  const layers = [
    { icon: User, title: 'USER', desc: 'Endpoint & Access' },
    { icon: Fingerprint, title: 'IDENTITY', desc: 'Authentication & IAM' },
    { icon: Layout, title: 'APPLICATION', desc: 'Frontend & UI' },
    { icon: Network, title: 'API', desc: 'Gateway & Routing' },
    { icon: Database, title: 'DATA', desc: 'Storage & Encryption' },
    { icon: Server, title: 'INFRASTRUCTURE', desc: 'Cloud & Network' },
    { icon: Shield, title: 'AI SECURITY ENGINE', desc: 'Core Intelligence' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#020712] border-t border-[#00D9FF]/10">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <SectionHeader 
          title="SECURITY BY DESIGN" 
          subtitle="Architecture"
          description="A multi-layered defense strategy ensuring protection at every level of the technology stack."
        />

        <div className="mt-16 relative">
          
          {/* Connecting Line (Horizontal Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-gradient-to-r from-[#00D9FF]/10 via-[#00D9FF]/50 to-[#00D9FF]"></div>
          
          {/* Connecting Line (Vertical Mobile/Tablet) */}
          <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#00D9FF]/10 via-[#00D9FF]/50 to-[#00D9FF]"></div>

          <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isLast = index === layers.length - 1;
              
              return (
                <div key={index} className="flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-4 relative group lg:flex-1">
                  
                  {/* Node */}
                  <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-[#030B16] border-2 border-[#00D9FF] flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.2)] group-hover:bg-[#00D9FF]/10 transition-colors">
                    <Icon className="text-[#00D9FF] w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:text-center w-full">
                    <div className="bg-[#071625]/60 border border-[#00D9FF]/10 p-3 rounded-xl backdrop-blur-sm group-hover:border-[#00D9FF]/30 transition-colors">
                      <h4 className="text-[#F5F7FA] font-bold text-sm xl:text-base whitespace-nowrap">{layer.title}</h4>
                      <p className="text-[#A8B4C3] text-xs mt-1">{layer.desc}</p>
                    </div>
                  </div>

                  {/* Desktop Arrow (between nodes) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-[28px] right-[-15%] xl:right-[-20%] text-[#00D9FF] -translate-y-1/2 opacity-50 z-20">
                      &rarr;
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
