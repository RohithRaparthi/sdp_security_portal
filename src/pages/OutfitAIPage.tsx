import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowLeft, 
  CheckCircle2, 
  Camera, 
  Sliders, 
  RefreshCw,
  Code
} from 'lucide-react';
import { useNavigation } from '../utils/router';
import { GlowButton } from '../components/common/GlowButton';
import { StickyProductNav } from '../components/common/StickyProductNav';
import { CompareSlider } from '../components/common/CompareSlider';

export const OutfitAIPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Multi-step generation animation state
  type GenStage = 'idle' | 'analyzing' | 'matching' | 'generating' | 'finalizing' | 'done';
  const [genStage, setGenStage] = useState<GenStage>('idle');

  // Occasions
  const occasions = [
    { id: 'business', label: 'Executive Boardroom', icon: '💼' },
    { id: 'gala', label: 'Gala & Black Tie', icon: '✨' },
    { id: 'streetwear', label: 'Urban Techwear', icon: '⚡' },
    { id: 'resort', label: 'Summer Riviera', icon: '🌴' }
  ];

  // Colors
  const colorPalettes = [
    { id: 'noir', name: 'Cyber Noir', colors: ['#0A0A0A', '#1E293B', '#A855F7'] },
    { id: 'cyan-luxe', name: 'Emerald & Cyan', colors: ['#022c22', '#064e3b', '#00D9FF'] },
    { id: 'warm-sand', name: 'Alabaster & Camel', colors: ['#D97706', '#F59E0B', '#FEF3C7'] },
    { id: 'plum-gold', name: 'Royal Amethyst', colors: ['#4C1D95', '#7C3AED', '#FBBF24'] }
  ];

  const outfitPresets: Record<string, {
    top: string;
    bottom: string;
    outerwear: string;
    footwear: string;
    accessories: string;
    harmonyScore: number;
    fitConfidence: number;
    vibe: string;
  }> = {
    business: {
      top: 'Tailored Poplin Shirt in Crisp Alabaster',
      bottom: 'Pleated Charcoal Virgin Wool Trousers',
      outerwear: 'Structured Italian Midnight Navy Blazer',
      footwear: 'Burnished Goodyear-Welted Oxford Shoes',
      accessories: 'Silver Minimalist Chronograph Watch',
      harmonyScore: 98,
      fitConfidence: 99.4,
      vibe: 'Authoritative, sharp, meticulously tailored silhouette.'
    },
    gala: {
      top: 'Silk Satin Evening Shirt with Concealed Placket',
      bottom: 'High-Rise Tuxedo Pants with Silk Grosgrain Stripe',
      outerwear: 'Deep Amethyst Velvet Shawl-Lapel Tuxedo Jacket',
      footwear: 'Patent Leather Evening Slippers with Grosgrain Bow',
      accessories: 'Diamond-Cut Black Onyx Cufflinks',
      harmonyScore: 99,
      fitConfidence: 98.9,
      vibe: 'Opulent, magnetic, sculpted red-carpet elegance.'
    },
    streetwear: {
      top: 'Heavyweight Oversized Organic Cotton Tee in Obsidian',
      bottom: 'Modular Ergonomic Cargo Trousers with Magnetic Clasps',
      outerwear: '3-Layer Waterproof Technical Shell Jacket in Matte Black',
      footwear: 'Cybernetic Vibram-Sole Trail Runners with Cyan Accents',
      accessories: 'Crossbody Cordura Tactical Pouch with Key Leash',
      harmonyScore: 96,
      fitConfidence: 97.8,
      vibe: 'Futuristic utilitarian aesthetic with fluid movement.'
    },
    resort: {
      top: 'Breezy Linen Camp-Collar Shirt in Sage Leaf',
      bottom: 'Relaxed Tapered Pleated Linen-Cotton Chinos in Sand',
      outerwear: 'Lightweight Unstructured Knitted Cotton Cardigan',
      footwear: 'Handwoven Suede Espadrilles with Rubber Outsole',
      accessories: 'Polarized Tortoiseshell Sunglasses',
      harmonyScore: 97,
      fitConfidence: 99.1,
      vibe: 'Effortless Mediterranean luxury with natural textures.'
    }
  };

  const [selectedOccasion, setSelectedOccasion] = useState('business');
  const [selectedPalette, setSelectedPalette] = useState('noir');
  const activeOutfit = outfitPresets[selectedOccasion];

  const handleGenerateClick = () => {
    setGenStage('analyzing');
    setTimeout(() => setGenStage('matching'), 350);
    setTimeout(() => setGenStage('generating'), 700);
    setTimeout(() => setGenStage('finalizing'), 1050);
    setTimeout(() => setGenStage('done'), 1400);
  };

  const navSections = [
    { id: 'outfit-hero', label: 'Overview' },
    { id: 'outfit-studio', label: 'AI Studio' },
    { id: 'outfit-features', label: '3D Analysis & Try-On' },
    { id: 'outfit-sdk', label: 'Developer SDK' },
  ];

  return (
    <div className="min-h-screen bg-[#020712] text-[#F5F7FA] pt-24 pb-20">
      
      {/* Sticky Sub-Navigation */}
      <StickyProductNav 
        productName="OUTFIT AI"
        productBadge="SPATIAL 3D STUDIO"
        badgeColor="purple"
        sections={navSections}
        ctaLabel="Launch Studio"
        onCtaClick={() => {
          const el = document.getElementById('outfit-studio');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-6">
        <button 
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A8B4C3] hover:text-[#A855F7] transition-colors py-2 px-3.5 rounded-xl bg-[#071625]/80 border border-[#A855F7]/20 hover:border-[#A855F7]/50 group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>&larr; Return to AI Universe</span>
        </button>
      </div>

      {/* Hero Section */}
      <div id="outfit-hero" className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-16">
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-full mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <Sparkles size={14} className="text-[#A855F7]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#A855F7] uppercase">
              Spatial Generative Fashion Intelligence
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F7FA] tracking-tight leading-[1.02] mb-6">
            STYLE. SIMULATE. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#C084FC] to-[#00D9FF]">
              DISCOVER.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8B4C3] max-w-2xl leading-relaxed">
            Neural 3D mesh body geometry, diffusion-based virtual fabric try-on, and real-time color harmony calibration.
          </p>
        </div>
      </div>

      {/* Main Interactive AI Styling Studio with Pinned Right Canvas */}
      <section id="outfit-studio" className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-5 bg-[#05101A] border border-[#1A2E44] rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#1A2E44]">
              <div className="flex items-center gap-2 text-[#A855F7]">
                <Sliders size={18} />
                <h3 className="text-sm font-bold text-[#F5F7FA] uppercase tracking-wider font-mono">Studio Controls</h3>
              </div>
              <span className="text-[10px] font-mono text-[#A855F7] bg-[#A855F7]/10 px-2.5 py-0.5 rounded border border-[#A855F7]/20">
                &lt;600ms DRAPE
              </span>
            </div>

            {/* 1. Occasion Selector */}
            <div>
              <label className="text-xs font-mono font-bold text-[#A8B4C3] block mb-2 uppercase">
                1. Select Target Occasion
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {occasions.map((occ) => (
                  <button
                    key={occ.id}
                    onClick={() => {
                      setSelectedOccasion(occ.id);
                      handleGenerateClick();
                    }}
                    className={`p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2.5 transition-all border text-left cursor-pointer ${
                      selectedOccasion === occ.id
                        ? 'bg-[#A855F7]/20 text-[#F5F7FA] border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                        : 'bg-[#071625] text-[#A8B4C3] border-[#1A2E44] hover:border-[#A855F7]/40 hover:text-[#F5F7FA]'
                    }`}
                  >
                    <span className="text-lg">{occ.icon}</span>
                    <span>{occ.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Color Mood Selector */}
            <div>
              <label className="text-xs font-mono font-bold text-[#A8B4C3] block mb-2 uppercase">
                2. Select Color Palette Mood
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {colorPalettes.map((pal) => (
                  <button
                    key={pal.id}
                    onClick={() => {
                      setSelectedPalette(pal.id);
                      handleGenerateClick();
                    }}
                    className={`p-3.5 rounded-2xl text-xs font-bold flex flex-col gap-2 transition-all border cursor-pointer ${
                      selectedPalette === pal.id
                        ? 'bg-[#071625] border-[#00D9FF] shadow-[0_0_15px_rgba(0,217,255,0.2)] text-[#F5F7FA]'
                        : 'bg-[#071625] text-[#A8B4C3] border-[#1A2E44] hover:border-white/20'
                    }`}
                  >
                    <span>{pal.name}</span>
                    <div className="flex gap-1.5">
                      {pal.colors.map((c, i) => (
                        <span key={i} className="w-5 h-2 rounded-sm border border-white/10" style={{ backgroundColor: c }}></span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Action Button */}
            <button 
              onClick={handleGenerateClick}
              className="w-full py-4 px-4 rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#7C3AED] text-white font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:brightness-110 transition-all cursor-pointer"
            >
              <RefreshCw size={15} className={genStage !== 'idle' && genStage !== 'done' ? 'animate-spin' : ''} />
              <span>Generate AI Layer Specification</span>
            </button>

          </div>

          {/* Right Column: Pinned Studio Visualization Stage */}
          <div className="lg:col-span-7 sticky top-28 bg-[#020712] border-2 border-[#A855F7]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between">
            
            <div>
              {/* Status Header */}
              <div className="flex items-center justify-between border-b border-[#1A2E44] pb-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F7FA] flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#A855F7]" />
                    AI Neural Outfit Specification
                  </h3>
                  <p className="text-xs text-[#A8B4C3] mt-0.5">{activeOutfit.vibe}</p>
                </div>
                <div className="text-right">
                  <span className="block text-[9px] text-[#A8B4C3] uppercase font-mono">Color Harmony</span>
                  <span className="text-sm font-black text-[#A855F7] font-mono">{activeOutfit.harmonyScore}% Confirmed</span>
                </div>
              </div>

              {/* Generation Lifecycle Visual Bar */}
              {genStage !== 'idle' && genStage !== 'done' && (
                <div className="bg-[#05101A] border border-[#A855F7]/40 p-2.5 px-4 rounded-xl mb-5 flex items-center justify-between text-xs font-mono text-[#A855F7] animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A855F7] animate-ping"></span>
                    <span>PIPELINE:</span>
                  </div>
                  <div className="font-bold">
                    {genStage === 'analyzing' && <span>1. ANALYZING 85+ BODY POINTS...</span>}
                    {genStage === 'matching' && <span>2. COLOR & FABRIC MATCHING...</span>}
                    {genStage === 'generating' && <span>3. NEURAL DRAPE DIFFUSION...</span>}
                    {genStage === 'finalizing' && <span>4. FINALIZING OUTFIT &check;</span>}
                  </div>
                </div>
              )}

              {/* Layer Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-[#071625] border border-[#1A2E44] rounded-2xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center shrink-0 text-[#A855F7] font-bold text-xs font-mono">
                    01
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-[#A855F7] uppercase tracking-wider font-mono">Outerwear Layer</span>
                      <span className="text-[10px] text-[#8CC63F] font-mono">Drape: &lt;600ms</span>
                    </div>
                    <p className="text-sm text-[#F5F7FA] font-medium">{activeOutfit.outerwear}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#071625] border border-[#1A2E44] rounded-2xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center shrink-0 text-[#A855F7] font-bold text-xs font-mono">
                    02
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-[#A855F7] uppercase tracking-wider font-mono">Primary Top</span>
                      <span className="text-[10px] text-[#8CC63F] font-mono">Fit Confirmed</span>
                    </div>
                    <p className="text-sm text-[#F5F7FA] font-medium">{activeOutfit.top}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#071625] border border-[#1A2E44] rounded-2xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center shrink-0 text-[#A855F7] font-bold text-xs font-mono">
                    03
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-[#A855F7] uppercase tracking-wider font-mono">Trousers / Bottoms</span>
                      <span className="text-[10px] text-[#8CC63F] font-mono">Length: 32"</span>
                    </div>
                    <p className="text-sm text-[#F5F7FA] font-medium">{activeOutfit.bottom}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#071625] border border-[#1A2E44] rounded-2xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#00D9FF]/20 border border-[#00D9FF]/40 flex items-center justify-center shrink-0 text-[#00D9FF] font-bold text-xs font-mono">
                    04
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-bold text-[#00D9FF] uppercase tracking-wider font-mono">Footwear & Accents</span>
                      <span className="text-[10px] text-[#00D9FF] font-mono">Styling Synchronized</span>
                    </div>
                    <p className="text-sm text-[#F5F7FA] font-medium">{activeOutfit.footwear} + {activeOutfit.accessories}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#A855F7]/10 border border-[#A855F7]/30 rounded-2xl flex items-center justify-between">
              <span className="text-xs font-mono text-[#F5F7FA]">AI Geometry Precision: 99.4%</span>
              <span className="text-xs font-bold text-[#A855F7] hover:underline cursor-pointer font-mono">
                Export 3D Pattern Model &rarr;
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Feature Deep Dive: 3D Body Mesh Analysis & Before/After Try-On Slider */}
      <section id="outfit-features" className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 border-t border-[#A855F7]/15">
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F7FA] mb-3">
            Spatial AI & Virtual Try-On Engine
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#A855F7]">
            DRAG THE COMPARISON SLIDER TO WITNESS NEURAL FABRIC DIFFUSION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Comparison Slider (Left) */}
          <div className="lg:col-span-6">
            <CompareSlider beforeLabel="Original Silhouette" afterLabel="Neural Diffusion Styled" />
          </div>

          {/* 3D Body Mesh Analysis Points (Right) */}
          <div className="lg:col-span-6 bg-[#05101A] border border-[#1A2E44] rounded-3xl p-8 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera size={20} className="text-[#A855F7]" />
                <span className="text-xs font-mono font-bold text-[#A855F7] uppercase">85+ Measurements Extracted</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#F5F7FA] mb-3">
                Millimeter-Precision 3D Body Analysis
              </h3>
              <p className="text-sm text-[#A8B4C3] leading-relaxed mb-6">
                Extracts precise dimensional proportions directly on-device with privacy-safe edge processing. Photos are discarded immediately upon mesh extraction.
              </p>

              {/* Body Measurement Points */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 bg-[#020712] rounded-xl border border-[#1A2E44] flex justify-between">
                  <span className="text-[#A8B4C3]">SHOULDER BREADTH</span>
                  <span className="text-[#A855F7] font-bold">44.2 cm</span>
                </div>
                <div className="p-3.5 bg-[#020712] rounded-xl border border-[#1A2E44] flex justify-between">
                  <span className="text-[#A8B4C3]">CHEST CIRCUMFERENCE</span>
                  <span className="text-[#A855F7] font-bold">98.5 cm</span>
                </div>
                <div className="p-3.5 bg-[#020712] rounded-xl border border-[#1A2E44] flex justify-between">
                  <span className="text-[#A8B4C3]">WAISTLINE</span>
                  <span className="text-[#A855F7] font-bold">78.0 cm</span>
                </div>
                <div className="p-3.5 bg-[#020712] rounded-xl border border-[#1A2E44] flex justify-between">
                  <span className="text-[#A8B4C3]">INSEAM LENGTH</span>
                  <span className="text-[#A855F7] font-bold">81.4 cm</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1A2E44] flex justify-between items-center text-xs font-mono text-[#8CC63F]">
              <span>&check; ZERO CLOUD PHOTO RETENTION</span>
              <span>100% PRIVATE</span>
            </div>
          </div>

        </div>
      </section>

      {/* Developer SDK Code & Live Preview */}
      <section id="outfit-sdk" className="py-20 bg-[#030B16] border-y border-[#1A2E44]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00D9FF]/10 border border-[#00D9FF]/30 rounded-full mb-4">
                <Code className="w-4 h-4 text-[#00D9FF]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#00D9FF] uppercase">Developer Integration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] mb-4">
                5-Line SDK Component Integration
              </h2>
              <p className="text-sm text-[#A8B4C3] leading-relaxed mb-6">
                Embed photorealistic virtual try-on and size recommendation right onto your e-commerce product pages with instant sub-600ms rendering.
              </p>
              <div className="space-y-3 text-xs text-[#F5F7FA]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00D9FF]" />
                  <span>Native Shopify Plus, BigCommerce, and React Native SDK</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} className="text-[#00D9FF]" />
                  <span>Sub-600ms Edge Inference with 99.99% Global Uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Code Snippet Card */}
            <div className="bg-[#020712] border border-[#00D9FF]/30 rounded-3xl p-6 font-mono text-xs shadow-2xl overflow-x-auto">
              <div className="flex items-center gap-2 pb-4 border-b border-[#1A2E44] mb-4 text-[#A8B4C3]">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                <span className="ml-2 text-[11px]">outfit-ai-tryon.tsx</span>
              </div>
              <pre className="text-[#A8B4C3] leading-relaxed">
                <span className="text-[#A855F7]">import</span> {"{ OutfitAIStudio }"} <span className="text-[#A855F7]">from</span> <span className="text-[#00D9FF]">'@sdp/outfit-ai-sdk'</span>;<br/><br/>
                <span className="text-[#667789]">// Mount 3D Virtual Dressing Room</span><br/>
                <span className="text-[#A855F7]">export const</span> <span className="text-[#F5F7FA]">ProductDressingRoom</span> = () =&gt; (<br/>
                {"  "}&lt;<span className="text-[#00D9FF]">OutfitAIStudio</span><br/>
                {"    "}productId=<span className="text-[#8CC63F]">"sku_luxury_blazer_48"</span><br/>
                {"    "}renderMode=<span className="text-[#8CC63F]">"neural_diffusion_3d"</span><br/>
                {"    "}colorHarmonyAdaptive=<span className="text-[#8CC63F]">{"{true}"}</span><br/>
                {"    "}onFitCalculated={"{(fit) => console.log(fit.confidence)}"}<br/>
                {"  "}/&gt;<br/>
                );
              </pre>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Callout */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="p-10 bg-gradient-to-r from-[#0B1528] via-[#05101A] to-[#0B1528] border border-[#A855F7]/30 rounded-3xl text-center flex flex-col items-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] mb-3">
            Revolutionize Digital Fashion with Outfit AI
          </h3>
          <p className="text-xs sm:text-sm text-[#A8B4C3] max-w-xl mb-8">
            Deploy spatial 3D try-on across your retail applications and boost customer conversion by +38%.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GlowButton variant="purple" className="px-8 py-3.5">
              Launch Outfit AI Studio
            </GlowButton>
            <button 
              onClick={() => navigateTo('home')}
              className="px-6 py-3.5 text-xs font-mono font-bold rounded-xl bg-[#020712] border border-[#1A2E44] text-[#A8B4C3] hover:text-[#A855F7] cursor-pointer"
            >
              Explore Other AI Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
