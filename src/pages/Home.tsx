import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { LiveStatusStrip } from '../components/hero/LiveStatusStrip';
import { ProductDiscoveryUniverse } from '../components/products/ProductDiscoveryUniverse';
import { SChatSection } from '../components/products/SChatSection';
import { OutfitAISection } from '../components/products/OutfitAISection';
import { SecurityPortalSection } from '../components/products/SecurityPortalSection';
import { SecurityArchitecture } from '../components/security/SecurityArchitecture';
import { ServicesSection } from '../components/services/ServicesSection';
import { TechnologyStack } from '../components/technology/TechnologyStack';
import { DevelopmentProcess } from '../components/process/DevelopmentProcess';
import { WhyChooseUs } from '../components/about/WhyChooseUs';
import { IndustriesSection } from '../components/industries/IndustriesSection';
import { CompanyStory } from '../components/about/CompanyStory';
import { InnovationLaunchpad } from '../components/about/InnovationLaunchpad';

export const Home: React.FC = () => {
  return (
    <main className="flex-grow w-full overflow-hidden">
      {/* 01 Hero */}
      <HeroSection />

      {/* 02 Live System Status */}
      <LiveStatusStrip />

      {/* 03 Product Discovery */}
      <ProductDiscoveryUniverse />

      {/* 04 S-Chat Preview */}
      <SChatSection />

      {/* 05 Outfit AI Preview */}
      <OutfitAISection />

      {/* 06 AI Build Security Preview */}
      <SecurityPortalSection />

      {/* 07 Security Architecture */}
      <SecurityArchitecture />

      {/* 08 Services (Horizontal Discovery Rail) */}
      <ServicesSection />

      {/* 09 Technology Ecosystem */}
      <TechnologyStack />

      {/* 10 Development Process */}
      <DevelopmentProcess />

      {/* 11 Why SDP (4 Evidence Cards) */}
      <WhyChooseUs />

      {/* 12 Industries (Horizontal Rail) */}
      <IndustriesSection />

      {/* 13 Company Story */}
      <CompanyStory />

      {/* 14 Innovation Launchpad */}
      <InnovationLaunchpad />
    </main>
  );
};
