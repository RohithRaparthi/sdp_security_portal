import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ShieldCheck } from 'lucide-react';

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
        <SectionHeader 
          title="WHY CHOOSE US?" 
          subtitle="Advantages"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {reasons.map((reason, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 p-4 bg-[#05101A] border border-[#00D9FF]/5 rounded-lg hover:border-[#00D9FF]/20 hover:bg-[#071625] transition-colors"
            >
              <ShieldCheck className="w-5 h-5 text-[#00D9FF] shrink-0 opacity-80" />
              <span className="text-[#F5F7FA] font-medium text-[13px] leading-tight">{reason}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
