import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';
import { Currency } from '../types';

interface ValuePropsProps {
  currency: Currency;
  onSupportClick: () => void;
}

export const ValueProps: React.FC<ValuePropsProps> = ({ currency, onSupportClick }) => {
  return (
    <section className="bg-[#FAF8F4] border-b border-[#ECE7DE] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Free Shipping */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F3EFE9] border border-[#DDD5C7] flex items-center justify-center shrink-0 text-[#8C6430]">
              <Truck className="w-5.5 h-5.5 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold tracking-wide uppercase text-stone-900">
                FREE SHIPPING
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                On orders over {currency === 'NGN' ? '₦75,000' : '$75'}
              </p>
            </div>
          </div>

          {/* Easy Returns */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F3EFE9] border border-[#DDD5C7] flex items-center justify-center shrink-0 text-[#8C6430]">
              <RotateCcw className="w-5.5 h-5.5 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold tracking-wide uppercase text-stone-900">
                EASY RETURNS
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                30-day authentic return policy
              </p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 rounded-full bg-[#F3EFE9] border border-[#DDD5C7] flex items-center justify-center shrink-0 text-[#8C6430]">
              <ShieldCheck className="w-5.5 h-5.5 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold tracking-wide uppercase text-stone-900">
                SECURE PAYMENT
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                100% safe bank & WhatsApp
              </p>
            </div>
          </div>

          {/* Dedicated Support */}
          <button
            onClick={onSupportClick}
            className="flex items-center gap-3.5 sm:gap-4 text-left group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#F3EFE9] border border-[#DDD5C7] flex items-center justify-center shrink-0 text-[#8C6430] group-hover:bg-[#141312] group-hover:text-[#E6D4BE] transition-colors">
              <Headphones className="w-5.5 h-5.5 stroke-[1.6]" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-semibold tracking-wide uppercase text-stone-900 group-hover:text-[#8C6430] transition-colors">
                DEDICATED SUPPORT
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                Akure store & WhatsApp concierge
              </p>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};
