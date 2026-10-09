import React from 'react';
import { X, MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

interface StoreLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoreLocationModal: React.FC<StoreLocationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6DECE] text-stone-900">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-stone-500 hover:text-black"
          aria-label="Close Store Info"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="text-left">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6430] block mb-1">
              PHYSICAL STORE LOCATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
              Fortunate Boutique & Fragrance Bar
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Welcoming physical walk-in customers and servicing online shoppers across Nigeria.
            </p>
          </div>

          {/* Location Details Card */}
          <div className="space-y-3.5 bg-white p-5 rounded-2xl border border-stone-200 text-xs text-stone-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 text-sm">Store Address</strong>
                <span>Oka Aro New Town Market, Akure, Ondo State, Nigeria.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
              <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 text-sm">Direct Phone Inquiry</strong>
                <a href="tel:08073432298" className="text-stone-900 font-semibold hover:underline">
                  08073432298
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
              <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 text-sm">Market Opening Hours</strong>
                <span>Monday – Saturday: 8:00 AM – 7:00 PM</span>
                <span className="block text-stone-400">Sunday: Closed for worship & inventory restock</span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-stone-900 text-sm">Offerings & In-Store Testing</strong>
                <span>Fragrance tester flacons, original skincare creams, baby care accessories, and instant gift wrapping.</span>
              </div>
            </div>
          </div>

          {/* Contact CTAs */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href="tel:08073432298"
              className="py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-[#141312] text-white hover:bg-black text-center shadow-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call 08073432298</span>
            </a>

            <a
              href="https://wa.me/2348073432298?text=Hello%20Fortunate%20Boutique,%20I%20am%20coming%20to%20your%20shop%20at%20Oka%20Aro%20Market%20Akure."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700 text-center shadow-xs flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
