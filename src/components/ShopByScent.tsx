import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScentFamily } from '../types';

interface ShopByScentProps {
  onSelectFamily: (family: ScentFamily) => void;
  onViewAll: () => void;
}

export const ShopByScent: React.FC<ShopByScentProps> = ({ onSelectFamily, onViewAll }) => {
  const families: {
    id: ScentFamily;
    name: string;
    description: string;
    image: string;
    mood: string;
  }[] = [
    {
      id: 'floral',
      name: 'FLORAL',
      description: 'Soft, romantic & elegant',
      image: '/images/scent_floral.jpg',
      mood: 'Roses, peonies & sweet jasmine petals',
    },
    {
      id: 'oud',
      name: 'OUD',
      description: 'Rich, deep & mysterious',
      image: '/images/scent_oud.jpg',
      mood: 'Rare agarwood, smoked frankincense & amber',
    },
    {
      id: 'fresh',
      name: 'FRESH',
      description: 'Clean, crisp & invigorating',
      image: '/images/scent_fresh.jpg',
      mood: 'Sea minerals, citrus zest & cool botanical waters',
    },
    {
      id: 'oriental',
      name: 'ORIENTAL',
      description: 'Bold, warm & seductive',
      image: '/images/scent_oriental.jpg',
      mood: 'Exotic spices, smoked vanilla & golden resins',
    },
  ];

  return (
    <section id="scent-families" className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A67C4A] block mb-2">
              SHOP BY SCENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#161514] tracking-tight">
              Find Your Signature Scent
            </h2>
          </div>

          <button
            onClick={onViewAll}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-stone-900 hover:text-[#9A7444] transition-colors"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid - Styled directly from uploaded screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {families.map((fam) => (
            <div
              key={fam.id}
              onClick={() => onSelectFamily(fam.id)}
              className="group cursor-pointer flex flex-col bg-[#F6F2EA] rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#C5A880] transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Frame with Lazy Loading */}
              <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-stone-200 protected-media">
                <img
                  src={fam.image}
                  alt={`${fam.name} Perfume Collection`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 select-none"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Card Meta Content */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium tracking-wider text-stone-900 group-hover:text-[#8C6430] transition-colors">
                    {fam.name}
                  </h3>
                  <p className="mt-1 text-xs text-stone-600 font-light">
                    {fam.description}
                  </p>
                  <p className="mt-1.5 text-[11px] text-stone-400 italic">
                    {fam.mood}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-stone-900 group-hover:text-[#8C6430] group-hover:translate-x-0.5 transition-all">
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
