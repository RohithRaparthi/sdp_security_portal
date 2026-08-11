import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { HeroSection } from '../components/hero/HeroSection';
import { TrustStrip } from '../components/hero/TrustStrip';
import { ProductsSection } from '../components/products/ProductsSection';
import { SChatSection } from '../components/products/SChatSection';
import { OutfitAISection } from '../components/products/OutfitAISection';
import { SecurityPortalSection } from '../components/products/SecurityPortalSection';
import { SecurityPlatform } from '../components/security/SecurityPlatform';
import { SecurityArchitecture } from '../components/security/SecurityArchitecture';
import { ServicesSection } from '../components/services/ServicesSection';
import { TechnologyStack } from '../components/technology/TechnologyStack';
import { DevelopmentProcess } from '../components/process/DevelopmentProcess';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { IndustriesSection } from '../components/industries/IndustriesSection';
import { AboutSection } from '../components/about/AboutSection';
import { FinalCTA } from '../components/about/FinalCTA';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#020712] text-[#F5F7FA]">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <TrustStrip />
        <ProductsSection />
        <SChatSection />
        <OutfitAISection />
        <SecurityPortalSection />
        <SecurityPlatform />
        <SecurityArchitecture />
        <ServicesSection />
        <TechnologyStack />
        <DevelopmentProcess />
        <WhyChooseUs />
        <IndustriesSection />
        <AboutSection />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};
