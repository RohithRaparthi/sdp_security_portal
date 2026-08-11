import React from 'react';

export const TrustStrip: React.FC = () => {
  const values = [
    'ENTERPRISE GRADE',
    'AI POWERED',
    'PRIVACY FIRST',
    'ZERO TRUST',
    'REAL-TIME SECURITY',
    'SCALABLE INFRASTRUCTURE'
  ];

  return (
    <div className="border-y border-[#00D9FF]/10 bg-[#020712]/50 backdrop-blur-md relative z-20 py-4 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
          {values.map((value, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#00D9FF] rounded-full shadow-[0_0_8px_#00D9FF]"></span>
              <span className="text-[11px] font-bold tracking-[0.15em] text-[#A8B4C3] uppercase whitespace-nowrap">
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
