import React, { useState } from 'react';
import { PhotoUploadPanel } from './PhotoUploadPanel';
import { AIPreviewPanel } from './AIPreviewPanel';
import { ExperienceSelector } from './ExperienceSelector';
import { FashionExperience } from './experiences/FashionExperience';
import { BeautyExperience } from './experiences/BeautyExperience';
import { HairstyleExperience } from './experiences/HairstyleExperience';
import { CompleteLookExperience } from './experiences/CompleteLookExperience';
import { type ExperienceMode, type GenStage, type ProductItem } from './types';

export const VirtualTryOnStudio: React.FC = () => {
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [activeMode, setActiveMode] = useState<ExperienceMode>('fashion');
  const [genStage, setGenStage] = useState<GenStage>('idle');
  
  // Selections
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const handleUpload = () => {
    setIsPhotoUploaded(true);
  };

  const handleChangePhoto = () => {
    setIsPhotoUploaded(false);
    setGenStage('idle');
    setSelectedProduct(null);
  };

  const handleGenerate = () => {
    if (!isPhotoUploaded) return;
    setGenStage('preparing');
    setTimeout(() => setGenStage('generating'), 1000);
    setTimeout(() => setGenStage('done'), 2500);
  };

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    if (isPhotoUploaded) {
      handleGenerate();
    }
  };

  const handleChangeStyle = () => {
    if (isPhotoUploaded) {
      handleGenerate();
    }
  };

  return (
    <div className="w-full bg-[#020712] rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#1A2E44] shadow-2xl relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#A855F7] opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 relative z-10">
        
        {/* A: Photo (Mobile: 1, Desktop: Top Left) */}
        <div className="lg:col-span-6 xl:col-span-5 h-[400px] sm:h-[450px] order-1">
          <PhotoUploadPanel 
            isUploaded={isPhotoUploaded} 
            onUpload={handleUpload} 
            onChangePhoto={handleChangePhoto}
          />
        </div>

        {/* C: AI Preview (Mobile: 3, Desktop: Right, Spans 2 rows) */}
        <div className="lg:col-span-6 xl:col-span-7 lg:row-span-2 h-[500px] sm:h-[600px] lg:h-auto lg:min-h-[850px] order-3 lg:order-2">
          <AIPreviewPanel 
            isUploaded={isPhotoUploaded} 
            stage={genStage} 
            originalImage="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            resultImage="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />
        </div>

        {/* B: Experiences (Mobile: 2, Desktop: Bottom Left) */}
        <div className="lg:col-span-6 xl:col-span-5 bg-[#050A14] border border-[#1A2E44] rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col order-2 lg:order-3 lg:h-[calc(850px-450px-2rem)]">
          <ExperienceSelector activeMode={activeMode} onSelect={setActiveMode} />
          
          <div className="flex-1 relative overflow-y-auto no-scrollbar">
            {activeMode === 'fashion' && (
              <FashionExperience 
                selectedProductId={selectedProduct?.id ?? null} 
                onSelectProduct={handleSelectProduct} 
              />
            )}
            {activeMode === 'beauty' && (
              <BeautyExperience onChange={handleChangeStyle} />
            )}
            {activeMode === 'hairstyle' && (
              <HairstyleExperience onChange={handleChangeStyle} />
            )}
            {activeMode === 'complete' && (
              <CompleteLookExperience onGenerate={handleGenerate} />
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
