import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col gap-3 md:gap-4 mb-12 md:mb-16",
      align === 'center' ? "items-center text-center" : "items-start text-left",
      className
    )}>
      {subtitle && (
        <span className="text-[11px] md:text-[13px] font-bold tracking-[0.2em] text-[#00D9FF] uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight text-[#F5F7FA]">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-[17px] text-[#A8B4C3] max-w-2xl leading-relaxed mt-2">
          {description}
        </p>
      )}
    </div>
  );
};
