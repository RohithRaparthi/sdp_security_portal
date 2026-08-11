import React from 'react';
import { cn } from '../../utils/cn';
import type { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  variant?: 'cyan' | 'green' | 'purple' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const IconBadge: React.FC<IconBadgeProps> = ({
  icon: Icon,
  variant = 'cyan',
  size = 'md',
  className
}) => {
  const sizes = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-3.5"
  };

  const variants = {
    cyan: "bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30",
    green: "bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/30",
    purple: "bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30",
    outline: "bg-transparent text-[#A8B4C3] border border-[#A8B4C3]/20"
  };

  return (
    <div className={cn(
      "flex items-center justify-center rounded-lg transition-colors",
      sizes[size],
      variants[variant],
      className
    )}>
      <Icon className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
};
