import React from 'react';
import { Camera, Image as ImageIcon, RefreshCcw } from 'lucide-react';

interface PhotoUploadPanelProps {
  isUploaded: boolean;
  onUpload: () => void;
  onChangePhoto: () => void;
}

export const PhotoUploadPanel: React.FC<PhotoUploadPanelProps> = ({ isUploaded, onUpload, onChangePhoto }) => {
  return (
    <div className="flex flex-col h-full bg-[#050A14] border border-[#1A2E44] rounded-3xl overflow-hidden shadow-lg relative group">
      
      {/* Header */}
      <div className="p-4 border-b border-[#1A2E44] bg-[#020712] flex items-center justify-between">
        <span className="text-xs font-mono font-bold text-[#A8B4C3] uppercase tracking-wider">Your Photo</span>
        {isUploaded && (
          <button 
            onClick={onChangePhoto}
            className="text-[10px] flex items-center gap-1.5 text-[#F5F7FA] hover:text-[#A855F7] transition-colors uppercase font-bold tracking-wider"
          >
            <RefreshCcw size={12} />
            Change
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 relative flex items-center justify-center bg-[#010308] overflow-hidden min-h-[400px]">
        {isUploaded ? (
          // Mock Uploaded Photo
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Uploaded Customer" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020712]/60 to-transparent"></div>
          </div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center p-8 text-center z-10 w-full max-w-sm">
            <div className="w-20 h-20 rounded-full bg-[#071625] border border-[#1A2E44] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <Camera size={32} className="text-[#A8B4C3]" />
            </div>
            
            <h3 className="text-xl font-bold text-[#F5F7FA] mb-2">Upload Portrait</h3>
            <p className="text-xs text-[#A8B4C3] mb-8 leading-relaxed">
              For best virtual try-on results, use a well-lit front-facing photo against a neutral background.
            </p>
            
            <div className="flex flex-col w-full gap-3">
              <button 
                onClick={onUpload}
                className="w-full py-3.5 bg-[#A855F7] hover:bg-[#9333EA] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2"
              >
                <ImageIcon size={16} />
                Upload Photo
              </button>
              
              <button 
                onClick={onUpload}
                className="w-full py-3.5 bg-transparent border border-[#1A2E44] hover:border-[#F5F7FA] text-[#F5F7FA] text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Camera size={16} />
                Use Camera
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
