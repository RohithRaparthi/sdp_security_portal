import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Shield, Cpu, Code, Activity, Rocket, Eye, Sliders } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const DevelopmentProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3); // Default on 04 SECURE

  const steps = [
    { 
      num: '01', 
      title: 'DISCOVER', 
      subtitle: 'Architecture & Threat Modeling',
      desc: 'Defining threat surface, data sovereignty boundaries, and cryptographic requirements before writing code.',
      gates: ['STRIDE Threat Modeling', 'Data Flow Diagrams (DFD)', 'Compliance Baseline (NIST / EU AI Act)'],
      icon: Eye,
      color: '#00D9FF'
    },
    { 
      num: '02', 
      title: 'DESIGN', 
      subtitle: 'Spatial UX & Security Protocols',
      desc: 'Designing zero-friction interactive product interfaces and double-ratchet key encapsulation flows.',
      gates: ['Wireframe & 3D Spatial Proto', 'Cryptographic Handshake Spec', 'Hardware Anti-Capture Hooks'],
      icon: Sliders,
      color: '#A855F7'
    },
    { 
      num: '03', 
      title: 'BUILD', 
      subtitle: 'Sub-Millisecond Polyglot Core',
      desc: 'Developing high-throughput Rust API proxies, React 19 spatial interfaces, and model inference pipelines.',
      gates: ['Sub-1.2ms Token AST Parser', 'Air-Gapped Container Builds', 'Confidential Memory Enclaves'],
      icon: Code,
      color: '#00D9FF'
    },
    { 
      num: '04', 
      title: 'SECURE', 
      subtitle: 'Post-Quantum & Zero-Trust Gating',
      desc: 'Enforcing Kyber-1024 lattice encryption, autonomous red-teaming, and multi-agent capability RBAC.',
      gates: ['Kyber-1024 Lattice Encapsulation', 'OWASP Top 10 for LLM Defense', 'Autonomous Red Teaming Sandbox'],
      icon: Shield,
      color: '#8CC63F'
    },
    { 
      num: '05', 
      title: 'TEST', 
      subtitle: 'Adversarial Jailbreak & Fuzzing',
      desc: 'Subjecting all model gateways to continuous simulated prompt injection and model inversion probes.',
      gates: ['Automated Jailbreak Fuzzing', 'Differential Privacy Audits', 'Load & Chaos Testing (99.999% SLA)'],
      icon: Cpu,
      color: '#00D9FF'
    },
    { 
      num: '06', 
      title: 'DEPLOY', 
      subtitle: 'Sovereign On-Prem & VPC Rollout',
      desc: 'Deploying immutable clusters into air-gapped on-premise hardware or customer-managed cloud VPCs.',
      gates: ['Kubernetes Operator Automated Setup', 'Customer-Managed BYOK HSM', 'MDM Zero-Touch Enrollment'],
      icon: Rocket,
      color: '#8CC63F'
    },
    { 
      num: '07', 
      title: 'MONITOR', 
      subtitle: 'Continuous SOC Telemetry',
      desc: 'Real-time telemetry streaming, instant forensic logging, and autonomous threat quarantine 24/7.',
      gates: ['Sub-Millisecond Alert Stream', 'Zero Data Contamination Audit', '24/7 Enterprise SOC Support'],
      icon: Activity,
      color: '#00D9FF'
    },
  ];

  const currentStepData = steps[activeStep];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#030B16] border-t border-[#00D9FF]/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-left max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-4 glow-cyan">
              <Sparkles size={14} className="text-[#00D9FF]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                Engineering Lifecycle
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FA] tracking-tight leading-tight mb-4">
              7-STEP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7]">DEVELOPMENT JOURNEY</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A8B4C3] max-w-xl leading-relaxed">
              From cryptographic architecture to sovereign deployment. Click any step to inspect its security verification gates.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Large Horizontal Interactive Timeline Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 mb-10">
          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            const Icon = step.icon;

            return (
              <motion.button
                key={step.num}
                onClick={() => setActiveStep(idx)}
                whileHover={{ y: -4 }}
                className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#071625] border-white shadow-[0_0_25px_rgba(0,217,255,0.3)] scale-105'
                    : 'bg-[#05101A] border-[#1A2E44] hover:border-[#00D9FF]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-black text-[#8CC63F]">{step.num}</span>
                  <Icon size={16} style={{ color: step.color }} />
                </div>
                <h4 className="text-xs font-bold text-[#F5F7FA] font-mono uppercase">{step.title}</h4>
              </motion.button>
            );
          })}
        </div>

        {/* 2. Dramatically Expanded Active Step Visual Stage */}
        <div className="bg-[#05101A] border border-[#1A2E44] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#1A2E44]">
            
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-3xl flex items-center justify-center border shadow-xl shrink-0"
                style={{ backgroundColor: `${currentStepData.color}20`, borderColor: currentStepData.color }}
              >
                <currentStepData.icon className="w-8 h-8" style={{ color: currentStepData.color }} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#8CC63F] uppercase tracking-widest">
                  STEP {currentStepData.num} &bull; ACTIVE VERIFICATION
                </span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#F5F7FA]">{currentStepData.title}</h3>
                <p className="text-xs sm:text-sm font-mono text-[#A8B4C3]">{currentStepData.subtitle}</p>
              </div>
            </div>

            <div className="p-3 bg-[#020712] rounded-2xl border border-[#1A2E44] font-mono text-xs text-[#00D9FF]">
              <span>VERIFICATION STATUS: </span>
              <span className="text-[#8CC63F] font-bold">STAGE PASS &check;</span>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm sm:text-base text-[#F5F7FA] leading-relaxed mb-6">
                {currentStepData.desc}
              </p>
              <h5 className="text-xs font-mono font-bold text-[#A8B4C3] uppercase tracking-wider mb-3">
                Mandatory Security & Delivery Gates:
              </h5>
              <div className="space-y-2.5">
                {currentStepData.gates.map((gate, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-[#F5F7FA]">
                    <CheckCircle2 size={16} style={{ color: currentStepData.color }} className="shrink-0" />
                    <span>{gate}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#020712] p-5 rounded-2xl border border-[#1A2E44] font-mono text-xs text-[#A8B4C3] space-y-2">
              <div className="text-[10px] text-[#667789] pb-2 border-b border-[#1A2E44] flex justify-between">
                <span>CI/CD PIPELINE EXECUTION</span>
                <span className="text-[#8CC63F]">AUTOMATED</span>
              </div>
              <p className="text-[#00D9FF]">&gt; step_{currentStepData.num.toLowerCase()}_compliance_audit.sh</p>
              <p>&gt; static analysis & AST taint check: 0 regressions</p>
              <p className="text-[#8CC63F]">&gt; signing release manifest with sovereign HSM keys: COMPLETE</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
