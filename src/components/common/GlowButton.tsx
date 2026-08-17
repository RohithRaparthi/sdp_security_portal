import React from 'react';
import { cn } from '../../utils/cn';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface GlowButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'purple' | 'green';
  children: React.ReactNode;
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseClasses = "relative inline-flex items-center justify-center px-6 py-3 font-semibold text-sm rounded-xl transition-all duration-300 overflow-hidden cursor-pointer select-none group";
  
  const variants = {
    primary: "bg-[#00D9FF] text-[#020712] hover:bg-[#13C8F5] glow-cyan hover:glow-cyan-strong shadow-[0_0_25px_rgba(0,217,255,0.35)] hover:shadow-[0_0_35px_rgba(0,217,255,0.6)] font-black tracking-wide",
    secondary: "bg-[#071625]/90 text-[#00D9FF] border border-[#00D9FF]/40 hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] backdrop-blur-md font-bold",
    purple: "bg-[#A855F7] text-white hover:bg-[#9333EA] shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] font-black tracking-wide",
    green: "bg-[#8CC63F] text-[#020712] hover:bg-[#A3D63C] shadow-[0_0_25px_rgba(140,198,63,0.4)] hover:shadow-[0_0_35px_rgba(140,198,63,0.7)] font-black tracking-wide",
    outline: "bg-transparent text-[#F5F7FA] border border-white/20 hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 font-bold",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    >
      {/* Radiant shimmer light streak */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
      
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
