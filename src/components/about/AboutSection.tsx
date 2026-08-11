import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Target, Lightbulb, Brain, Shield, Clock, Award, Zap, Lock, Users, Activity } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#020712]">
      <div className="absolute left-[-10%] bottom-0 w-[40%] h-[60%] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#8CC63F]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Content */}
          <div>
            <SectionHeader 
              title="ABOUT SDP INNOVATION" 
              subtitle="Company"
              align="left"
              className="mb-8"
            />
            
            <div className="space-y-6 text-[#A8B4C3] text-lg leading-relaxed mb-12">
              <p>
                SDP Innovation Pvt. Ltd. is a forward-thinking technology company focused on building secure, intelligent, and scalable digital solutions.
              </p>
              <p>
                We combine artificial intelligence, cybersecurity, software engineering, and cloud technologies to help businesses communicate securely, operate efficiently, and innovate confidently.
              </p>
            </div>

            {/* About Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center">
                <Brain className="w-6 h-6 text-[#8CC63F] mb-3" />
                <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">AI-Powered<br/>Solutions</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center">
                <Shield className="w-6 h-6 text-[#8CC63F] mb-3" />
                <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">Security<br/>First</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center">
                <Clock className="w-6 h-6 text-[#8CC63F] mb-3" />
                <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">24/7<br/>Monitoring</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-[#071625] border border-[#00D9FF]/20 rounded-lg text-center">
                <Award className="w-6 h-6 text-[#8CC63F] mb-3" />
                <span className="text-[10px] font-bold text-[#A8B4C3] uppercase tracking-wider">Enterprise<br/>Ready</span>
              </div>
            </div>
          </div>

          {/* Vision/Mission Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#071625]/80 border border-[#00D9FF]/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#00D9FF]/40 transition-colors">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00D9FF]/10 rounded-full blur-[30px] group-hover:bg-[#00D9FF]/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#00D9FF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FA]">VISION</h3>
              </div>
              <p className="text-[#A8B4C3] leading-relaxed relative z-10">
                To become a global leader in AI-driven security solutions that empower organizations to operate in a safer, smarter, and connected digital world.
              </p>
            </div>

            <div className="bg-[#071625]/80 border border-[#8CC63F]/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group hover:border-[#8CC63F]/40 transition-colors">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#8CC63F]/10 rounded-full blur-[30px] group-hover:bg-[#8CC63F]/20 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#8CC63F]/10 border border-[#8CC63F]/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#8CC63F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FA]">MISSION</h3>
              </div>
              <p className="text-[#A8B4C3] leading-relaxed relative z-10">
                To innovate and deliver secure, scalable, and intelligent AI applications that protect businesses and simplify lives.
              </p>
            </div>

            {/* Vision/Mission Badges */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-4 pt-6 border-t border-[#00D9FF]/10">
              <div className="flex flex-col items-center gap-2 group">
                <Zap className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">INNOVATE</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <Lock className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">PROTECT</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <Users className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">EMPOWER</span>
              </div>
              <div className="flex flex-col items-center gap-2 group">
                <Activity className="w-5 h-5 text-[#8CC63F] group-hover:text-[#00D9FF] transition-colors" />
                <span className="text-[11px] font-bold text-[#A8B4C3] tracking-widest">TRANSFORM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
