import React from 'react';
import { Award, Leaf } from 'lucide-react';

export const PressStrip: React.FC = () => {
  return (
    <section className="bg-[#FAF8F4] border-b border-[#EAE5DC] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Press logos / text matching uploaded image */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-500">
              AS SEEN IN
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-stone-900 uppercase">
              BAZAAR
            </span>
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-stone-900 uppercase italic">
              ELLE
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-stone-900 uppercase">
              VOGUE
            </span>
            <span className="font-serif text-xl sm:text-2xl font-serif tracking-normal text-stone-900">
              Esquire
            </span>
            <span className="font-sans text-xl sm:text-2xl font-black tracking-tighter text-stone-900 uppercase">
              GQ
            </span>
          </div>

          {/* Right badges: Made in France & Vegan & Cruelty Free */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t lg:border-t-0 pt-4 lg:pt-0 border-stone-200">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#F3EFE9] border border-stone-300 flex items-center justify-center text-[#8C6430]">
                <Award className="w-5.5 h-5.5 stroke-[1.6]" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  MADE IN FRANCE
                </p>
                <p className="text-xs sm:text-sm text-stone-500 font-light">
                  Crafted with Parisian expertise
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-[#F3EFE9] border border-stone-300 flex items-center justify-center text-[#8C6430]">
                <Leaf className="w-5.5 h-5.5 stroke-[1.6]" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  VEGAN & CRUELTY FREE
                </p>
                <p className="text-xs sm:text-sm text-stone-500 font-light">
                  Beauty with compassion
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
