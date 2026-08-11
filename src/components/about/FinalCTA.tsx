import React from 'react';
import { GlowButton } from '../common/GlowButton';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-[#030B16]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#00D9FF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F7FA] leading-tight mb-6">
          READY TO BUILD <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#176BFF]">
            SECURE AI SOLUTIONS?
          </span>
        </h2>
        
        <p className="text-lg md:text-xl text-[#A8B4C3] max-w-2xl mx-auto leading-relaxed mb-12">
          Let's build the future together with intelligent, secure, and scalable AI technology.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <GlowButton variant="primary" className="w-full sm:w-auto text-base px-8 py-4">
            Schedule a Demo
          </GlowButton>
          <GlowButton variant="secondary" className="w-full sm:w-auto text-base px-8 py-4">
            Talk to Our Team
          </GlowButton>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 flex flex-col items-center sm:items-start text-center sm:text-left hover:border-[#00D9FF]/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#00D9FF]/10 flex items-center justify-center mb-4">
              <Phone className="w-4 h-4 text-[#00D9FF]" />
            </div>
            <h4 className="text-[#A8B4C3] text-xs font-bold uppercase tracking-wider mb-1">Phone</h4>
            <a href="tel:+918237722749" className="text-[#F5F7FA] text-sm hover:text-[#00D9FF] transition-colors">+91-82377 22749</a>
          </div>

          <div className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 flex flex-col items-center sm:items-start text-center sm:text-left hover:border-[#00D9FF]/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#00D9FF]/10 flex items-center justify-center mb-4">
              <Mail className="w-4 h-4 text-[#00D9FF]" />
            </div>
            <h4 className="text-[#A8B4C3] text-xs font-bold uppercase tracking-wider mb-1">Email</h4>
            <a href="mailto:contact@sdpinnovations.com" className="text-[#F5F7FA] text-sm hover:text-[#00D9FF] transition-colors">contact@sdpinnovations.com</a>
          </div>

          <div className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 flex flex-col items-center sm:items-start text-center sm:text-left hover:border-[#00D9FF]/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#00D9FF]/10 flex items-center justify-center mb-4">
              <Globe className="w-4 h-4 text-[#00D9FF]" />
            </div>
            <h4 className="text-[#A8B4C3] text-xs font-bold uppercase tracking-wider mb-1">Website</h4>
            <a href="https://www.sdpinnovations.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F7FA] text-sm hover:text-[#00D9FF] transition-colors">www.sdpinnovations.com</a>
          </div>

          <div className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 flex flex-col items-center sm:items-start text-center sm:text-left hover:border-[#00D9FF]/30 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#00D9FF]/10 flex items-center justify-center mb-4">
              <MapPin className="w-4 h-4 text-[#00D9FF]" />
            </div>
            <h4 className="text-[#A8B4C3] text-xs font-bold uppercase tracking-wider mb-1">Location</h4>
            <p className="text-[#F5F7FA] text-sm">Pune, India</p>
          </div>

        </div>

      </div>
    </section>
  );
};
