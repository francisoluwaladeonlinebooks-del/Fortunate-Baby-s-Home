import React from 'react';
import { Product, Currency, ScentFamily } from '../types';
import { ArrowRight, Sparkles, Clock, Gift, ShieldCheck, Heart, Star, ShoppingBag, Eye, MessageCircle, Play, MapPin, Phone } from 'lucide-react';
import { ValueProps } from '../components/ValueProps';
import { PressStrip } from '../components/PressStrip';
import { Newsletter } from '../components/Newsletter';

interface HomePageProps {
  products: Product[];
  currency: Currency;
  onNavigate: (page: 'home' | 'products' | 'about') => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onSelectCategoryFilter: (category: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  currency,
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onSelectCategoryFilter,
}) => {
  // Best seller items from drive products
  const bestSellers = products.filter((p) => p.isBestSeller);
  const heroProduct = products.find((p) => p.id === 'vanilla-voyage') || products[0];
  const comboProduct = products.find((p) => p.id === 'the-combo');

  const categories = [
    {
      id: 'perfume',
      name: 'Perfumes & Sprays',
      description: 'Long-lasting designer scents, Parisian blends & Arabian notes',
      image: '/products/vanilla_voyage_100ml.jpg',
      count: '4 Products',
    },
    {
      id: 'skincare',
      name: 'Skin Care Products',
      description: 'Collagen glow lotions, SPF50+ sunscreens & Vitamin C oils',
      image: '/products/dr_davey_lotion.jpg',
      count: '4 Products',
    },
    {
      id: 'combo',
      name: 'Curated Combos & Sets',
      description: 'All-in-one fragrance & skincare pairings with video guides',
      image: '/products/the_combo_19k_thumb.jpg',
      count: 'Exclusive Set',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section matching the user's design image style */}
      <section className="relative overflow-hidden bg-[#FBF9F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EFECE6]">
        {/* Subtle ambient luxury gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E7D7]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#EADCC9]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column - Editorial Typography */}
            <div className="lg:col-span-7 xl:col-span-6 space-y-7 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#A67C4A]">
                  FORTUNATE BABY'S HOME • AKURE
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-[#141312] leading-[1.08]">
                Elegance <br />
                <span className="font-serif italic font-light text-[#9E733D] tracking-normal">
                  in Every Note
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-600 max-w-xl font-light leading-relaxed">
                Welcome to <strong>Fortunate Baby's Home</strong>. We specialize in the retail of baby items, skin care products, and various luxury perfumes and sprays at Oka Aro New Town Market, Akure.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#141312] text-[#F3EFEA] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#2A2723] hover:text-white transition-all shadow-md active:scale-95"
                >
                  <span>SHOP PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center justify-center px-7 py-4 bg-transparent text-[#141312] text-xs uppercase tracking-[0.22em] font-medium border border-[#141312] hover:bg-[#141312] hover:text-[#F3EFEA] transition-all"
                >
                  ABOUT & CONTACT US
                </button>
              </div>

              {/* 3 Pillars matching reference design */}
              <div className="pt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#EAE5DC]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#A67C4A]">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-stone-900">
                      ORIGINAL STOCK
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-light">100% verified brands</p>
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
                      FAMILY CARE
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-500 font-light">Baby & adult essentials</p>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Product Card */}
            <div className="lg:col-span-5 xl:col-span-6 relative flex justify-center lg:justify-end">
              <div
                onClick={() => onSelectProduct(heroProduct)}
                className="relative w-full max-w-md lg:max-w-lg aspect-4/5 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#F5EFE6] to-[#ECE3D4] border border-[#E4DACB] protected-media cursor-pointer group"
              >
                <img
                  src={heroProduct.image}
                  alt={heroProduct.name}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 select-none"
                />

                {/* Floating "NEW ARRIVAL - Discover Now" badge */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-[#111111]/90 backdrop-blur-md border border-[#C5A880]/50 text-white flex flex-col items-center justify-center p-2 shadow-xl group-hover:scale-105 transition-transform">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#E5D2BA] text-center leading-tight">
                    TOP SELLER
                  </span>
                  <span className="text-[8px] text-stone-400 font-light mt-0.5">
                    Vanilla Voyage
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1 animate-ping" />
                </div>

                {/* Caption Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/60 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-stone-900">
                      {heroProduct.name}
                    </p>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {currency === 'NGN' ? `₦${heroProduct.priceNGN.toLocaleString()}` : `$${heroProduct.priceUSD}`} • In Stock in Akure
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#141312] text-white rounded-lg">
                    View
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Value Propositions Strip */}
      <ValueProps currency={currency} onSupportClick={() => onNavigate('about')} />

      {/* 3. Core Offerings Showcase */}
      <section className="py-16 sm:py-24 bg-[#FBF9F5] border-b border-[#ECE7DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A67C4A] block mb-2">
              CORE OFFERINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900">
              Explore Our Specialty Departments
            </h2>
            <p className="mt-3 text-sm text-stone-600 font-light">
              Tailored for walk-in physical shoppers at Oka Aro Market and online customers across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  onSelectCategoryFilter(cat.id);
                  onNavigate('products');
                }}
                className="group cursor-pointer bg-[#F6F2EA] rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#C5A880] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-stone-200 protected-media">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <span className="absolute top-3 right-3 bg-white/90 text-stone-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-full shadow-2xs">
                    {cat.count}
                  </span>
                </div>

                <div className="p-6 text-center">
                  <h3 className="font-serif text-2xl font-medium text-stone-900 group-hover:text-[#8C6430] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-stone-600 font-light leading-relaxed">
                    {cat.description}
                  </p>
                  <div className="mt-5 pt-3.5 border-t border-stone-200">
                    <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-900 group-hover:text-[#8C6430]">
                      <span>Shop Category</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Customer Favorites (Dark luxury Best Sellers Carousel) */}
      <section className="bg-[#111111] text-white py-18 sm:py-24 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] block mb-2">
                  BEST SELLERS
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F4EE] leading-[1.12]">
                  Customer <br />
                  Favorites
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                Authentic perfumes, luxury lotions, and glowing body care loved by our walk-in and online customers.
              </p>

              <div>
                <button
                  onClick={() => onNavigate('products')}
                  className="group inline-flex items-center gap-2 px-5 py-3 border border-stone-700 hover:border-[#D4AF37] text-[#F3EFEA] hover:text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium transition-all"
                >
                  <span>VIEW ALL PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {bestSellers.slice(0, 4).map((product) => {
                  const formattedPrice =
                    currency === 'NGN'
                      ? `₦${product.priceNGN.toLocaleString()}`
                      : `$${product.priceUSD.toFixed(2)}`;

                  return (
                    <div
                      key={product.id}
                      className="group bg-[#181818] rounded-xl overflow-hidden border border-stone-800/80 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div
                        onClick={() => onSelectProduct(product)}
                        className="relative aspect-4/5 overflow-hidden bg-[#1F1F1F] cursor-pointer protected-media"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProduct(product);
                            }}
                            className="p-2.5 rounded-full bg-white/90 text-stone-900 hover:bg-white shadow-lg transition"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onAddToCart(product);
                            }}
                            className="p-2.5 rounded-full bg-[#D4AF37] text-stone-900 hover:bg-[#E5C35E] shadow-lg transition"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="p-4 sm:p-5 text-center">
                        <h3
                          onClick={() => onSelectProduct(product)}
                          className="font-serif text-base sm:text-lg text-[#F7F4EE] font-medium hover:text-[#D4AF37] transition-colors cursor-pointer truncate"
                        >
                          {product.name}
                        </h3>

                        <div className="flex items-center justify-center gap-1.5 mt-1.5 text-xs sm:text-sm text-[#E5C35E]">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                            ))}
                          </div>
                          <span className="text-xs text-stone-400 ml-1">
                            ({product.reviewCount})
                          </span>
                        </div>

                        <p className="mt-2 text-base sm:text-lg font-bold text-white tracking-wide">
                          {formattedPrice}
                        </p>

                        <button
                          onClick={() => onAddToCart(product)}
                          className="mt-3.5 w-full py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider bg-stone-800 hover:bg-[#C5A880] text-stone-200 hover:text-stone-900 transition-colors cursor-pointer"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Customer Video Spotlight (The Combo) */}
      {comboProduct && (
        <section className="py-16 sm:py-20 bg-[#F4EFE6] border-b border-[#ECE7DE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2D9CC] shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6430] flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  REAL STORE DEMONSTRATION
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal leading-tight">
                  The Signature Fragrance & Skincare Combo
                </h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Watch our live unboxing and product test! Combines an enduring perfume spray with deep glow essentials for full day fragrance projection and hydrated skin.
                </p>
                <div className="pt-2">
                  <span className="text-2xl font-bold text-stone-900 block mb-3">
                    {currency === 'NGN' ? '₦19,000' : '$49.00'}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => onAddToCart(comboProduct)}
                      className="px-6 py-3 bg-[#141312] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition"
                    >
                      Add Combo to Bag
                    </button>
                    <a
                      href="https://wa.me/2348073432298?text=Hello%20Fortunate%20Boutique,%20I%20want%20to%20order%20the%2019k%20combo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 bg-emerald-600 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-700 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Order</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-md aspect-9/16 max-h-[460px] rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <video
                    src="/products/the_combo_19k.mp4"
                    controls
                    playsInline
                    poster="/products/the_combo_19k_thumb.jpg"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Press & Authenticity Badges */}
      <PressStrip />

      {/* 7. Akure Walk-in Store Invitation Banner */}
      <section className="py-14 bg-[#141312] text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#24211D] border border-[#C5A880]/40 flex items-center justify-center mx-auto text-[#D4AF37]">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F4EE]">
            Visit Our Store in Akure
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 max-w-lg mx-auto font-light">
            Located at <strong>Oka Aro New Town Market, Akure, Ondo State, Nigeria</strong>. Walk in to test scents in person or call us on <a href="tel:08073432298" className="text-[#E6C594] underline">08073432298</a>.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('about')}
              className="px-7 py-3 bg-[#C5A880] text-stone-900 rounded-xl text-xs font-semibold uppercase tracking-widest hover:brightness-110 transition shadow-md"
            >
              Get Directions & Store Details
            </button>
          </div>
        </div>
      </section>

      {/* 8. Newsletter */}
      <Newsletter />
    </div>
  );
};
