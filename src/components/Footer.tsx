import React from 'react';
import { MapPin, Phone, MessageCircle, Lock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'products' | 'about') => void;
  onOpenAnalytics?: () => void;
  onOpenBackup?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#121110] text-[#D8D4CC] pt-18 pb-14 border-t border-stone-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-800">
          
          {/* Brand & Business Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-[#C5A880]">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] text-[#F3EFEA] uppercase font-medium mt-1">
                FORTUNATE BABY'S HOME
              </span>
              <span className="text-xs uppercase tracking-[0.35em] text-[#8C867F] font-sans font-medium">
                PERFUMES, SKINCARE & BABY ITEMS
              </span>
            </div>

            <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-md">
              Retail of baby items, skin care products, and various perfumes and sprays. Serving walk-in physical market customers and online shoppers across Nigeria.
            </p>

            {/* Business Location & Contact Channels */}
            <div className="pt-2 text-sm text-stone-300 space-y-2">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Oka Aro New Town Market, Akure, Ondo State, Nigeria.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>Phone: <a href="tel:08073432298" className="text-white hover:underline font-semibold">08073432298</a></span>
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>WhatsApp: <a href="https://wa.me/2348073432298" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">Message on WhatsApp</a></span>
              </p>
            </div>
          </div>

          {/* Column 2: PAGES NAVIGATION (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-semibold uppercase tracking-widest text-[#F3EFEA] text-xs sm:text-sm">
              WEBSITE PAGES
            </h4>
            <ul className="space-y-3 text-stone-300 font-light text-sm sm:text-base">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  Product Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition text-left cursor-pointer"
                >
                  About Page & Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: CORE OFFERINGS (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-semibold uppercase tracking-widest text-[#F3EFEA] text-xs sm:text-sm">
              CORE OFFERINGS
            </h4>
            <ul className="space-y-2.5 text-stone-300 font-light text-sm sm:text-base">
              <li>• Perfumes & Designer Sprays (Vanilla Voyage, Cocktail, Momento Riffs, Giorgio Black)</li>
              <li>• Skin Care Lotions & Serums (Dr. Davey, Aqua Rich, PRO LAB, VC Oil)</li>
              <li>• Curated Combos & Gift Packages (The 19k Combo with video)</li>
              <li>• Baby Items & Gentle Family Skincare</li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Security Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-xs sm:text-sm">
          <p>© 2024–2026 Fortunate Baby's Home. All Rights Reserved. Oka Aro Market, Akure.</p>
          
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Lock className="w-4 h-4 text-[#C5A880]" />
              <span>256-Bit SSL Encrypted</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Digital IP & Copyright Protected</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
