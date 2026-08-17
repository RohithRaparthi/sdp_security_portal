import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, Lock, Cpu, Server, Activity, Terminal } from 'lucide-react';

export const LiveStatusStrip: React.FC = () => {
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const liveTelemetryLogs = [
    { time: '10:42:01.042', text: 'Pre-inference token vector parsed in 0.8ms &bull; 0 vulnerabilities found', type: 'info' },
    { time: '10:42:02.190', text: 'Adversarial prompt injection probe intercepted & quarantined at gateway', type: 'alert' },
    { time: '10:42:04.821', text: 'Post-Quantum Kyber-1024 ephemeral handshake verified for session #8821', type: 'success' },
    { time: '10:42:06.312', text: 'Multi-agent tool RBAC capability boundary verified &bull; Token authorized', type: 'info' },
    { time: '10:42:08.504', text: 'Autonomous PII redactor masked 3 confidential entities before model ingestion', type: 'success' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % liveTelemetryLogs.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const telemetryItems = [
    {
      label: 'AI FIREWALL',
      value: '99.98%',
      status: 'ACTIVE',
      color: '#00D9FF',
      icon: <ShieldCheck size={16} className="text-[#00D9FF]" />,
    },
    {
      label: 'THREAT ENGINE',
      value: '12ms',
      status: 'ACTIVE',
      color: '#00D9FF',
      icon: <Zap size={16} className="text-[#00D9FF]" />,
    },
    {
      label: 'ZERO TRUST',
      value: 'ENFORCED',
      status: 'ACTIVE',
      color: '#8CC63F',
      icon: <Lock size={16} className="text-[#8CC63F]" />,
    },
    {
      label: 'ENCRYPTION',
      value: 'PQ-SAFE',
      status: 'ACTIVE',
      color: '#8CC63F',
      icon: <Cpu size={16} className="text-[#8CC63F]" />,
    },
    {
      label: 'INFRASTRUCTURE',
      value: 'ONLINE',
      status: 'ACTIVE',
      color: '#00D9FF',
      icon: <Server size={16} className="text-[#00D9FF]" />,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 mb-16 max-w-[1400px] mx-auto px-6 sm:px-8">
      <div className="bg-[#05101A]/95 border border-[#00D9FF]/30 rounded-3xl p-5 sm:p-7 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
        
        {/* Top Scanning Line */}
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent"></div>

        {/* Global System Header & Telemetry Grid */}
        <div className="flex flex-col gap-6">
          
          {/* Status Row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-[#1A2E44]">
            
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8CC63F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8CC63F]"></span>
              </span>
              <span className="text-sm font-mono font-black tracking-widest text-[#F5F7FA] uppercase">
                SDP GLOBAL SYSTEM STATUS
              </span>
            </div>

            {/* Metric Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 w-full lg:w-auto flex-1 lg:max-w-4xl lg:ml-6">
              {telemetryItems.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#020712]/90 border border-[#1A2E44] rounded-2xl p-3 flex items-center justify-between gap-3 shadow-inner"
                >
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-[#A8B4C3] tracking-wider block">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-black text-[#F5F7FA]">
                      {item.value}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}></span>
                    <span className="text-[9px] font-mono font-bold mt-1" style={{ color: item.color }}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Live Streaming Security Telemetry Event Log */}
          <div className="flex items-center gap-3 font-mono text-xs text-[#A8B4C3] bg-[#020712] p-3 rounded-2xl border border-[#1A2E44] overflow-hidden">
            <div className="flex items-center gap-2 text-[#00D9FF] shrink-0 font-bold">
              <Terminal size={14} className="text-[#00D9FF]" />
              <span className="text-[10px] uppercase">LIVE TELEMETRY:</span>
            </div>
            <div className="flex-1 truncate">
              <span className="text-[#667789] mr-2">[{liveTelemetryLogs[activeLogIndex].time}]</span>
              <span 
                dangerouslySetInnerHTML={{ __html: liveTelemetryLogs[activeLogIndex].text }}
                className={liveTelemetryLogs[activeLogIndex].type === 'alert' ? 'text-red-400 font-bold' : liveTelemetryLogs[activeLogIndex].type === 'success' ? 'text-[#8CC63F] font-bold' : 'text-[#F5F7FA]'}
              />
            </div>
            <div className="shrink-0 text-[10px] text-[#8CC63F] flex items-center gap-1 hidden sm:flex">
              <Activity size={12} className="animate-pulse" />
              <span>REALTIME FEED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
