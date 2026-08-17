import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface HorizontalRailProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  showControls?: boolean;
}

export const HorizontalRail: React.FC<HorizontalRailProps> = ({
  children,
  className,
  showControls = true,
}) => {
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  const checkScroll = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [children]);

  const scrollBy = (offset: number) => {
    if (railRef.current) {
      railRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!railRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - railRef.current.offsetLeft);
    setScrollLeftState(railRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !railRef.current) return;
    e.preventDefault();
    const x = e.pageX - railRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    railRef.current.scrollLeft = scrollLeftState - walk;
    checkScroll();
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative group/rail w-full">
      {/* Scroll Controls (Desktop) */}
      {showControls && (
        <>
          <button
            onClick={() => scrollBy(-400)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={cn(
              "absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#05101A]/90 border border-[#00D9FF]/30 text-[#00D9FF] flex items-center justify-center backdrop-blur-md shadow-lg transition-all",
              canScrollLeft 
                ? "opacity-0 group-hover/rail:opacity-100 hover:scale-110 hover:bg-[#071625] cursor-pointer" 
                : "opacity-0 pointer-events-none"
            )}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scrollBy(400)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={cn(
              "absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#05101A]/90 border border-[#00D9FF]/30 text-[#00D9FF] flex items-center justify-center backdrop-blur-md shadow-lg transition-all",
              canScrollRight 
                ? "opacity-0 group-hover/rail:opacity-100 hover:scale-110 hover:bg-[#071625] cursor-pointer" 
                : "opacity-0 pointer-events-none"
            )}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Rail Scroll Container */}
      <div
        ref={railRef}
        onScroll={checkScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className={cn(
          "flex items-stretch gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing snap-x select-none",
          className
        )}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>
    </div>
  );
};
