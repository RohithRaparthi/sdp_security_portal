import React, { useState } from 'react';
import { Download, Share2, ShoppingBag, CheckCircle, Sparkles } from 'lucide-react';
import { type GenStage } from './types';

interface AIPreviewPanelProps {
  isUploaded: boolean;
  stage: GenStage;
  resultImage?: string; // e.g. the generated look image
  originalImage?: string; // e.g. the uploaded photo
}

export const AIPreviewPanel: React.FC<AIPreviewPanelProps> = ({ 
  isUploaded, 
  stage, 
  resultImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  originalImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}) => {
  const [showOriginal, setShowOriginal] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setSaveStatus(action);
    setTimeout(() => setSaveStatus(null), 2500);
  };

  // If no photo uploaded yet
  if (!isUploaded) {
    return (
      <div className="flex flex-col h-full bg-[#050A14] border border-[#1A2E44] rounded-3xl overflow-hidden shadow-lg items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 rounded-full bg-[#020712] border border-[#1A2E44] flex items-center justify-center mb-6">
          <Sparkles size={28} className="text-[#1A2E44]" />
        </div>
        <p className="text-[#A8B4C3] text-sm max-w-[200px] text-center">
          Upload a photo and select a look to generate a preview.
        </p>
      </div>
    );
  }

  // Generation Loading States
  if (stage !== 'idle' && stage !== 'done') {
    return (
      <div className="flex flex-col h-full bg-[#050A14] border border-[#1A2E44] rounded-3xl overflow-hidden shadow-lg items-center justify-center min-h-[400px] relative">
        <div className="absolute inset-0 w-full h-full opacity-30">
          <img src={originalImage} alt="Processing" className="w-full h-full object-cover blur-md scale-105" />
        </div>
        
        <div className="z-10 bg-[#020712]/90 backdrop-blur-md px-8 py-6 rounded-2xl border border-[#1A2E44] flex flex-col items-center">
          <div className="w-10 h-10 border-2 border-[#A855F7] border-t-transparent rounded-full animate-spin mb-4"></div>
          <h3 className="text-[#F5F7FA] font-bold text-lg mb-1">
            {stage === 'preparing' ? 'Preparing your look...' : 'Generating preview...'}
          </h3>
          <p className="text-xs text-[#A8B4C3] font-mono uppercase tracking-wider">Please wait a moment</p>
        </div>
      </div>
    );
  }

  // Result State
  return (
    <div className="flex flex-col h-full bg-[#050A14] border border-[#1A2E44] rounded-3xl overflow-hidden shadow-lg relative">
      
      {/* Header */}
      <div className="p-4 border-b border-[#1A2E44] bg-[#020712] flex items-center justify-between z-10">
        <span className="text-xs font-mono font-bold text-[#A855F7] uppercase tracking-wider flex items-center gap-2">
          <Sparkles size={14} /> AI Preview
        </span>
        <div className="flex bg-[#05101A] border border-[#1A2E44] rounded-lg overflow-hidden">
          <button 
            onPointerDown={() => setShowOriginal(true)}
            onPointerUp={() => setShowOriginal(false)}
            onPointerLeave={() => setShowOriginal(false)}
            className="text-[10px] px-3 py-1.5 font-bold uppercase tracking-wider text-[#A8B4C3] hover:text-[#F5F7FA] hover:bg-[#1A2E44] transition-colors cursor-pointer select-none"
          >
            Hold for Original
          </button>
        </div>
      </div>

      {/* Image Area */}
      <div className="flex-1 relative bg-[#010308] min-h-[400px]">
        <img 
          src={showOriginal ? originalImage : resultImage} 
          alt={showOriginal ? "Original Photo" : "Virtual Try-On Result"} 
          className="w-full h-full object-cover object-center transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/80 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Toast Notification */}
        {saveStatus && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#F5F7FA] text-[#020712] px-4 py-2 rounded-full font-bold text-xs flex items-center gap-2 shadow-xl animate-in slide-in-from-top-4 fade-in">
            <CheckCircle size={14} className="text-[#8CC63F]" />
            {saveStatus === 'save' && 'Look saved to profile'}
            {saveStatus === 'share' && 'Share link copied'}
            {saveStatus === 'shop' && 'Added to shopping bag'}
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-center gap-3">
          <button 
            onClick={() => handleAction('save')}
            className="w-12 h-12 rounded-full bg-[#020712]/80 backdrop-blur-md border border-[#1A2E44] text-[#F5F7FA] flex items-center justify-center hover:bg-[#F5F7FA] hover:text-[#020712] transition-colors shadow-lg cursor-pointer group"
          >
            <Download size={18} className="group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={() => handleAction('shop')}
            className="px-6 h-12 rounded-full bg-[#F5F7FA] text-[#020712] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#A855F7] hover:text-white transition-colors shadow-lg cursor-pointer group flex-1 max-w-[200px]"
          >
            <ShoppingBag size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            Shop Look
          </button>

          <button 
            onClick={() => handleAction('share')}
            className="w-12 h-12 rounded-full bg-[#020712]/80 backdrop-blur-md border border-[#1A2E44] text-[#F5F7FA] flex items-center justify-center hover:bg-[#F5F7FA] hover:text-[#020712] transition-colors shadow-lg cursor-pointer group"
          >
            <Share2 size={18} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
