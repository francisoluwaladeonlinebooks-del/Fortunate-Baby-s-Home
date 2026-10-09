import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Sparkles, MessageCircle, Phone, Globe } from 'lucide-react';
import { Currency } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  currentPage: 'home' | 'products' | 'about';
  onNavigate: (page: 'home' | 'products' | 'about') => void;
  currency: Currency;
  onToggleCurrency: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currency,
  onToggleCurrency,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [showBanner, setShowBanner] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#EBE6DD] transition-all">
      {/* Top Announcement Bar */}
      {showBanner && (
        <div className="bg-[#121110] text-[#EAD8BD] text-xs sm:text-sm font-medium tracking-wide py-2.5 px-4 flex items-center justify-between border-b border-[#C5A880]/30">
          <div className="flex-1 text-center flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              Oka Aro Market, Akure | Free Delivery on orders over {currency === 'NGN' ? '₦75,000' : '$75'} | Call: <strong className="font-bold underline underline-offset-2">08073432298</strong>
            </span>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="p-1 hover:text-white transition text-stone-400 cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          {/* Mobile menu trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -ml-2 text-stone-800 hover:text-black focus:outline-hidden cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-800 hover:text-black cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>

          {/* Business Brand Name - Fortunate Baby's Home with luxury aesthetic */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex flex-col items-center group text-center focus:outline-hidden cursor-pointer"
            >
              <div className="flex items-center gap-1.5 text-[#C5A880]">
                {/* 4-petal diamond rosette matching user image */}
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.16em] text-[#161514] font-medium uppercase mt-0.5 group-hover:text-[#9A7444] transition-colors leading-tight">
                FORTUNATE
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#8C867F] font-sans font-medium">
                BABY'S HOME
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links (Home, Products, About) */}
          <nav className="hidden lg:flex items-center gap-9 xl:gap-11">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm xl:text-base uppercase tracking-[0.18em] font-medium pb-1 transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                  : 'text-stone-600 hover:text-black hover:border-b-2 hover:border-[#C5A880]'
              }`}
            >
              Home Page
            </button>

            <button
              onClick={() => onNavigate('products')}
              className={`text-sm xl:text-base uppercase tracking-[0.18em] font-medium pb-1 transition-colors cursor-pointer ${
                currentPage === 'products'
                  ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                  : 'text-stone-600 hover:text-black hover:border-b-2 hover:border-[#C5A880]'
              }`}
            >
              Product Page
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`text-sm xl:text-base uppercase tracking-[0.18em] font-medium pb-1 transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'text-stone-900 border-b-2 border-stone-900 font-semibold'
                  : 'text-stone-600 hover:text-black hover:border-b-2 hover:border-[#C5A880]'
              }`}
            >
              About Page
            </button>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3.5 sm:gap-4">
            {/* Currency Switcher */}
            <button
              onClick={onToggleCurrency}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-stone-300 hover:border-stone-500 bg-stone-100/90 text-stone-800 transition cursor-pointer"
              title="Toggle Currency (NGN ₦ / USD $)"
            >
              <Globe className="w-4 h-4 text-[#AA7C11]" />
              <span>{currency === 'NGN' ? '₦ NGN' : '$ USD'}</span>
            </button>

            {/* Desktop Search Button */}
            <button
              onClick={onOpenSearch}
              className="hidden lg:flex p-2 text-stone-700 hover:text-black transition cursor-pointer"
              aria-label="Search catalog"
              title="Search inventory"
            >
              <Search className="w-5.5 h-5.5" />
            </button>

            {/* WhatsApp Direct Concierge */}
            <a
              href="https://wa.me/2348073432298?text=Hello%20Fortunate%20Baby's%20Home,%20I%20would%20like%20to%20order%20from%20your%20Akure%20store"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition cursor-pointer"
              title="Chat directly on WhatsApp (08073432298)"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            {/* PWA Install Button */}
            <div className="hidden md:block">
              <PWAInstallButton variant="nav" />
            </div>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-stone-900 hover:text-[#9A7444] transition flex items-center cursor-pointer"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-6.5 h-6.5 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-0 min-w-5 h-5 px-1 bg-[#1A1816] text-[#E8D5B5] text-xs font-bold rounded-full flex items-center justify-center border border-[#C5A880]/50 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-base font-semibold tracking-wider uppercase py-2 ${
                currentPage === 'home' ? 'text-black' : 'text-stone-600'
              }`}
            >
              Home Page
            </button>

            <button
              onClick={() => {
                onNavigate('products');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-base font-semibold tracking-wider uppercase py-2 ${
                currentPage === 'products' ? 'text-black' : 'text-stone-600'
              }`}
            >
              Product Page
            </button>

            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className={`text-left text-base font-semibold tracking-wider uppercase py-2 ${
                currentPage === 'about' ? 'text-black' : 'text-stone-600'
              }`}
            >
              About Page
            </button>
          </nav>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <a
              href="tel:08073432298"
              className="flex items-center gap-2 text-sm text-stone-700 bg-stone-100 p-3 rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#C5A880]" />
              <span>Call Akure Store: <strong>08073432298</strong></span>
            </a>
            <a
              href="https://wa.me/2348073432298?text=Hello%20Fortunate%20Baby's%20Home,%20I%20would%20like%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white bg-emerald-600 py-3 rounded-lg shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp (08073432298)</span>
            </a>
            <PWAInstallButton variant="mobile" />
          </div>
        </div>
      )}
    </header>
  );
};
