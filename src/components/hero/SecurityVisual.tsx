import React, { useState, useEffect } from 'react';
import { Shield, Lock, Cpu, Activity, Radio, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const SecurityVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);
  const [radarAngle, setRadarAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadarAngle((prev) => (prev + 2) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    {
      id: 0,
      label: 'AI FIREWALL',
      sub: 'Sub-1.2ms Pre-Inference AST',
      status: '99.98% ACTIVE',
      color: '#00D9FF',
      icon: <Shield size={14} className="text-[#00D9FF]" />,
      x: '15%',
      y: '20%',
    },
    {
      id: 1,
      label: 'KYBER-1024 PQ',
      sub: 'Lattice-Based Post-Quantum',
      status: 'FORWARD SECRECY',
      color: '#8CC63F',
      icon: <Lock size={14} className="text-[#8CC63F]" />,
      x: '85%',
      y: '22%',
    },
    {
      id: 2,
      label: 'ZERO-TRUST RBAC',
      sub: 'Agent Tool Gating',
      status: 'ENFORCED',
      color: '#00D9FF',
      icon: <Cpu size={14} className="text-[#00D9FF]" />,
      x: '82%',
      y: '78%',
    },
    {
      id: 3,
      label: 'NEURAL SENTINEL',
      sub: 'Autonomous Red Teaming',
      status: 'ARMED',
      color: '#A855F7',
      icon: <Eye size={14} className="text-[#A855F7]" />,
      x: '18%',
      y: '80%',
    },
    {
      id: 4,
      label: 'SOC TELEMETRY',
      sub: 'Real-Time Forensic Log',
      status: 'STREAMING',
      color: '#00D9FF',
      icon: <Activity size={14} className="text-[#00D9FF]" />,
      x: '50%',
      y: '94%',
    },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[540px] lg:max-w-[580px] mx-auto flex items-center justify-center select-none">
      
      {/* Outer Glow Halo */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#00D9FF]/15 via-[#8CC63F]/10 to-[#A855F7]/15 blur-[60px] pointer-events-none animate-pulse"></div>

      {/* 1. Outermost Ambient Orbit Ring */}
      <div className="absolute inset-[2%] rounded-full border border-[#00D9FF]/10 animate-[spin_160s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#8CC63F] shadow-[0_0_8px_#8CC63F]"></div>
      </div>

      {/* 2. Concentric Dashed Precision Ring */}
      <div className="absolute inset-[14%] rounded-full border border-[#00D9FF]/20 border-dashed animate-[spin_90s_linear_infinite_reverse]"></div>

      {/* 3. Inner Technical Data Ring with Calibration Marks */}
      <div className="absolute inset-[26%] rounded-full border border-[#00D9FF]/30 shadow-[0_0_30px_rgba(0,217,255,0.08)] flex items-center justify-center">
        {/* Radar Sweep Beam */}
        <div 
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `conic-gradient(from ${radarAngle}deg, rgba(0, 217, 255, 0.25) 0deg, transparent 60deg, transparent 360deg)`
          }}
        ></div>
      </div>

      {/* 4. Crosshair Grid Lines */}
      <div className="absolute top-1/2 left-[4%] right-[4%] h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/25 to-transparent pointer-events-none"></div>
      <div className="absolute left-1/2 top-[4%] bottom-[4%] w-[1px] bg-gradient-to-b from-transparent via-[#00D9FF]/25 to-transparent pointer-events-none"></div>

      {/* 5. Central AI Security Engine Core */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="relative z-20 w-44 h-52 sm:w-48 sm:h-56 bg-[#05101A]/95 backdrop-blur-2xl border-2 border-[#00D9FF]/60 rounded-3xl flex flex-col items-center justify-between p-5 shadow-[0_0_50px_rgba(0,217,255,0.25)] overflow-hidden cursor-pointer group"
      >
        {/* Core background scanlines */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,217,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.8)_1px,transparent_1px)] bg-[size:10px_10px]"></div>

        {/* Top Status Header */}
        <div className="relative z-10 w-full flex items-center justify-between text-[9px] font-mono text-[#00D9FF]">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] animate-ping"></span>
            SYS: ONLINE
          </span>
          <span>v4.2 PRO</span>
        </div>

        {/* Center Shield & Hologram */}
        <div className="relative z-10 flex flex-col items-center my-auto">
          <div className="relative">
            <Shield className="w-14 h-14 sm:w-16 sm:h-16 text-[#00D9FF] drop-shadow-[0_0_15px_rgba(0,217,255,0.7)] group-hover:text-white transition-colors" strokeWidth={1.5} />
            <Radio className="w-6 h-6 text-[#8CC63F] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
          <span className="text-white font-black tracking-wider text-base sm:text-lg mt-2 font-mono">
            SDP ENGINE
          </span>
          <span className="text-[10px] text-[#00D9FF] font-mono tracking-widest uppercase">
            Zero-Trust Core
          </span>
        </div>

        {/* Bottom Live Latency Indicator */}
        <div className="relative z-10 w-full pt-2 border-t border-[#1A2E44] flex items-center justify-between text-[9px] font-mono">
          <span className="text-[#A8B4C3]">LATENCY</span>
          <span className="text-[#8CC63F] font-bold">1.18ms</span>
        </div>
      </motion.div>

      {/* 6. Interactive Perimeter Security Nodes */}
      {nodes.map((node) => {
        const isSelected = activeNode === node.id;

        return (
          <motion.div
            key={node.id}
            onClick={() => setActiveNode(node.id)}
            whileHover={{ scale: 1.1 }}
            className="absolute z-30 cursor-pointer group/node"
            style={{
              top: node.y,
              left: node.x,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Connecting line to center */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-[1px] pointer-events-none opacity-30 group-hover/node:opacity-80 transition-opacity"
              style={{
                background: `linear-gradient(90deg, ${node.color}, transparent)`,
              }}
            ></div>

            {/* Node Capsule Badge */}
            <div className={`p-2 sm:p-2.5 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex items-center gap-2.5 shadow-xl ${
              isSelected 
                ? 'bg-[#071625] border-white shadow-[0_0_20px_rgba(0,217,255,0.4)]'
                : 'bg-[#05101A]/90 border-[#1A2E44] hover:border-[#00D9FF]/60'
            }`}>
              <div 
                className="w-7 h-7 rounded-xl flex items-center justify-center border"
                style={{ backgroundColor: `${node.color}15`, borderColor: `${node.color}40` }}
              >
                {node.icon}
              </div>
              
              <div className="hidden sm:flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-black text-white">{node.label}</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }}></span>
                </div>
                <span className="text-[9px] font-mono text-[#A8B4C3]">{node.sub}</span>
              </div>
            </div>
          </motion.div>
        );
      })}

    </div>
  );
};
