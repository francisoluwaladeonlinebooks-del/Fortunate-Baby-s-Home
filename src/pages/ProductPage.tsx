import React, { useState } from 'react';
import { Product, Currency, ProductCategory } from '../types';
import { Search, SlidersHorizontal, Star, ShoppingBag, Eye, MessageCircle, Play, Sparkles, Filter, Check } from 'lucide-react';

interface ProductPageProps {
  products: Product[];
  currency: Currency;
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  products,
  currency,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  // Filter products
  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchSub = p.subtitle.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchNotes = p.notes && (
        p.notes.top.some(n => n.toLowerCase().includes(q)) ||
        p.notes.heart.some(n => n.toLowerCase().includes(q)) ||
        p.notes.base.some(n => n.toLowerCase().includes(q))
      );
      if (!matchName && !matchSub && !matchDesc && !matchNotes) {
        return false;
      }
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') {
      return (currency === 'NGN' ? a.priceNGN - b.priceNGN : a.priceUSD - b.priceUSD);
    }
    if (sortBy === 'price-high') {
      return (currency === 'NGN' ? b.priceNGN - a.priceNGN : b.priceUSD - a.priceUSD);
    }
    if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  const categoryTabs: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'perfume', label: 'Perfumes & Sprays', count: products.filter(p => p.category === 'perfume').length },
    { id: 'skincare', label: 'Skin Care Products', count: products.filter(p => p.category === 'skincare').length },
    { id: 'combo', label: 'Curated Combos', count: products.filter(p => p.category === 'combo').length },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Banner / Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A67C4A] block mb-2">
            FORTUNATE BABY'S HOME • ONLINE CATALOG
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Our Complete Inventory
          </h1>
          <p className="mt-3 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            Authentic French perfumery, Arabian flacons, collagen lotions, and beauty oils. Available for in-store pickup at Oka Aro Market, Akure, or instant door-to-door delivery.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#F4EFE6] p-4 rounded-2xl border border-[#E6DECF]">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#141312] text-[#F3EFEA] shadow-xs'
                    : 'bg-white/80 text-stone-700 hover:bg-white hover:text-black border border-stone-200/80'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search perfume, lotion, notes..."
                className="w-full pl-9 pr-3 py-2 bg-white rounded-xl text-xs border border-stone-200 focus:outline-hidden focus:border-[#C5A880] text-stone-800 placeholder-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort inventory"
                className="appearance-none bg-white border border-stone-200 rounded-xl px-3.5 py-2 pr-8 text-xs font-medium text-stone-800 focus:outline-hidden focus:border-[#C5A880] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <SlidersHorizontal className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Empty State */}
        {sortedProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-stone-300">
            <p className="font-serif text-2xl text-stone-800">No products match your search.</p>
            <p className="text-xs text-stone-500 mt-2">Try clearing your search terms or checking another category tab.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-5 px-6 py-2.5 bg-[#141312] text-white rounded-xl text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => {
            const formattedPrice =
              currency === 'NGN'
                ? `₦${product.priceNGN.toLocaleString()}`
                : `$${product.priceUSD.toFixed(2)}`;

            const originalPrice =
              product.originalPriceNGN &&
              (currency === 'NGN'
                ? `₦${product.originalPriceNGN.toLocaleString()}`
                : `$${product.originalPriceUSD?.toFixed(2)}`);

            const whatsAppOrderUrl = `https://wa.me/2348073432298?text=${encodeURIComponent(
              `Hello Fortunate Baby's Home, I want to buy: ${product.name} (${formattedPrice}).\nDelivery: Akure or Nigeria.\nPlease confirm availability.`
            )}`;

            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E1D5] hover:border-[#C5A880] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                {/* Product Image Frame */}
                <div
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-4/5 overflow-hidden bg-[#F5F2EB] cursor-pointer protected-media"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 select-none"
                  />

                  {/* Video Badge */}
                  {product.video && (
                    <span className="absolute top-3 left-3 bg-[#111]/85 backdrop-blur-xs text-[10px] text-[#F3E7C4] px-2.5 py-1 rounded-full font-medium flex items-center gap-1 border border-[#D4AF37]/40 shadow-xs">
                      <Play className="w-3 h-3 fill-current text-[#D4AF37]" />
                      <span>Video Demo</span>
                    </span>
                  )}

                  {/* Best Seller / New Arrival Badges */}
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                    {product.isBestSeller && (
                      <span className="bg-[#141312] text-[#F3EFEA] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border border-[#C5A880]/30 shadow-xs">
                        Best Seller
                      </span>
                    )}
                    {product.isNewArrival && (
                      <span className="bg-[#AA7C11] text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs">
                        New
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] text-stone-700 font-medium px-2 py-0.5 rounded-md shadow-xs border border-stone-200">
                    {product.volume}
                  </span>

                  {/* Hover Quick Action Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="p-3 rounded-full bg-white text-stone-900 hover:bg-[#F3EFEA] shadow-xl transition-transform hover:scale-110"
                      title="Inspect Product Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                      }}
                      className="p-3 rounded-full bg-[#141312] text-[#EAD8BD] hover:bg-black shadow-xl transition-transform hover:scale-110"
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Card Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6430] block mb-1.5">
                      {product.scentFamily ? `${product.scentFamily} Note` : product.category}
                    </span>

                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-xl sm:text-2xl font-medium text-stone-900 hover:text-[#8C6430] transition-colors cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>

                    <p className="mt-1.5 text-sm sm:text-base text-stone-600 font-light line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center text-[#E5C35E]">
                        <Star className="w-4 h-4 fill-current stroke-none" />
                      </div>
                      <span className="text-sm font-semibold text-stone-800">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-stone-400">
                        ({product.reviewCount} reviews)
                      </span>
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <div className="flex items-baseline gap-2.5 mb-3.5">
                      <span className="text-xl sm:text-2xl font-bold text-stone-900">
                        {formattedPrice}
                      </span>
                      {originalPrice && (
                        <span className="text-sm text-stone-400 line-through">
                          {originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={whatsAppOrderUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onAddToCart(product)}
                        className="inline-flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#141312] text-[#F3EFEA] hover:bg-[#2A2723] transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add to Bag</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
