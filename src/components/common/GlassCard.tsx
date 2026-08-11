import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
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
  const baseClasses = "rounded-xl relative overflow-hidden backdrop-blur-md transition-colors duration-300 group";
  
  const variants = {
    default: "bg-[#071625]/70 border border-[#00D9FF]/10",
    cyan: "bg-[#071625]/70 border border-[#00D9FF]/20",
    green: "bg-[#071625]/70 border border-[#8CC63F]/20",
    purple: "bg-[#071625]/70 border border-[#A855F7]/20",
  };

  const hoverBorders = {
    default: "hover:border-[#00D9FF]/40 hover:shadow-[0_8px_30px_rgba(0,217,255,0.12)]",
    cyan: "hover:border-[#00D9FF]/60 hover:shadow-[0_8px_30px_rgba(0,217,255,0.2)]",
    green: "hover:border-[#8CC63F]/60 hover:shadow-[0_8px_30px_rgba(140,198,63,0.2)]",
    purple: "hover:border-[#A855F7]/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.2)]",
  };

  return (
    <motion.div 
      whileHover={hoverEffect ? { y: -6, scale: 1.015 } : undefined}
      whileTap={hoverEffect ? { scale: 0.99 } : undefined}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={cn(
        baseClasses, 
        variants[variant], 
        hoverEffect && hoverBorders[variant],
        className
      )} 
      {...props}
    >
      {/* Light sheen effect on hover */}
      {hoverEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};
