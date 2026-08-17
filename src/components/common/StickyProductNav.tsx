import React, { useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface NavSection {
  id: string;
  label: string;
}

interface StickyProductNavProps {
  productName: string;
  productBadge: string;
  badgeColor?: 'green' | 'purple' | 'cyan';
  sections: NavSection[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const StickyProductNav: React.FC<StickyProductNavProps> = ({
  productName,
  productBadge,
  badgeColor = 'cyan',
  sections,
  ctaLabel = 'Launch Studio',
  onCtaClick,
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);

      // Determine active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badgeStyles = {
    green: 'bg-[#8CC63F]/15 text-[#8CC63F] border-[#8CC63F]/30',
    purple: 'bg-[#A855F7]/15 text-[#A855F7] border-[#A855F7]/30',
    cyan: 'bg-[#00D9FF]/15 text-[#00D9FF] border-[#00D9FF]/30',
  };

  return (
    <div className={cn(
      "sticky top-20 z-40 transition-all duration-300 w-full mb-8",
      isSticky ? "opacity-100 translate-y-0" : "opacity-95"
    )}>
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="bg-[#05101A]/90 border border-white/10 backdrop-blur-xl rounded-2xl px-5 py-2.5 flex items-center justify-between shadow-2xl shadow-black/60 overflow-x-auto no-scrollbar gap-4">
          
          {/* Product Title & Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-sm font-bold text-[#F5F7FA] tracking-wide">{productName}</span>
            <span className={cn("text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border", badgeStyles[badgeColor])}>
              {productBadge}
            </span>
          </div>

          {/* Section Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer whitespace-nowrap",
                  activeSection === sec.id
                    ? badgeColor === 'green' ? "bg-[#8CC63F]/20 text-[#8CC63F] font-bold" :
                      badgeColor === 'purple' ? "bg-[#A855F7]/20 text-[#A855F7] font-bold" :
                      "bg-[#00D9FF]/20 text-[#00D9FF] font-bold"
                    : "text-[#A8B4C3] hover:text-[#F5F7FA] hover:bg-white/5"
                )}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* CTA Action */}
          {onCtaClick && (
            <div className="shrink-0 hidden sm:block">
              <button
                onClick={onCtaClick}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-xs font-bold text-[#020712] transition-all cursor-pointer shadow-md",
                  badgeColor === 'green' ? "bg-[#8CC63F] hover:bg-[#A3D63C]" :
                  badgeColor === 'purple' ? "bg-[#A855F7] text-white hover:bg-[#9333EA]" :
                  "bg-[#00D9FF] hover:bg-[#13C8F5]"
                )}
              >
                {ctaLabel}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
