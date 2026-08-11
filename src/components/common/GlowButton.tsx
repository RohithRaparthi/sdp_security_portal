import React from 'react';
import { cn } from '../../utils/cn';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseClasses = "relative inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-lg transition-all duration-300 overflow-hidden";
  
  const variants = {
    primary: "bg-[#00D9FF] text-[#020712] hover:bg-[#13C8F5] glow-cyan hover:glow-cyan-strong",
    secondary: "bg-[#071625]/80 text-[#00D9FF] border border-[#00D9FF]/30 hover:border-[#00D9FF]/60 hover:bg-[#071625] hover:shadow-[0_0_15px_rgba(0,217,255,0.2)] backdrop-blur-sm",
    outline: "bg-transparent text-[#F5F7FA] border border-[#A8B4C3]/30 hover:border-[#F5F7FA]/70 hover:bg-white/5",
  };

  return (
    <button 
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
