import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020712] border-t border-[#00D9FF]/10 py-16 relative overflow-hidden">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/30 to-transparent glow-cyan"></div>
      
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8CC63F] to-[#4D7C0F] flex items-center justify-center shadow-[0_0_15px_rgba(140,198,63,0.3)]">
                <span className="text-[#020712] font-black text-xl tracking-tighter">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#F5F7FA] font-bold text-lg leading-tight tracking-wide">SDP</span>
                <span className="text-[#A8B4C3] text-[10px] leading-tight font-medium">Secure Data Protection<br/>Innovations Pvt. Ltd.</span>
              </div>
            </div>
            <p className="text-[#A8B4C3] text-sm leading-relaxed max-w-sm">
              Building secure, intelligent, and scalable AI solutions for modern businesses. We combine artificial intelligence with enterprise-grade cybersecurity.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-[#071625] border border-[#00D9FF]/10 flex items-center justify-center text-[#A8B4C3] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 hover:shadow-[0_0_10px_rgba(0,217,255,0.15)] transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-lg bg-[#071625] border border-[#00D9FF]/10 flex items-center justify-center text-[#A8B4C3] hover:text-[#00D9FF] hover:border-[#00D9FF]/30 hover:shadow-[0_0_10px_rgba(0,217,255,0.15)] transition-all">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>

          {/* Products & Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[#F5F7FA] font-semibold mb-6">Products & Services</h4>
            <ul className="flex flex-col gap-3">
              {['AI Build Security Portal', 'S-Chat AI', 'Outfit AI', 'AI Applications', 'Enterprise Software'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]/30 group-hover:bg-[#00D9FF] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F5F7FA] font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[#A8B4C3] text-sm hover:text-[#00D9FF] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]/30 group-hover:bg-[#00D9FF] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* S-Chat Badge & QR Code */}
          <div className="lg:col-span-3 flex justify-end">
            <div className="bg-[#05101A] border border-[#8CC63F]/20 rounded-2xl p-6 flex flex-col items-center w-full max-w-[240px] text-center hover:border-[#8CC63F]/40 transition-colors">
              <Shield className="w-8 h-8 text-[#8CC63F] mb-3" />
              <h5 className="text-[#F5F7FA] font-bold text-sm mb-1">Get S-Chat App</h5>
              <p className="text-[#A8B4C3] text-xs mb-4">Secure communication for enterprise</p>
              
              <div className="w-32 h-32 bg-white rounded-xl p-2 mb-3">
                {/* QR Placeholder */}
                <div className="w-full h-full bg-[#020712] opacity-10 flex items-center justify-center">
                  <span className="text-black text-[10px] font-bold">QR CODE</span>
                </div>
              </div>
              
              <span className="text-[#8CC63F] text-xs font-semibold tracking-wider uppercase">Scan to Download</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#00D9FF]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#667789] text-sm text-center md:text-left">
            &copy; 2026 SDP Innovation Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-[#667789] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#8CC63F] shadow-[0_0_8px_#8CC63F] animate-pulse"></span>
            SYSTEM SECURE
          </div>
        </div>
      </div>
    </footer>
  );
};
