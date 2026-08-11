import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '../../utils/cn';

export const SecurityVisual: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[450px] mx-auto flex items-center justify-center">
      {/* Background Rings - Technical & Precise */}
      <div className="absolute inset-[5%] rounded-full border border-[#00D9FF]/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00D9FF]/5 via-transparent to-transparent animate-[spin_120s_linear_infinite]"></div>
      <div className="absolute inset-[20%] rounded-full border border-[#00D9FF]/10 border-dashed animate-[spin_60s_linear_infinite_reverse]"></div>
      <div className="absolute inset-[35%] rounded-full border border-[#00D9FF]/20 shadow-[0_0_20px_rgba(0,217,255,0.05)]"></div>

      {/* Connection Lines (Abstract, Sharp) */}
      <div className="absolute top-1/2 left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/20 to-transparent"></div>
      <div className="absolute left-1/2 top-[5%] bottom-[5%] w-[1px] bg-gradient-to-b from-transparent via-[#00D9FF]/20 to-transparent"></div>

      {/* Central Shield - Enterprise Refined */}
      <div className="relative z-10 w-36 h-44 bg-[#05101A]/90 backdrop-blur-md border border-[#00D9FF]/50 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.15)] animate-slow-pulse overflow-hidden">
        {/* Inner grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,217,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,1)_1px,transparent_1px)] bg-[size:8px_8px]"></div>
        
        <div className="relative z-20 flex flex-col items-center">
          <Shield className="w-10 h-10 text-[#00D9FF] mb-2 drop-shadow-[0_0_8px_rgba(0,217,255,0.5)]" strokeWidth={1.5} />
          <span className="text-[#F5F7FA] font-black tracking-widest text-xl">AI</span>
        </div>
      </div>

      {/* Security Nodes - Precise placement */}
      <SecurityNode label="Threat Detection" top="12%" left="18%" delay="0s" />
      <SecurityNode label="Zero Trust" top="22%" right="12%" delay="1s" />
      <SecurityNode label="Data Protection" bottom="28%" left="15%" delay="2s" />
      <SecurityNode label="Encryption" bottom="18%" right="20%" delay="3s" />
      <SecurityNode label="Monitoring" top="48%" right="5%" delay="1.5s" />
    </div>
  );
};

interface SecurityNodeProps {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  delay: string;
}

const SecurityNode: React.FC<SecurityNodeProps> = ({ label, top, bottom, left, right, delay }) => {
  return (
    <div 
      className="absolute flex items-center gap-2 group cursor-default z-20"
      style={{ top, bottom, left, right }}
    >
      <div className="relative flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-[#00D9FF] relative z-10"></div>
        <div className={cn(
          "w-2 h-2 rounded-full bg-[#00D9FF] absolute inset-0 opacity-50",
          "animate-ping"
        )} style={{ animationDuration: '4s', animationDelay: delay }}></div>
      </div>
      
      <div className="bg-[#05101A]/95 border border-[#00D9FF]/20 px-2.5 py-1 rounded-sm text-[10px] font-mono text-[#00D9FF] tracking-wider whitespace-nowrap opacity-80 group-hover:opacity-100 transition-opacity hidden md:block">
        {label}
      </div>
    </div>
  );
};
