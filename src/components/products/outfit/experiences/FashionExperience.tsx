import React, { useState } from 'react';
import { cn } from '../../../../utils/cn';
import { type ProductItem } from '../types';

interface FashionExperienceProps {
  onSelectProduct: (product: ProductItem) => void;
  selectedProductId: string | null;
}

export const FashionExperience: React.FC<FashionExperienceProps> = ({ onSelectProduct, selectedProductId }) => {
  const categories = ['Dresses', 'Sarees', 'Shirts', 'T-Shirts', 'Pants', 'Ethnic Wear'];
  const [activeCategory, setActiveCategory] = useState('Dresses');

  const products: ProductItem[] = [
    { id: 'f1', name: 'Emerald Silk Evening Gown', category: 'Dresses', color: 'Emerald', style: 'Evening' },
    { id: 'f2', name: 'Minimalist Poplin Shirt', category: 'Shirts', color: 'White', style: 'Classic' },
    { id: 'f3', name: 'Banarasi Silk Saree', category: 'Sarees', color: 'Crimson', style: 'Traditional' },
    { id: 'f4', name: 'Wide-Leg Wool Trousers', category: 'Pants', color: 'Charcoal', style: 'Modern' },
    { id: 'f5', name: 'Oversized Heavyweight Tee', category: 'T-Shirts', color: 'Black', style: 'Streetwear' },
    { id: 'f6', name: 'Embroidered Kurta Set', category: 'Ethnic Wear', color: 'Ivory', style: 'Festive' },
  ];

  const filteredProducts = products.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2">
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all cursor-pointer",
              activeCategory === cat 
                ? "bg-[#020712] border-[#F5F7FA] text-[#F5F7FA]" 
                : "bg-transparent border-[#1A2E44] text-[#A8B4C3] hover:border-[#A8B4C3]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => {
            const isSelected = selectedProductId === product.id;
            return (
              <div 
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className={cn(
                  "flex flex-col p-3 rounded-2xl border transition-all cursor-pointer group",
                  isSelected 
                    ? "bg-[#071625] border-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.15)]" 
                    : "bg-[#020712] border-[#1A2E44] hover:border-[#A8B4C3]"
                )}
              >
                <div className="aspect-[3/4] w-full rounded-xl bg-[#050A14] mb-3 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A2E44]/20 to-transparent"></div>
                  {/* Generic Placeholder representation */}
                  <div className="w-12 h-12 rounded bg-[#1A2E44] opacity-50 group-hover:scale-110 transition-transform"></div>
                </div>
                <h4 className="text-[#F5F7FA] font-bold text-sm mb-1 truncate">{product.name}</h4>
                <p className="text-[#A8B4C3] text-xs mb-3">{product.color} • {product.style}</p>
                <button 
                  className={cn(
                    "w-full py-2 rounded-lg text-xs font-bold transition-colors",
                    isSelected 
                      ? "bg-[#A855F7] text-white" 
                      : "bg-[#1A2E44] text-[#F5F7FA] group-hover:bg-[#F5F7FA] group-hover:text-[#020712]"
                  )}
                >
                  {isSelected ? 'Selected' : 'Select'}
                </button>
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-12 text-center text-[#A8B4C3] text-sm">
            Select a category to view products.
          </div>
        )}
      </div>

    </div>
  );
};
