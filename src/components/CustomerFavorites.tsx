import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star, ShoppingBag, Eye } from 'lucide-react';
import { Product, Currency } from '../types';

interface CustomerFavoritesProps {
  products: Product[];
  currency: Currency;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onViewAllBestSellers: () => void;
}

export const CustomerFavorites: React.FC<CustomerFavoritesProps> = ({
  products,
  currency,
  onSelectProduct,
  onAddToCart,
  onViewAllBestSellers,
}) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Best seller items
  const bestSellers = products.filter((p) => p.isBestSeller);
  const itemsPerPage = 4;
  const maxIndex = Math.max(0, bestSellers.length - itemsPerPage);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleItems = bestSellers.slice(scrollIndex, scrollIndex + itemsPerPage);

  return (
    <section id="best-sellers" className="bg-[#111111] text-white py-18 sm:py-24 border-b border-stone-800 relative overflow-hidden">
      {/* Delicate background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Intro Column - Styled exactly from uploaded screenshot */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] block mb-2">
                BEST SELLERS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F7F4EE] leading-[1.12]">
                Customer <br />
                Favorites
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-xs">
              Loved by thousands around the world and across Nigeria. Formulated with authentic French perfume essences and Arabian oud.
            </p>

            <div>
              <button
                onClick={onViewAllBestSellers}
                className="group inline-flex items-center gap-2 px-5 py-3 border border-stone-700 hover:border-[#D4AF37] text-[#F3EFEA] hover:text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium transition-all"
              >
                <span>SHOP BEST SELLERS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Carousel navigation buttons matching image (< and >) */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handlePrev}
                disabled={scrollIndex === 0}
                className="w-10 h-10 rounded-full border border-stone-700 hover:border-stone-400 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-stone-300 hover:text-white transition"
                aria-label="Previous fragrance"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                disabled={scrollIndex >= maxIndex}
                className="w-10 h-10 rounded-full border border-stone-700 hover:border-stone-400 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-stone-300 hover:text-white transition"
                aria-label="Next fragrance"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Product Slider Grid (4 items side-by-side) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {visibleItems.map((product) => {
                const formattedPrice =
                  currency === 'NGN'
                    ? `₦${product.priceNGN.toLocaleString()}`
                    : `$${product.priceUSD.toFixed(2)}`;

                return (
                  <div
                    key={product.id}
                    className="group bg-[#181818] rounded-xl overflow-hidden border border-stone-800/80 hover:border-[#C5A880]/60 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Bottle Image with Lazy Load and Protected Media */}
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
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 select-none"
                      />

                      {/* Quick action overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectProduct(product);
                          }}
                          className="p-2.5 rounded-full bg-white/90 text-stone-900 hover:bg-white shadow-lg transition"
                          title="Quick View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="p-2.5 rounded-full bg-[#D4AF37] text-stone-900 hover:bg-[#E5C35E] shadow-lg transition"
                          title="Add to Shopping Bag"
                        >
                          <ShoppingBag className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Volume badge */}
                      <span className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-[10px] text-stone-300 px-2 py-0.5 rounded-md border border-white/10">
                        {product.volume}
                      </span>
                    </div>

                    {/* Meta content matching the uploaded image */}
                    <div className="p-4 text-center">
                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-serif text-sm sm:text-base text-[#F7F4EE] font-medium hover:text-[#D4AF37] transition-colors cursor-pointer truncate"
                      >
                        {product.name}
                      </h3>

                      {/* Stars & review count */}
                      <div className="flex items-center justify-center gap-1 mt-1.5 text-xs text-[#E5C35E]">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-current stroke-none"
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-stone-400 ml-1">
                          ({product.reviewCount.toLocaleString()})
                        </span>
                      </div>

                      {/* Price in selected currency */}
                      <p className="mt-2 text-sm sm:text-base font-semibold text-white tracking-wide">
                        {formattedPrice}
                      </p>

                      {/* Quick Add Button */}
                      <button
                        onClick={() => onAddToCart(product)}
                        className="mt-3 w-full py-2 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-stone-800 hover:bg-[#C5A880] text-stone-200 hover:text-stone-900 transition-colors"
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
  );
};
