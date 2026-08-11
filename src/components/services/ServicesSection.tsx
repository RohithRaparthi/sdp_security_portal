import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { services } from '../../data/content';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-[#030B16]">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <SectionHeader 
          title="OUR SERVICES" 
          subtitle="Expertise"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-[#030B16] border border-[#00D9FF]/5 rounded-xl p-6 transition-colors duration-300 hover:border-[#00D9FF]/20 hover:bg-[#05101A] overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-[#00D9FF]/10 rounded-full blur-[20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="w-10 h-10 rounded-lg bg-[#00D9FF]/5 border border-[#00D9FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D9FF]/10 transition-colors">
                  <Icon className="w-5 h-5 text-[#00D9FF] opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-[#F5F7FA] font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-[#A8B4C3] text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
