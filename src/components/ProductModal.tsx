import React, { useState } from 'react';
import { Product, Currency, Review } from '../types';
import { X, Star, ShoppingBag, MessageCircle, ShieldCheck, Truck, Sparkles, Check, Play, Volume2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  currency: Currency;
  reviews: Review[];
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, selectedSize: string) => void;
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'verified'>) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  currency,
  reviews,
  onClose,
  onAddToCart,
  onAddReview,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || product.volume);
  const [activeTab, setActiveTab] = useState<'details' | 'notes' | 'reviews'>('details');

  // Review form state
  const [newAuthor, setNewAuthor] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const formattedPrice =
    currency === 'NGN'
      ? `₦${(product.priceNGN * quantity).toLocaleString()}`
      : `$${(product.priceUSD * quantity).toFixed(2)}`;

  const productReviews = reviews.filter((r) => r.productId === product.id);

  const whatsAppMessage = encodeURIComponent(
    `Hello Fortunate Baby's Home, I would like to order: ${product.name} (${selectedSize}) x ${quantity} = ${formattedPrice}.\nDelivery Location: Akure / Nigeria.\nPlease confirm availability.`
  );

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;
    onAddReview({
      productId: product.id,
      author: newAuthor.trim(),
      location: 'Verified Buyer',
      rating: newRating,
      title: 'Customer Review',
      comment: newComment.trim(),
    });
    setReviewSubmitted(true);
    setNewAuthor('');
    setNewComment('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FBF9F5] rounded-3xl shadow-2xl overflow-hidden border border-[#E5DECة] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 hover:text-black shadow-md transition"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column - Visuals & Media */}
          <div className="md:col-span-5 bg-[#F4EFE6] p-6 flex flex-col justify-center items-center relative border-b md:border-b-0 md:border-r border-[#E8E1D5]">
            <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden shadow-lg bg-white protected-media">
              {product.video ? (
                <video
                  src={product.video}
                  controls
                  playsInline
                  poster={product.image}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  loading="eager"
                  draggable={false}
                  className="w-full h-full object-cover object-center select-none"
                />
              )}
            </div>

            {/* Sub-badge under photo */}
            <div className="mt-4 flex items-center justify-between w-full text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                100% Guaranteed Authentic
              </span>
              <span className="font-mono text-[11px]">{product.sku}</span>
            </div>
          </div>

          {/* Right Column - Information & Purchasing */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Scent family badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C6430]">
                  {product.scentFamily ? `${product.scentFamily} Family` : product.category}
                </span>
                {product.stock < 20 && (
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-medium">
                    Only {product.stock} left in stock
                  </span>
                )}
              </div>

              {/* Title & subtitle */}
              <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 font-normal">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-stone-600 font-light">
                {product.subtitle}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center text-[#E5C35E]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-current' : ''
                      } stroke-none`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-stone-800">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-stone-400">
                  ({product.reviewCount} customer reviews)
                </span>
              </div>

              {/* Price Display */}
              <div className="mt-4 pb-4 border-b border-stone-200 flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-stone-900">
                  {formattedPrice}
                </span>
                {product.originalPriceNGN && (
                  <span className="text-sm text-stone-400 line-through">
                    {currency === 'NGN'
                      ? `₦${(product.originalPriceNGN * quantity).toLocaleString()}`
                      : `$${(product.originalPriceUSD! * quantity).toFixed(2)}`}
                  </span>
                )}
              </div>

              {/* Tabs Switcher */}
              <div className="flex items-center gap-4 mt-4 border-b border-stone-200 pb-2">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`text-xs uppercase tracking-wider font-semibold pb-1 transition-all ${
                    activeTab === 'details'
                      ? 'text-stone-900 border-b-2 border-stone-900'
                      : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Overview
                </button>
                {product.notes && (
                  <button
                    onClick={() => setActiveTab('notes')}
                    className={`text-xs uppercase tracking-wider font-semibold pb-1 transition-all ${
                      activeTab === 'notes'
                        ? 'text-stone-900 border-b-2 border-stone-900'
                        : 'text-stone-400 hover:text-stone-700'
                    }`}
                  >
                    Olfactory Notes
                  </button>
                )}
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`text-xs uppercase tracking-wider font-semibold pb-1 transition-all ${
                    activeTab === 'reviews'
                      ? 'text-stone-900 border-b-2 border-stone-900'
                      : 'text-stone-400 hover:text-stone-700'
                  }`}
                >
                  Reviews ({productReviews.length})
                </button>
              </div>

              {/* Tab Contents */}
              <div className="mt-4 min-h-36">
                {activeTab === 'details' && (
                  <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    <p>{product.description}</p>
                    {product.howToUse && (
                      <div className="p-3 bg-[#F5F1E9] rounded-xl border border-stone-200">
                        <strong className="font-semibold text-stone-800 block text-xs uppercase mb-1">
                          How to Apply:
                        </strong>
                        <p className="text-xs text-stone-600">{product.howToUse}</p>
                      </div>
                    )}
                    {product.longevity && (
                      <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                        <div>
                          <span className="text-stone-400 block">Longevity:</span>
                          <span className="font-medium text-stone-800">{product.longevity}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block">Sillage / Projection:</span>
                          <span className="font-medium text-stone-800">{product.sillage}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'notes' && product.notes && (
                  <div className="space-y-3">
                    <div className="bg-[#F8F5EE] p-3 rounded-xl border border-stone-200">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6430] block">
                        Top Notes (First Impression):
                      </span>
                      <p className="text-xs text-stone-800 mt-1">
                        {product.notes.top.join(' • ')}
                      </p>
                    </div>

                    <div className="bg-[#F8F5EE] p-3 rounded-xl border border-stone-200">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6430] block">
                        Heart / Middle Notes (Core Signature):
                      </span>
                      <p className="text-xs text-stone-800 mt-1">
                        {product.notes.heart.join(' • ')}
                      </p>
                    </div>

                    <div className="bg-[#F8F5EE] p-3 rounded-xl border border-stone-200">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8C6430] block">
                        Base Notes (Lasting Sillage):
                      </span>
                      <p className="text-xs text-stone-800 mt-1">
                        {product.notes.base.join(' • ')}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-4 max-h-48 overflow-y-auto pr-2">
                    {productReviews.length > 0 ? (
                      productReviews.map((rev) => (
                        <div key={rev.id} className="p-3 bg-white rounded-xl border border-stone-200 text-xs">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-semibold text-stone-900">{rev.author}</span>
                            <span className="text-stone-400 text-[10px]">{rev.date}</span>
                          </div>
                          <div className="flex text-[#E5C35E] mb-1">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current stroke-none" />
                            ))}
                          </div>
                          <p className="text-stone-600">{rev.comment}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-stone-500 italic">Be the first to review this exquisite fragrance.</p>
                    )}

                    {/* Write Review Form */}
                    {!reviewSubmitted ? (
                      <form onSubmit={handleReviewSubmit} className="mt-4 pt-3 border-t border-stone-200 space-y-2">
                        <span className="text-xs font-semibold uppercase text-stone-800 block">Leave a Review</span>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Your Name"
                            value={newAuthor}
                            onChange={(e) => setNewAuthor(e.target.value)}
                            required
                            className="p-2 text-xs bg-white border border-stone-300 rounded-lg"
                          />
                          <select
                            value={newRating}
                            onChange={(e) => setNewRating(Number(e.target.value))}
                            className="p-2 text-xs bg-white border border-stone-300 rounded-lg"
                          >
                            <option value={5}>5 Stars ★★★★★</option>
                            <option value={4}>4 Stars ★★★★☆</option>
                            <option value={3}>3 Stars ★★★☆☆</option>
                          </select>
                        </div>
                        <textarea
                          placeholder="Your fragrance experience..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          rows={2}
                          required
                          className="w-full p-2 text-xs bg-white border border-stone-300 rounded-lg"
                        />
                        <button
                          type="submit"
                          className="w-full py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold"
                        >
                          Submit Review
                        </button>
                      </form>
                    ) : (
                      <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded-lg">
                        Thank you! Your verified review has been submitted.
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Sizes selector if applicable */}
              {product.sizes && product.sizes.length > 1 && (
                <div className="mt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-800 block mb-1.5">
                    Select Flacon Size:
                  </span>
                  <div className="flex items-center gap-2">
                    {product.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                          selectedSize === s
                            ? 'bg-[#141312] text-white'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity selector */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-800">
                  Quantity:
                </span>
                <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-3 py-1 text-stone-600 hover:bg-stone-100"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-3 py-1 text-stone-600 hover:bg-stone-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="pt-4 border-t border-stone-200 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Order via WhatsApp */}
                <a
                  href={`https://wa.me/2348073432298?text=${whatsAppMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-md transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </a>

                {/* Add to bag */}
                <button
                  onClick={() => {
                    onAddToCart(product, quantity, selectedSize);
                    onClose();
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#141312] hover:bg-black text-[#F3EFEA] shadow-md transition"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag ({formattedPrice})</span>
                </button>
              </div>

              {/* Delivery notice */}
              <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Fast dispatch in Akure, Ondo State & nationwide delivery across Nigeria.</span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
