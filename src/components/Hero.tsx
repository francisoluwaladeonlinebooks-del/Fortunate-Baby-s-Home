import React from 'react';
import { ArrowRight, Sparkles, Clock, Gift, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onExploreCollections: () => void;
  onNewArrivalClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopClick,
  onExploreCollections,
  onNewArrivalClick,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FBF9F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EFECE6]">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E7D7]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#EADCC9]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Editorial Typography */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-7 text-left">
            {/* Micro-kicker */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A67C4A]">
                SCENT YOUR STORY
              </span>
            </div>

            {/* Headline matching image: "Elegance in Every Note" */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[#141312] leading-[1.08]">
              Elegance <br />
              <span className="font-serif italic font-light text-[#9E733D] tracking-normal">
                in Every Note
              </span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-stone-600 max-w-xl font-light leading-relaxed">
              Discover luxury fragrances crafted to inspire, captivate, and leave a lasting impression. Hand-blended essences, Arabian oud, and Parisian flacons curated in Nigeria.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopClick}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141312] text-[#F3EFEA] text-xs uppercase tracking-[0.22em] font-medium rounded-none hover:bg-[#2A2723] hover:text-white transition-all shadow-md active:scale-95"
              >
                <span>SHOP NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreCollections}
                className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-[#141312] text-xs uppercase tracking-[0.22em] font-medium border border-[#141312] rounded-none hover:bg-[#141312] hover:text-[#F3EFEA] transition-all"
              >
                EXPLORE COLLECTIONS
              </button>
            </div>

            {/* 3 Pillars matching image below buttons */}
            <div className="pt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#EAE5DC]">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#A67C4A]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-900">
                    PREMIUM QUALITY
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-500 font-light">Finest ingredients</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#A67C4A]">
                  <Clock className="w-4 h-4" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-900">
                    LONG LASTING
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-500 font-light">Fragrance that stays</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#A67C4A]">
                  <Gift className="w-4 h-4" />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-900">
                    BEAUTIFUL GIFTING
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-stone-500 font-light">Perfect for every occasion</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Perfume Flacon & Circular Badge */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#F5EFE6] to-[#ECE3D4] border border-[#E4DACB] protected-media">
              
              {/* Product Image Lazy Loaded & Optimized */}
              <img
                src="/images/hero_bottle.jpg"
                alt="Luxora Signature Eau de Parfum Flacon"
                loading="eager"
                decoding="async"
                draggable={false}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 select-none"
              />

              {/* Floating "NEW ARRIVAL" circular badge matching user image */}
              <button
                onClick={onNewArrivalClick}
                className="absolute top-6 right-6 w-24 h-24 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#C5A880]/50 text-white flex flex-col items-center justify-center p-2 shadow-xl hover:scale-105 transition-transform cursor-pointer group"
                title="Discover the New Vanilla Voyage Arrival"
              >
                <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#E5D2BA] text-center leading-tight">
                  NEW ARRIVAL
                </span>
                <span className="text-[8px] text-stone-400 font-light mt-0.5 group-hover:text-white transition-colors">
                  Discover Now
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 animate-ping" />
              </button>

              {/* Delicate glass overlay vignette */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/15 pointer-events-none" />

              {/* Bottom Subtle Caption Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/60 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-900">
                    Luxora Signature Edition
                  </p>
                  <p className="text-[10px] text-stone-500">Pure Eau de Parfum • 100ml flacon</p>
                </div>
                <span className="text-xs font-serif font-medium text-[#8F6632]">Handcrafted</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
