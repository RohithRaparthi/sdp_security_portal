import React from 'react';
import { Shield, Sparkles, ArrowRight, ShieldCheck, Shirt } from 'lucide-react';
import { useNavigation } from '../../utils/router';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-[#020712] border-t border-[#00D9FF]/10 py-16 relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent glow-cyan"></div>
      
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 cursor-pointer group w-fit"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8CC63F] to-[#4D7C0F] flex items-center justify-center shadow-[0_0_15px_rgba(140,198,63,0.3)] group-hover:scale-105 transition-transform">
                <span className="text-[#020712] font-black text-xl tracking-tighter">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#F5F7FA] font-bold text-lg leading-tight tracking-wide group-hover:text-[#00D9FF] transition-colors">SDP</span>
                <span className="text-[#A8B4C3] text-[10px] leading-tight font-medium">Secure Data Protection<br/>Innovations Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-[#A8B4C3] text-sm leading-relaxed max-w-sm">
              Building secure, intelligent, and scalable AI solutions for modern enterprises. We pioneer next-generation zero-trust AI security, quantum-resistant messaging, and spatial fashion intelligence.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8CC63F]">
              <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse"></span>
              <span>INDEPENDENT CRYPTOGRAPHIC AUDIT VERIFIED</span>
            </div>
          </div>

          {/* AI Products Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[#F5F7FA] font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
              <Sparkles size={16} className="text-[#00D9FF]" />
              AI Products
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button 
                  onClick={() => navigateTo('ai-build')}
                  className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] group-hover:scale-125 transition-transform"></span>
                  <span>AI Build Security Portal</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('s-chat')}
                  className="text-[#A8B4C3] text-sm hover:text-[#8CC63F] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] group-hover:scale-125 transition-transform"></span>
                  <span>S-Chat AI Messenger</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('outfit-ai')}
                  className="text-[#A8B4C3] text-sm hover:text-[#A855F7] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] group-hover:scale-125 transition-transform"></span>
                  <span>Outfit AI Fashion Studio</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('home', '#services')}
                  className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors flex items-center gap-2 group text-left"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#176BFF] group-hover:scale-125 transition-transform"></span>
                  <span>Enterprise Engineering Services</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Architecture & Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F5F7FA] font-bold text-sm tracking-wider uppercase mb-5">
              Ecosystem
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button 
                  onClick={() => navigateTo('home', '#security')}
                  className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors text-left"
                >
                  Zero Trust Architecture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('home', '#technology')}
                  className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors text-left"
                >
                  Technology Stack
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('home', '#services')}
                  className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors text-left"
                >
                  Engineering Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateTo('home', '#about')}
                  className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors text-left"
                >
                  About SDP Innovations
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Launch Cards */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-start">
            <h4 className="text-[#F5F7FA] font-bold text-sm tracking-wider uppercase mb-2">
              Launch Product Consoles
            </h4>
            
            <button
              onClick={() => navigateTo('ai-build')}
              className="p-3 bg-[#05101A] border border-[#00D9FF]/30 hover:border-[#00D9FF] rounded-xl flex items-center justify-between text-left transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(0,217,255,0.15)]"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={16} className="text-[#00D9FF]" />
                <span className="text-xs font-bold text-[#F5F7FA]">AI Security Portal</span>
              </div>
              <ArrowRight size={14} className="text-[#00D9FF] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigateTo('s-chat')}
              className="p-3 bg-[#05101A] border border-[#8CC63F]/30 hover:border-[#8CC63F] rounded-xl flex items-center justify-between text-left transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(140,198,63,0.15)]"
            >
              <div className="flex items-center gap-2.5">
                <Shield size={16} className="text-[#8CC63F]" />
                <span className="text-xs font-bold text-[#F5F7FA]">S-Chat AI Messenger</span>
              </div>
              <ArrowRight size={14} className="text-[#8CC63F] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => navigateTo('outfit-ai')}
              className="p-3 bg-[#05101A] border border-[#A855F7]/30 hover:border-[#A855F7] rounded-xl flex items-center justify-between text-left transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center gap-2.5">
                <Shirt size={16} className="text-[#A855F7]" />
                <span className="text-xs font-bold text-[#F5F7FA]">Outfit AI Studio</span>
              </div>
              <ArrowRight size={14} className="text-[#A855F7] group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00D9FF]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#667789] text-sm text-center md:text-left">
            &copy; 2026 SDP Innovation Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-[#667789] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#8CC63F] shadow-[0_0_8px_#8CC63F] animate-pulse"></span>
            SYSTEM OPERATIONAL &middot; ZERO TRUST ACTIVE
          </div>
        </div>
      </div>
    </footer>
  );
};
