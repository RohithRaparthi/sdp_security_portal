import React, { useState } from 'react';
import { Sparkles, Cpu, Network } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const TechnologyStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'ai', label: 'AI & Inference' },
    { id: 'backend', label: 'Backend & Security' },
    { id: 'cloud', label: 'Confidential Cloud' },
    { id: 'frontend', label: 'Interface & Spatial' },
  ];

  const technologies = [
    { id: 'pytorch', name: 'PyTorch & vLLM', category: 'ai', desc: 'Sub-600ms spatial & generative inference pipelines', color: '#EE4C2C', tag: 'INFERENCE' },
    { id: 'kyber', name: 'Kyber-1024 PQ', category: 'backend', desc: 'Lattice-based post-quantum key encapsulation', color: '#8CC63F', tag: 'CRYPTO' },
    { id: 'fastapi', name: 'FastAPI & Rust', category: 'backend', desc: 'Sub-1.2ms pre-inference gateway token parsing', color: '#009688', tag: 'ROUTING' },
    { id: 'react', name: 'React 19 & Three.js', category: 'frontend', desc: 'Spatial 3D canvas rendering and interactive UI', color: '#61DAFB', tag: 'UI / 3D' },
    { id: 'kubernetes', name: 'Kubernetes & SEV-SNP', category: 'cloud', desc: 'Confidential hardware memory enclaves', color: '#326CE5', tag: 'CLOUD' },
    { id: 'postgres', name: 'PostgreSQL & pgvector', category: 'backend', desc: 'Encrypted RAG vector similarity retrieval', color: '#336791', tag: 'VECTORS' },
    { id: 'docker', name: 'Docker OCI & WebAssembly', category: 'cloud', desc: 'Air-gapped sandboxed agent micro-runtimes', color: '#2496ED', tag: 'RUNTIME' },
    { id: 'python', name: 'Python & JAX', category: 'ai', desc: 'Autonomous red teaming and adversarial AST models', color: '#3776AB', tag: 'AI CORE' },
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section id="technology" className="py-24 relative bg-[#020712] border-t border-[#00D9FF]/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#071625] border border-[#00D9FF]/30 rounded-full mb-4 glow-cyan">
                <Sparkles size={14} className="text-[#00D9FF]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">
                  Connected Ecosystem
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F5F7FA] tracking-tight leading-tight">
                TECHNOLOGY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-[#8CC63F] to-[#A855F7]">NETWORK MAP</span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all border cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#00D9FF]/20 text-[#00D9FF] border-[#00D9FF]'
                      : 'bg-[#05101A] text-[#A8B4C3] border-[#1A2E44] hover:text-[#F5F7FA]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Central Core & Surrounding Interactive Nodes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center: Giant Interactive Core */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#05101A] to-[#020712] border-2 border-[#00D9FF]/40 rounded-3xl p-8 shadow-[0_0_50px_rgba(0,217,255,0.15)] flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Network size={160} className="text-[#00D9FF]" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#00D9FF]/10 border border-[#00D9FF]/30 flex items-center justify-center text-[#00D9FF]">
                  <Cpu size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/30 uppercase">
                  UNIFIED ORCHESTRATION
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] mb-3">
                SDP AI PLATFORM CORE
              </h3>
              <p className="text-sm text-[#A8B4C3] leading-relaxed mb-6">
                A hardened, polyglot microservice mesh unifying real-time neural inference, zero-trust token sandboxes, and post-quantum cryptographic security.
              </p>
            </div>

            <div className="p-4 bg-[#020712] rounded-2xl border border-[#1A2E44] font-mono text-xs text-[#00D9FF] flex items-center justify-between">
              <span>ACTIVE PROTOCOLS: 8 NODES</span>
              <span className="text-[#8CC63F]">100% HARDENED</span>
            </div>
          </div>

          {/* Right: Connected Nodes Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredTech.map((tech) => {
              const isHovered = hoveredTech === tech.id;

              return (
                <motion.div
                  key={tech.id}
                  onMouseEnter={() => setHoveredTech(tech.id)}
                  onMouseLeave={() => setHoveredTech(null)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isHovered
                      ? 'bg-[#071625] border-white shadow-[0_0_25px_rgba(0,217,255,0.25)]'
                      : 'bg-[#05101A] border-[#1A2E44] hover:border-[#00D9FF]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-[#F5F7FA]">{tech.name}</span>
                    <span 
                      className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase"
                      style={{ color: tech.color, borderColor: `${tech.color}40`, backgroundColor: `${tech.color}10` }}
                    >
                      {tech.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#A8B4C3] leading-relaxed">{tech.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
