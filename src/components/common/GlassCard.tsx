import React from 'react';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'green' | 'purple' | 'default';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  variant = 'default',
  hoverEffect = false,
  ...props
}) => {
  const baseClasses = "rounded-xl relative overflow-hidden backdrop-blur-md transition-all duration-300";
  
  const variants = {
    default: "bg-[#071625]/70 border border-[#00D9FF]/10",
    cyan: "bg-[#071625]/70 border border-[#00D9FF]/20",
    green: "bg-[#071625]/70 border border-[#8CC63F]/20",
    purple: "bg-[#071625]/70 border border-[#A855F7]/20",
  };
  
  const hoverClasses = hoverEffect 
    ? "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/50" 
    : "";

  const hoverBorders = {
    default: "hover:border-[#00D9FF]/30",
    cyan: "hover:border-[#00D9FF]/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.15)]",
    green: "hover:border-[#8CC63F]/50 hover:shadow-[0_0_15px_rgba(140,198,63,0.15)]",
    purple: "hover:border-[#A855F7]/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]",
  };

  return (
    <div 
      className={cn(
        baseClasses, 
        variants[variant], 
        hoverEffect && hoverClasses,
        hoverEffect && hoverBorders[variant],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};
