import React, { useState } from 'react';
import { Tag, Sparkles, Clock, Compass, Check } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="bg-[#121110] text-white py-14 sm:py-18 relative overflow-hidden border-b border-stone-800">
      {/* Background floral luxury glow */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#AA7C11]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-2 text-left">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F4EE] font-light">
              Be the first to know
            </h3>
            <p className="text-xs sm:text-sm text-stone-400 font-light">
              Exclusive offers, new arrivals, and scent stories curated for true connoisseurs.
            </p>
          </div>

          {/* Right Input & Badges */}
          <div className="lg:col-span-6 space-y-4">
            {subscribed ? (
              <div className="p-4 bg-[#1E1C18] border border-[#C5A880]/50 rounded-2xl text-xs text-[#EAD8BD] flex items-center gap-3">
                <Check className="w-5 h-5 text-[#C5A880] shrink-0" />
                <div>
                  <strong>Welcome to the LUXORA VIP Circle!</strong> Use code{' '}
                  <span className="font-mono underline text-white font-bold">WELCOME10</span> for 10% off your first purchase.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#1A1918] border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-hidden focus:border-[#C5A880]"
                />
                <button
                  type="submit"
                  className="px-7 py-3 bg-[#C5A880] hover:bg-[#B39366] text-stone-900 font-semibold text-xs uppercase tracking-widest rounded-xl transition shadow-md whitespace-nowrap"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}

            {/* Badges beneath input matching uploaded screenshot */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-[11px] text-stone-400">
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#C5A880]" />
                Exclusive Offers
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                New Arrivals
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                Early Access
              </span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                Style Tips
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
