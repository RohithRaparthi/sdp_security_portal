import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { products } from '../../data/content';
import { CheckCircle2, Shield, Smartphone, Shirt, Database, ArrowRight, Sparkles, Lock } from 'lucide-react';
import { cn } from '../../utils/cn';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';
import { useNavigation, type PageId } from '../../utils/router';

export const ProductsSection: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section id="products" className="py-24 relative overflow-hidden bg-[#020712]">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00D9FF]/5 via-[#8CC63F]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="AI PRODUCTS & ECOSYSTEM" 
            subtitle="Intelligent Architecture"
            description="Dedicated AI platforms engineered with zero-trust privacy, generative intelligence, and military-grade security."
          />
        </ScrollReveal>

        {/* AI Products Grid */}
        <div className="mb-20">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#00D9FF]" />
                <h3 className="text-xl font-bold text-[#F5F7FA]">Dedicated AI Product Platforms</h3>
              </div>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D9FF]/30 to-transparent hidden sm:block"></div>
              <span className="text-xs font-mono text-[#A8B4C3]">CLICK TO OPEN PRODUCT PAGE</span>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {products.map((product) => (
              <StaggerItem key={product.id} className="flex">
                <ProductCard 
                  product={product} 
                  isPrimary={product.id === 'ai-build'} 
                  onExplore={() => navigateTo(product.id as PageId)}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Engineering & AI Services Group */}
        <div>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-[#F5F7FA]">Enterprise Services & Custom Engineering</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#8CC63F]/30 to-transparent"></div>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => navigateTo('home', '#services')}
                className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 hover:border-[#8CC63F]/40 hover:bg-[#071625] transition-all flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(140,198,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#071625] border border-[#1A2E44] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">AI Applications Development</h4>
                  <p className="text-[#A8B4C3] text-xs">Custom intelligent solutions & LLM fine-tuning</p>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => navigateTo('home', '#services')}
                className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 hover:border-[#8CC63F]/40 hover:bg-[#071625] transition-all flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(140,198,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#071625] border border-[#1A2E44] flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">Enterprise Software</h4>
                  <p className="text-[#A8B4C3] text-xs">Zero-trust architecture & scalable systems</p>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => navigateTo('home', '#services')}
                className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 hover:border-[#8CC63F]/40 hover:bg-[#071625] transition-all flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(140,198,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#071625] border border-[#1A2E44] flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">Mobile & Web Applications</h4>
                  <p className="text-[#A8B4C3] text-xs">High-security cross-platform apps</p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};

interface ProductCardProps {
  product: typeof products[0];
  isPrimary?: boolean;
  onExplore: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isPrimary, onExplore }) => {
  const Icon = product.id === 'ai-build' ? Shield : product.id === 's-chat' ? Lock : Shirt;
  
  return (
    <GlassCard 
      variant={product.theme} 
      hoverEffect
      className={cn(
        "flex flex-col h-full w-full justify-between transition-all duration-300 group",
        isPrimary ? "lg:-translate-y-3 shadow-[0_0_35px_rgba(0,217,255,0.18)] border-[#00D9FF]/40" : "opacity-95 hover:opacity-100"
      )}
    >
      <div>
        <div className={cn(
          "p-7 border-b transition-colors",
          product.theme === 'cyan' ? "border-[#00D9FF]/20 bg-[#00D9FF]/5 group-hover:bg-[#00D9FF]/10" : 
          product.theme === 'green' ? "border-[#8CC63F]/20 bg-[#8CC63F]/5 group-hover:bg-[#8CC63F]/10" : 
          "border-[#A855F7]/20 bg-[#A855F7]/5 group-hover:bg-[#A855F7]/10"
        )}>
          <div className="flex items-center gap-4 mb-4">
            <div className={cn(
              "p-3 rounded-xl backdrop-blur-md transition-transform group-hover:scale-110",
              product.theme === 'cyan' ? "bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30" : 
              product.theme === 'green' ? "bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/30" : 
              "bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30"
            )}>
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#F5F7FA] group-hover:text-white transition-colors">{product.name}</h3>
              <span className={cn(
                "text-[10px] font-bold tracking-[0.15em] uppercase font-mono",
                product.theme === 'cyan' ? "text-[#00D9FF]" : 
                product.theme === 'green' ? "text-[#8CC63F]" : 
                "text-[#A855F7]"
              )}>{product.subtitle}</span>
            </div>
          </div>
          <p className="text-sm text-[#A8B4C3] leading-relaxed mb-4 min-h-[44px]">
            {product.description}
          </p>

          {/* Interactive preview badge */}
          <div className={cn(
            "w-full py-2 px-3 rounded-lg border text-xs font-mono flex items-center justify-between",
            product.theme === 'cyan' ? "border-[#00D9FF]/30 bg-[#020712] text-[#00D9FF]" :
            product.theme === 'green' ? "border-[#8CC63F]/30 bg-[#020712] text-[#8CC63F]" :
            "border-[#A855F7]/30 bg-[#020712] text-[#A855F7]"
          )}>
            <span>LIVE INTERACTIVE DEMO</span>
            <span className="animate-pulse font-bold">READY &rarr;</span>
          </div>
        </div>
        
        <div className="p-7">
          <h4 className="text-xs font-bold text-[#F5F7FA] mb-4 uppercase tracking-wider font-mono">Key Capabilities</h4>
          <ul className="space-y-2.5 mb-6">
            {product.features.slice(0, 5).map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 size={15} className={cn(
                  "mt-0.5 shrink-0",
                  product.theme === 'cyan' ? "text-[#00D9FF]" : 
                  product.theme === 'green' ? "text-[#8CC63F]" : 
                  "text-[#A855F7]"
                )} />
                <span className="text-xs text-[#A8B4C3] leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-7 pt-0 mt-auto">
        <GlowButton 
          variant={product.theme === 'cyan' ? 'primary' : product.theme === 'purple' ? 'purple' : 'outline'} 
          className="w-full flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
          onClick={onExplore}
        >
          <span>Deep Dive & Interactive Demo</span>
          <ArrowRight size={15} />
        </GlowButton>
      </div>
    </GlassCard>
  );
};
