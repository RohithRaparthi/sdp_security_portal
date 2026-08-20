import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Sparkles, Shirt, ShieldCheck, Lock } from 'lucide-react';
import { GlowButton } from '../common/GlowButton';
import { cn } from '../../utils/cn';
import { useNavigation, type PageId } from '../../utils/router';
import sdpLogo from '../../assets/sdp-logo.jpg';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Products', isDropdown: true },
    { name: 'Security', action: () => navigateTo('home', '#security-architecture') },
    { name: 'Solutions', action: () => navigateTo('home', '#services') },
    { name: 'Company', action: () => navigateTo('home', '#about') },
  ];

  const aiProducts: Array<{ id: PageId; name: string; subtitle: string; icon: React.ReactNode; color: string; badge: string; preview: string; cta: string }> = [
    {
      id: 'ai-build',
      name: 'AI BUILD SECURITY',
      subtitle: 'Zero-Trust AI Firewall & Real-Time SOC Portal',
      icon: <ShieldCheck className="w-5 h-5 text-[#00D9FF]" />,
      color: 'border-[#00D9FF]/40 hover:border-[#00D9FF]',
      badge: 'FLAGSHIP SOC',
      preview: 'Pre-inference threat intelligence & prompt injection AST defense.',
      cta: 'Open Console →'
    },
    {
      id: 's-chat',
      name: 'S-CHAT AI',
      subtitle: 'Post-Quantum Encrypted Communication Platform',
      icon: <Lock className="w-5 h-5 text-[#8CC63F]" />,
      color: 'border-[#8CC63F]/40 hover:border-[#8CC63F]',
      badge: 'KYBER-1024',
      preview: 'Post-Quantum key encapsulation & hardware anti-screen capture.',
      cta: 'Launch Chat →'
    },
    {
      id: 'outfit-ai',
      name: 'OUTFIT AI',
      subtitle: 'Spatial Generative Fashion & 3D Dressing Room',
      icon: <Shirt className="w-5 h-5 text-[#A855F7]" />,
      color: 'border-[#A855F7]/40 hover:border-[#A855F7]',
      badge: 'SPATIAL 3D',
      preview: '85+ body measurement points with sub-600ms neural fabric drape.',
      cta: 'Launch Studio →'
    }
  ];

  const handleProductSelect = (pageId: PageId) => {
    setIsProductsDropdownOpen(false);
    setIsMobileMenuOpen(false);
    navigateTo(pageId);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled || currentPage !== 'home'
        ? "bg-[#020712]/90 backdrop-blur-xl border-b border-[#00D9FF]/20 shadow-2xl py-3" 
        : "bg-transparent border-b border-transparent py-5"
    )}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => navigateTo('home')}
          className="flex items-center gap-3 z-50 cursor-pointer group"
        >
          <img 
            src={sdpLogo} 
            alt="SDP Logo" 
            className="h-12 w-auto object-contain rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform" 
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            
            {/* Products Mega Dropdown Link */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                className={cn(
                  "text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 py-1 transition-colors cursor-pointer",
                  currentPage !== 'home' ? "text-[#00D9FF]" : "text-[#A8B4C3] hover:text-[#00D9FF]"
                )}
              >
                <Sparkles size={13} className="text-[#00D9FF]" />
                <span>Products</span>
                <ChevronDown size={13} className={cn("transition-transform duration-200", isProductsDropdownOpen ? "rotate-180" : "")} />
              </button>

              {/* Large Visual Mega Menu */}
              {isProductsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-[#05101A]/95 border border-[#00D9FF]/40 rounded-3xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-2 pb-4 border-b border-[#1A2E44] mb-4 flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#F5F7FA] uppercase tracking-wider">
                      SDP Intelligent AI Worlds
                    </span>
                    <span className="text-[#00D9FF]">3 DEDICATED PLATFORMS</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {aiProducts.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => handleProductSelect(prod.id)}
                        className={cn(
                          "p-4 rounded-2xl bg-[#020712] border transition-all cursor-pointer flex flex-col justify-between group/card hover:scale-[1.02]",
                          prod.color
                        )}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="p-2 rounded-xl bg-[#071625] border border-white/10">
                              {prod.icon}
                            </div>
                            <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#A8B4C3]">
                              {prod.badge}
                            </span>
                          </div>
                          <h5 className="text-sm font-bold text-[#F5F7FA] group-hover/card:text-white transition-colors mb-1">
                            {prod.name}
                          </h5>
                          <p className="text-[11px] text-[#A8B4C3] leading-relaxed mb-4">
                            {prod.preview}
                          </p>
                        </div>

                        <span className="text-xs font-mono font-bold text-[#00D9FF] flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">
                          {prod.cta}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#A8B4C3]">
                    <span>Select any product to enter its dedicated interactive world</span>
                    <span className="text-[#8CC63F]">&check; 100% Zero-Trust Hardware Gated</span>
                  </div>
                </div>
              )}
            </li>

            {/* Standard Nav Items */}
            {navLinks.filter(l => !l.isDropdown).map((link) => (
              <li key={link.name}>
                <button 
                  onClick={link.action}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#A8B4C3] hover:text-[#00D9FF] transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}

          </ul>
        </div>

        {/* Action Button: Launch Console */}
        <div className="hidden lg:flex items-center gap-3">
          {currentPage !== 'home' ? (
            <button
              onClick={() => navigateTo('home')}
              className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl bg-[#071625] border border-[#00D9FF]/40 text-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all cursor-pointer"
            >
              &larr; Overview
            </button>
          ) : (
            <GlowButton 
              variant="primary" 
              className="py-2.5 px-6 text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,217,255,0.3)] cursor-pointer"
              onClick={() => navigateTo('ai-build')}
            >
              Launch Console
            </GlowButton>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className={cn(
            "lg:hidden text-[#F5F7FA] p-2 z-50 rounded-xl bg-[#071625] border border-[#1A2E44] transition-opacity",
            isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>

      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-[#020712]/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div className={cn(
        "fixed top-0 right-0 bottom-0 w-[280px] max-w-[85vw] bg-[#020712]/95 backdrop-blur-xl z-50 lg:hidden flex flex-col justify-between p-6 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] border-l border-[#00D9FF]/20 transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#1A2E44]">
          <span className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider">Menu</span>
          <button 
            className="text-[#F5F7FA] p-2 -mr-2 rounded-xl hover:bg-[#071625] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-6 overflow-y-auto">
          <div>
            <span className="text-xs font-mono font-bold text-[#A8B4C3] uppercase tracking-wider block mb-3">Navigation</span>
            <ul className="flex flex-col gap-3">
              <li>
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    navigateTo('home');
                  }}
                  className="text-lg font-bold text-[#F5F7FA] hover:text-[#00D9FF] transition-colors py-1 w-full text-left"
                >
                  Home Overview
                </button>
              </li>
              {navLinks.filter(l => !l.isDropdown).map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      link.action?.();
                    }}
                    className="text-lg font-bold text-[#F5F7FA] hover:text-[#00D9FF] transition-colors py-1 w-full text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-[#1A2E44]">
            <span className="text-xs font-mono font-bold text-[#00D9FF] uppercase tracking-wider block mb-3">Dedicated AI Product Worlds</span>
            <div className="flex flex-col gap-2">
              {aiProducts.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => handleProductSelect(prod.id)}
                  className="p-3.5 rounded-2xl bg-[#05101A] border border-[#1A2E44] flex items-center gap-3 text-left hover:border-[#00D9FF]/40"
                >
                  <div className="p-2 rounded-xl bg-[#071625]">{prod.icon}</div>
                  <div>
                    <h5 className="text-sm font-bold text-[#F5F7FA]">{prod.name}</h5>
                    <p className="text-xs text-[#A8B4C3] line-clamp-1">{prod.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1A2E44]">
          <GlowButton 
            variant="primary" 
            className="w-full py-3 text-xs font-mono font-bold uppercase"
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigateTo('ai-build');
            }}
          >
            Launch Console
          </GlowButton>
        </div>
      </div>
    </nav>
  );
};
