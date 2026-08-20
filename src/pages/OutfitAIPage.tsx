import React from 'react';
import { ArrowLeft, Sparkles, TrendingUp, CheckCircle, Code2 } from 'lucide-react';
import { useNavigation } from '../utils/router';
import { StickyProductNav } from '../components/common/StickyProductNav';
import { VirtualTryOnStudio } from '../components/products/outfit/VirtualTryOnStudio';

export const OutfitAIPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  const navSections = [
    { id: 'outfit-hero', label: 'Overview' },
    { id: 'outfit-studio', label: 'Virtual Studio' },
    { id: 'outfit-integration', label: 'E-Commerce' },
    { id: 'outfit-value', label: 'Business Value' }
  ];

  return (
    <div className="min-h-screen bg-[#020712] text-[#F5F7FA] pt-24 pb-20 font-sans">
      
      {/* Sticky Sub-Navigation */}
      <StickyProductNav 
        productName="OUTFIT AI"
        productBadge="VIRTUAL TRY-ON"
        badgeColor="purple"
        sections={navSections}
        ctaLabel="Try Virtual Look"
        onCtaClick={() => {
          const el = document.getElementById('outfit-studio');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button 
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#A8B4C3] hover:text-[#A855F7] transition-colors py-2 px-3.5 rounded-xl bg-[#071625]/80 border border-[#1A2E44] hover:border-[#A855F7]/50 group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>&larr; Return to AI Universe</span>
        </button>
      </div>

      {/* Hero Section */}
      <div id="outfit-hero" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#F5F7FA] rounded-full mb-6 shadow-md">
            <Sparkles size={14} className="text-[#020712]" />
            <span className="text-xs font-bold tracking-widest text-[#020712] uppercase">
              AI Virtual Try-On
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[5rem] font-black text-[#F5F7FA] tracking-tighter leading-[1.05] mb-6">
            TRY YOUR COMPLETE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#FEF3C7]">
              LOOK BEFORE YOU BUY
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#A8B4C3] max-w-2xl leading-relaxed mb-8">
            Fashion, beauty, hairstyle, and accessories. Create your complete personalized look with our premium AI Virtual Try-On studio.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => {
                const el = document.getElementById('outfit-studio');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#F5F7FA] text-[#020712] rounded-xl font-bold uppercase tracking-wider hover:bg-[#A855F7] hover:text-white transition-all shadow-[0_4px_20px_rgba(255,255,255,0.15)] cursor-pointer"
            >
              Try Virtual Look
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('outfit-integration');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#071625] text-[#F5F7FA] border border-[#1A2E44] rounded-xl font-bold uppercase tracking-wider hover:border-[#F5F7FA] transition-all cursor-pointer"
            >
              Explore Experiences
            </button>
          </div>
        </div>
      </div>

      {/* Main Virtual Try-On Studio */}
      <section id="outfit-studio" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-[#F5F7FA] tracking-tight mb-4">
            AI Virtual Try-On Studio
          </h2>
          <p className="text-[#A8B4C3] text-sm">
            Upload your photo, select a fashion or beauty look, and generate your virtual preview in seconds. Build a complete look from head to toe.
          </p>
        </div>
        
        <VirtualTryOnStudio />
      </section>

      {/* Shopping Journey & E-Commerce Integration */}
      <section id="outfit-integration" className="py-24 bg-[#050A14] border-y border-[#1A2E44]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Journey Flow */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 text-[#A855F7] font-bold text-xs uppercase tracking-wider">
                <Code2 size={16} /> Retailer Integration
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#F5F7FA] tracking-tight mb-6">
                Seamless E-Commerce Product Integration
              </h2>
              <p className="text-[#A8B4C3] leading-relaxed mb-10">
                Deploy Outfit AI directly into your retailer product pages via API, SDK, or White-Label solutions. Provide a continuous journey from discovery to checkout.
              </p>

              <div className="space-y-4">
                {[
                  { step: '01', title: 'Customer Opens Product', desc: 'Browse fashion or beauty items on retailer site' },
                  { step: '02', title: 'Click Virtual Try-On', desc: 'Initiate the studio experience' },
                  { step: '03', title: 'Upload/Capture Photo', desc: 'Provide a front-facing portrait' },
                  { step: '04', title: 'AI Generates Result', desc: 'Neural fabric diffusion and color matching' },
                  { step: '05', title: 'Customer Compares', desc: 'Evaluate before & after looks' },
                  { step: '06', title: 'Add to Cart & Checkout', desc: 'Seamlessly transition to purchase' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 p-4 rounded-2xl bg-[#020712] border border-[#1A2E44] hover:border-[#A855F7]/50 transition-colors">
                    <span className="text-[#A855F7] font-bold text-xl">{item.step}</span>
                    <div>
                      <h4 className="text-[#F5F7FA] font-bold">{item.title}</h4>
                      <p className="text-[#A8B4C3] text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Feature Highlights */}
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-3xl bg-[#020712] border border-[#1A2E44] shadow-xl">
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-4">Supported Deployment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-[#A8B4C3]">
                    <CheckCircle size={16} className="text-[#8CC63F]" /> API Endpoints for Custom UI
                  </li>
                  <li className="flex items-center gap-3 text-[#A8B4C3]">
                    <CheckCircle size={16} className="text-[#8CC63F]" /> Web SDK for Drop-in Integration
                  </li>
                  <li className="flex items-center gap-3 text-[#A8B4C3]">
                    <CheckCircle size={16} className="text-[#8CC63F]" /> Complete White-Label Platform
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#A855F7]/10 to-[#020712] border border-[#A855F7]/30 shadow-xl">
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-4">Technology Direction</h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block font-bold text-[#A855F7] mb-2 uppercase">Fashion AI</span>
                    <ul className="text-[#A8B4C3] space-y-1">
                      <li>IDM-VTON</li>
                      <li>Stable Diffusion</li>
                      <li>IP-Adapter</li>
                      <li>OpenPose</li>
                    </ul>
                  </div>
                  <div>
                    <span className="block font-bold text-[#A855F7] mb-2 uppercase">Vision & Edge</span>
                    <ul className="text-[#A8B4C3] space-y-1">
                      <li>Human Parsing</li>
                      <li>DensePose</li>
                      <li>Facial Landmarks</li>
                      <li>PyTorch / OpenCV</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Business Value */}
      <section id="outfit-value" className="py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-[#A855F7] font-bold text-xs uppercase tracking-wider">
            <TrendingUp size={16} /> Commercial Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5F7FA] tracking-tight mb-6">
            Differentiated AI Shopping
          </h2>
          <p className="text-[#A8B4C3] leading-relaxed">
            Transform passive browsing into an interactive, personalized styling experience that drives confidence and commercial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Increase Customer Confidence",
              desc: "Allow customers to clearly visualize how garments and cosmetics complement their unique features."
            },
            {
              title: "Reduce Appearance Uncertainty",
              desc: "Eliminate the guesswork of online shopping with realistic simulations of fit, drape, and color harmony."
            },
            {
              title: "Complete-Look Shopping",
              desc: "Encourage multi-category purchases by enabling users to seamlessly pair fashion, beauty, and accessories."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#050A14] border border-[#1A2E44] hover:border-[#A855F7]/30 transition-colors">
              <h3 className="text-xl font-bold text-[#F5F7FA] mb-3">{item.title}</h3>
              <p className="text-sm text-[#A8B4C3] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-[#F5F7FA] rounded-3xl text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#020712] mb-4 relative z-10 tracking-tight">
            Ready to Try Your Look?
          </h3>
          <p className="text-[#475569] max-w-xl mb-8 relative z-10">
            Experience the future of personalized digital fashion and beauty.
          </p>
          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <button 
              onClick={() => {
                const el = document.getElementById('outfit-studio');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-[#A855F7] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-[#9333EA] transition-all shadow-lg cursor-pointer"
            >
              Launch Virtual Studio
            </button>
            <button 
              onClick={() => navigateTo('home')}
              className="px-8 py-4 bg-transparent border-2 border-[#CBD5E1] text-[#0F172A] rounded-xl font-bold uppercase tracking-wider hover:border-[#A855F7] hover:text-[#A855F7] transition-all cursor-pointer"
            >
              Explore AI Universe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
