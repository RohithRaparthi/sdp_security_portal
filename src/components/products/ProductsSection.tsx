import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { products } from '../../data/content';
import { CheckCircle2, Shield, Smartphone, Shirt, Database } from 'lucide-react';
import { cn } from '../../utils/cn';
import { GlowButton } from '../common/GlowButton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-24 relative overflow-hidden bg-[#020712]">
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00D9FF]/5 via-[#8CC63F]/5 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="PRODUCTS & SOLUTIONS" 
            subtitle="Ecosystem"
            description="Intelligent products built with security, privacy, and real-world usability at their core."
          />
        </ScrollReveal>

        {/* AI Products Group */}
        <div className="mb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-[#F5F7FA]">AI Products</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#00D9FF]/30 to-transparent"></div>
            </div>
          </ScrollReveal>
          
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} isPrimary={product.id === 'ai-build'} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Engineering & AI Services Group */}
        <div>
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-[#F5F7FA]">Engineering & AI Services</h3>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#8CC63F]/30 to-transparent"></div>
            </div>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 hover:border-[#8CC63F]/40 hover:bg-[#071625] transition-all flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(140,198,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#071625] border border-[#1A2E44] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">AI Applications Development</h4>
                  <p className="text-[#A8B4C3] text-xs">Custom intelligent solutions</p>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 hover:border-[#8CC63F]/40 hover:bg-[#071625] transition-all flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(140,198,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#071625] border border-[#1A2E44] flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">Enterprise Software</h4>
                  <p className="text-[#A8B4C3] text-xs">Scalable corporate systems</p>
                </div>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-[#05101A] border border-[#1A2E44] rounded-xl p-6 hover:border-[#8CC63F]/40 hover:bg-[#071625] transition-all flex items-center gap-4 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(140,198,63,0.15)]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#071625] border border-[#1A2E44] flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-[#8CC63F]" />
                </div>
                <div>
                  <h4 className="text-[#F5F7FA] font-bold text-sm mb-1">Mobile & Web Applications</h4>
                  <p className="text-[#A8B4C3] text-xs">Cross-platform digital experiences</p>
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
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isPrimary }) => {
  const Icon = product.id === 'ai-build' ? Shield : product.id === 's-chat' ? Smartphone : Shirt;
  
  return (
    <GlassCard 
      variant={product.theme} 
      hoverEffect
      className={cn(
        "flex flex-col h-full",
        isPrimary ? "lg:-translate-y-4 shadow-[0_0_30px_rgba(0,217,255,0.15)]" : "opacity-95 hover:opacity-100"
      )}
    >
      <div className={cn(
        "p-8 border-b",
        product.theme === 'cyan' ? "border-[#00D9FF]/20 bg-[#00D9FF]/5" : 
        product.theme === 'green' ? "border-[#8CC63F]/20 bg-[#8CC63F]/5" : 
        "border-[#A855F7]/20 bg-[#A855F7]/5"
      )}>
        <div className="flex items-center gap-4 mb-4">
          <div className={cn(
            "p-3 rounded-xl backdrop-blur-md",
            product.theme === 'cyan' ? "bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/30" : 
            product.theme === 'green' ? "bg-[#8CC63F]/10 text-[#8CC63F] border border-[#8CC63F]/30" : 
            "bg-[#A855F7]/10 text-[#A855F7] border border-[#A855F7]/30"
          )}>
            <Icon size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F5F7FA]">{product.name}</h3>
            <span className={cn(
              "text-[10px] font-bold tracking-[0.15em] uppercase",
              product.theme === 'cyan' ? "text-[#00D9FF]" : 
              product.theme === 'green' ? "text-[#8CC63F]" : 
              "text-[#A855F7]"
            )}>{product.subtitle}</span>
          </div>
        </div>
        <p className="text-sm text-[#A8B4C3] leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Abstract Software Mockup */}
        <div className={cn(
          "w-full h-24 rounded-lg border flex flex-col overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity",
          product.theme === 'cyan' ? "border-[#00D9FF]/30 bg-[#020712]" :
          product.theme === 'green' ? "border-[#8CC63F]/30 bg-[#020712]" :
          "border-[#A855F7]/30 bg-[#020712]"
        )}>
          <div className={cn(
            "h-4 w-full border-b flex items-center px-2 gap-1",
            product.theme === 'cyan' ? "border-[#00D9FF]/20 bg-[#00D9FF]/10" :
            product.theme === 'green' ? "border-[#8CC63F]/20 bg-[#8CC63F]/10" :
            "border-[#A855F7]/20 bg-[#A855F7]/10"
          )}>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5F7FA]/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5F7FA]/30"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5F7FA]/30"></div>
          </div>
          <div className="flex-1 p-2 flex gap-2">
            <div className={cn(
              "w-1/4 h-full rounded opacity-20 group-hover:opacity-40 transition-opacity",
              product.theme === 'cyan' ? "bg-[#00D9FF]" :
              product.theme === 'green' ? "bg-[#8CC63F]" :
              "bg-[#A855F7]"
            )}></div>
            <div className="flex-1 h-full flex flex-col gap-1.5">
              <div className={cn(
                "w-3/4 h-2 rounded opacity-30 group-hover:opacity-60 transition-opacity",
                product.theme === 'cyan' ? "bg-[#00D9FF]" :
                product.theme === 'green' ? "bg-[#8CC63F]" :
                "bg-[#A855F7]"
              )}></div>
              <div className={cn(
                "w-1/2 h-2 rounded opacity-20 group-hover:opacity-40 transition-opacity",
                product.theme === 'cyan' ? "bg-[#00D9FF]" :
                product.theme === 'green' ? "bg-[#8CC63F]" :
                "bg-[#A855F7]"
              )}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <h4 className="text-sm font-semibold text-[#F5F7FA] mb-4 uppercase tracking-wider">Key Features</h4>
        <ul className="space-y-3 mb-8 flex-grow">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 size={16} className={cn(
                "mt-0.5 shrink-0",
                product.theme === 'cyan' ? "text-[#00D9FF]" : 
                product.theme === 'green' ? "text-[#8CC63F]" : 
                "text-[#A855F7]"
              )} />
              <span className="text-sm text-[#A8B4C3]">{feature}</span>
            </li>
          ))}
        </ul>
        
        <GlowButton 
          variant={isPrimary ? 'primary' : 'outline'} 
          className="w-full mt-auto"
        >
          Explore {product.name}
        </GlowButton>
      </div>
    </GlassCard>
  );
};
