import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart, Sparkles, Send, Check, ChevronDown, ShoppingBag } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Product Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Prefill WhatsApp message
    const msg = encodeURIComponent(
      `👋 *INQUIRY FROM FORTUNATE BABY'S HOME WEBSITE*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Topic:* ${formData.inquiryType}\n` +
      `*Message:* ${formData.message || 'I would like to make an inquiry.'}`
    );

    window.open(`https://wa.me/2348073432298?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Where exactly is your physical store in Akure?',
      a: 'We are situated directly inside Oka Aro New Town Market, Akure, Ondo State, Nigeria. You are warmly welcome to visit us for physical inspection, fragrance testing, and direct purchase.',
    },
    {
      q: 'How does WhatsApp ordering work?',
      a: 'Simply browse our online catalog, select your items, and click "Order via WhatsApp" or "Instant WhatsApp Checkout". Our system drafts an itemized order message and opens a chat directly with our Akure team on 08073432298.',
    },
    {
      q: 'Do you deliver outside Akure?',
      a: 'Yes! We deliver across Ondo State (Ondo Town, Owo, Ikare, Ore) and nationwide across Nigeria (Lagos, Abuja, Ibadan, Port Harcourt, Benin City, etc.) via reliable express logistics.',
    },
    {
      q: 'Are all your perfumes and skincare original?',
      a: '100% original. We do not sell substandard or diluted goods. Every flacon of Vanilla Voyage, Cocktail, Momento Riffs, Giorgio Black, Dr. Davey lotion, and VC oil is sourced authentically with verified batch quality.',
    },
    {
      q: 'What baby items do you stock in-store?',
      a: 'We stock gentle baby lotions, skin-nourishing oils, baby hygiene sets, gentle body washes, baby accessories, and gift sets designed for newborns and toddlers.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FBF9F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A67C4A] block">
            ABOUT OUR ENTERPRISE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight">
            Fortunate Baby's Home
          </h1>
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed">
            Retail of baby items, skin care products, and various perfumes and sprays at Oka Aro New Town Market, Akure, Ondo State, Nigeria.
          </p>
        </div>

        {/* 2. Business Specifications & Core Identity Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E6DECE] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-200 text-[#8C6430] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Authentic Retailer in Ondo State</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 leading-tight">
              Serving Walk-In Market Shoppers & Online Customers
            </h2>

            <p className="text-sm text-stone-600 font-light leading-relaxed">
              At <strong>Fortunate Baby's Home</strong>, our core offering is the retail of authentic baby items, clinical & nourishing skin care products, and long-lasting designer perfumes and body sprays.
            </p>

            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Our primary website goal is <strong>selling products online</strong>—providing seamless digital shopping, secure bank payments, and instant WhatsApp concierge support for clients living in Akure or anywhere across Nigeria.
            </p>

            {/* Quick Fact Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 bg-[#F8F5EE] rounded-2xl border border-stone-200 space-y-1">
                <strong className="block text-stone-900 font-semibold text-sm">
                  Physical Location
                </strong>
                <p className="text-stone-600">
                  Oka Aro New Town Market, Akure, Ondo State, Nigeria.
                </p>
              </div>

              <div className="p-4 bg-[#F8F5EE] rounded-2xl border border-stone-200 space-y-1">
                <strong className="block text-stone-900 font-semibold text-sm">
                  Core Offerings
                </strong>
                <p className="text-stone-600">
                  Baby items, skin care products, and various perfumes and sprays.
                </p>
              </div>

              <div className="p-4 bg-[#F8F5EE] rounded-2xl border border-stone-200 space-y-1">
                <strong className="block text-stone-900 font-semibold text-sm">
                  Contact Channels
                </strong>
                <p className="text-stone-600">
                  Phone: <strong>08073432298</strong> | WhatsApp: <strong>Message on WhatsApp</strong>
                </p>
              </div>

              <div className="p-4 bg-[#F8F5EE] rounded-2xl border border-stone-200 space-y-1">
                <strong className="block text-stone-900 font-semibold text-sm">
                  Target Audience
                </strong>
                <p className="text-stone-600">
                  Walk-in physical market customers and online shoppers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-stone-900 aspect-4/5 border border-[#E0D8CB]">
              <img
                src="/products/vanilla_voyage_100ml.jpg"
                alt="Fortunate Baby's Home Luxury Fragrance Flacon"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-[#E6C594] font-semibold">
                  Oka Aro New Town Market • Akure
                </span>
                <p className="font-serif text-xl sm:text-2xl font-light">
                  "Authentic luxury, skin nourishment, and loving baby care in every home."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Contact Us Section */}
        <div id="contact" className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Channels & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A67C4A] block mb-1">
                REACH OUR TEAM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
                Contact Us
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light">
                Have an inquiry about product availability, bulk ordering, baby items, or same-day delivery in Akure? Reach out through any of our channels:
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Channel */}
              <a
                href="tel:08073432298"
                className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-200 hover:border-[#C5A880] transition shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#8C6430] group-hover:bg-[#141312] group-hover:text-white transition">
                  <Phone className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 uppercase font-semibold">Phone Inquiries</span>
                  <p className="text-base font-bold text-stone-900">08073432298</p>
                  <p className="text-[11px] text-stone-500">Call directly for instant stock check</p>
                </div>
              </a>

              {/* WhatsApp Channel */}
              <a
                href="https://wa.me/2348073432298?text=Hello%20Fortunate%20Baby's%20Home,%20I%20would%20like%20to%20inquire%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200 hover:bg-emerald-100/80 transition shadow-xs group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-xs text-emerald-800 uppercase font-semibold">WhatsApp Concierge</span>
                  <p className="text-base font-bold text-emerald-950">Message on WhatsApp</p>
                  <p className="text-[11px] text-emerald-700">+2348073432298 (24/7 Fast Response)</p>
                </div>
              </a>

              {/* Market Location */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#8C6430]">
                  <MapPin className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 uppercase font-semibold">Physical Location</span>
                  <p className="text-sm font-bold text-stone-900 leading-snug">
                    Oka Aro New Town Market
                  </p>
                  <p className="text-xs text-stone-600">Akure, Ondo State, Nigeria.</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-stone-200 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#8C6430]">
                  <Clock className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-xs text-stone-400 uppercase font-semibold">Market Store Hours</span>
                  <p className="text-sm font-bold text-stone-900">Monday – Saturday: 8:00 AM – 7:00 PM</p>
                  <p className="text-[11px] text-stone-500">Sunday: Closed for worship and restock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E6DECE] shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-normal text-stone-900 mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500 font-light mb-6">
                Fill out the form below to send an instant message directly to our WhatsApp care team.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-emerald-950 font-medium">Message Connected!</h4>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-sm mx-auto">
                    Your inquiry has been opened on WhatsApp with our store manager. We typically respond within minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-5 py-2 bg-emerald-700 text-white rounded-xl text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-stone-800 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mrs. Adebayo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-[#FBF9F5] border border-stone-300 rounded-xl focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-stone-800 block mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 08073432298"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-[#FBF9F5] border border-stone-300 rounded-xl focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-semibold text-stone-800 block mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="name@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[#FBF9F5] border border-stone-300 rounded-xl focus:outline-hidden focus:border-[#C5A880]"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-stone-800 block mb-1">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full p-3 bg-[#FBF9F5] border border-stone-300 rounded-xl focus:outline-hidden focus:border-[#C5A880]"
                      >
                        <option value="Product Inquiry">Product Inquiry (Perfumes / Skincare)</option>
                        <option value="Baby Items Inquiry">Baby Items & Care Advice</option>
                        <option value="Online Order Delivery">Online Order & Delivery Tracking</option>
                        <option value="Market Walk-in Pickup">Oka Aro Market Walk-in Pickup</option>
                        <option value="Bulk Purchase">Bulk & Wholesale Order</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-semibold text-stone-800 block mb-1">
                      Your Message or Order Request
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what product you are interested in or questions about our Akure store..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#FBF9F5] border border-stone-300 rounded-xl focus:outline-hidden focus:border-[#C5A880]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#141312] hover:bg-black text-white rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send Inquiry to WhatsApp (08073432298)</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* 4. Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6430] block mb-1">
              QUESTIONS & POLICIES
            </span>
            <h3 className="font-serif text-3xl text-stone-900 font-medium">
              Common Questions About Fortunate Baby's Home
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-stone-900 font-medium text-sm sm:text-base hover:text-[#8C6430] transition"
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
    </div>
  );
};
