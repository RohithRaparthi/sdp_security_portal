import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Building2, HeartPulse, GraduationCap, Landmark, Factory, ShoppingCart, Truck, Umbrella, ShoppingBag, Rocket, Briefcase } from 'lucide-react';

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
        <SectionHeader 
          title="INDUSTRIES WE SERVE" 
          subtitle="Sectors"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 justify-center">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-center justify-center p-4 bg-[#05101A] border border-[#00D9FF]/5 rounded-lg hover:border-[#00D9FF]/20 hover:bg-[#071625] transition-colors group cursor-default"
              >
                <Icon className="w-6 h-6 text-[#A8B4C3] group-hover:text-[#00D9FF] transition-colors mb-2" strokeWidth={1.5} />
                <span className="text-[#F5F7FA] font-medium text-[11px] xl:text-xs text-center uppercase tracking-wider">{ind.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
