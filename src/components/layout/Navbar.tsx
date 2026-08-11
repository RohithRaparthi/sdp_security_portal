import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { cn } from '../../utils/cn';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Security', href: '#security' },
    { name: 'Services', href: '#services' },
    { name: 'Technology', href: '#technology' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-[#020712]/90 backdrop-blur-md border-[#00D9FF]/10 shadow-lg shadow-black/20 py-2" 
        : "bg-transparent border-transparent py-4"
    )}>
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3 z-50">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8CC63F] to-[#4D7C0F] flex items-center justify-center shadow-[0_0_15px_rgba(140,198,63,0.3)]">
            <span className="text-[#020712] font-black text-xl tracking-tighter">S</span>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[#F5F7FA] font-bold text-lg leading-tight tracking-wide">SDP</span>
            <span className="text-[#A8B4C3] text-[10px] leading-tight font-medium">Secure Data Protection<br/>Innovations Pvt. Ltd.</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-medium text-[#A8B4C3] hover:text-[#00D9FF] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00D9FF] transition-all duration-300 group-hover:w-full rounded-full glow-cyan"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="text-sm font-medium text-[#F5F7FA] hover:text-[#00D9FF] transition-colors">
            Talk to Sales
          </a>
          <GlowButton variant="secondary" className="py-2 px-5 text-sm">
            Request Demo
          </GlowButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-[#F5F7FA] p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-[#020712]/95 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <ul className="flex flex-col items-center gap-6 mb-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-xl font-semibold text-[#F5F7FA] hover:text-[#00D9FF] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 w-[200px]">
          <GlowButton variant="secondary" onClick={() => setIsMobileMenuOpen(false)}>
            Talk to Sales
          </GlowButton>
          <GlowButton variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
            Request Demo
          </GlowButton>
        </div>
      </div>
    </nav>
  );
};
