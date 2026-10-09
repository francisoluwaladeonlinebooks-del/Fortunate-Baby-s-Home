import React, { useState } from 'react';
import { ChevronDown, MapPin, Phone, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Where is Fortunate Fragrance Boutique located in Akure?',
      a: 'We are situated in Oka Aro New Town Market, Akure, Ondo State, Nigeria. Customers are warmly welcome to visit our physical store for in-person fragrance testing and pickup, or order directly online via our WhatsApp concierge (08073432298).',
    },
    {
      q: 'Are all perfumes and skincare products 100% original?',
      a: 'Yes, absolutely. We source exclusively authentic French perfumery flacons, genuine Arabian oud extracts, and dermatologist-tested skincare lotions (such as Dr. Davey, PRO LAB, and Aqua Rich) with verifiable batch numbers.',
    },
    {
      q: 'How fast is delivery to Akure and across Nigeria?',
      a: 'Orders in Akure are dispatched same-day via local courier or in-store pickup. Nationwide delivery across Lagos, Ibadan, Abuja, Port Harcourt, and other states takes between 24 to 48 hours.',
    },
    {
      q: 'How does WhatsApp ordering work?',
      a: 'Simply select your desired items and tap "Order via WhatsApp" or "Instant 1-Tap WhatsApp Order" in your shopping bag. Our system automatically drafts an itemized message with your total and delivery details, connecting you directly to our Akure customer care manager.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8F5EE] border-b border-[#ECE7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6430] block">
              OUR HERITAGE & MISSION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 leading-tight">
              From Akure to the World: <br />
              <span className="italic font-light text-[#8C6430]">The Art of Fine Perfumery</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Founded at Oka Aro New Town Market in Akure, Ondo State, <strong>Fortunate Boutique</strong> was born from a singular passion: to make high-end Parisian perfumery, Arabian oud craftsmanship, and premium dermatological skincare accessible with uncompromising authenticity.
            </p>
            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
              Whether you are shopping for a signature day perfume, an intimate midnight elixir like <em>Noir Intense</em>, or nurturing body lotions for mother and baby, every item in our collection is hand-tested for longevity and gentle wear.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                <strong className="block text-stone-900 text-sm font-serif">Oka Aro Market</strong>
                <span className="text-stone-500">Physical store & walk-in showroom</span>
              </div>
              <div className="p-3.5 bg-white rounded-xl border border-stone-200">
                <strong className="block text-stone-900 text-sm font-serif">08073432298</strong>
                <span className="text-stone-500">24/7 Phone & WhatsApp concierge</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 aspect-4/3 border border-[#E0D8CB]">
              <img
                src="/images/scent_oud.jpg"
                alt="Luxury Perfume Flacons & Botanical Extracts"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#E6C594]">
                  Authenticity Guaranteed
                </span>
                <p className="font-serif text-2xl mt-1">Hand-selected flacons with up to 20-hour longevity.</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto pt-8">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6430] block mb-1">
              QUESTIONS & ANSWERS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 font-medium">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-stone-900 font-medium text-sm sm:text-base hover:text-[#8C6430] transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-black' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
