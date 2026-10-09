import React, { useEffect, useState } from 'react';
import { ShieldCheck, Lock, X } from 'lucide-react';

export const CopyrightProtection: React.FC = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Prevent context menu on protected images or entire container
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('.protected-media')) {
        e.preventDefault();
        setShowWarning(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Discourage common scraping / inspector shortcuts (Ctrl+U / Ctrl+S)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'u')) {
        e.preventDefault();
        setShowWarning(true);
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 animate-fadeIn">
      <div className="w-full max-w-md rounded-2xl bg-[#141312] border border-[#C5A880]/50 p-6 shadow-2xl text-[#F2EFE9] relative text-center">
        <button
          onClick={() => setShowWarning(false)}
          className="absolute top-4 right-4 p-1.5 rounded-full text-stone-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-[#24211D] border border-[#C5A880]/40 flex items-center justify-center mx-auto mb-3 text-[#D4AF37]">
          <Lock className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-serif text-[#F3E7C4] tracking-wide">
          Intellectual Property Protected
        </h3>
        
        <p className="mt-2 text-xs text-stone-300 leading-relaxed">
          All catalog imagery, product descriptions, olfactory notes, and brand assets of <strong>Fortunate Baby's Home</strong> are protected by digital copyright and Nigerian intellectual property laws.
        </p>

        <div className="mt-4 p-3 bg-[#1C1A17] rounded-xl border border-stone-800 text-[11px] text-stone-400 flex items-center gap-2 text-left">
          <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
          <span>Automated anti-scraping and digital rights fingerprinting active. Contact management for press or wholesale licenses.</span>
        </div>

        <button
          onClick={() => setShowWarning(false)}
          className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#C5A880] to-[#AA7C11] py-2.5 text-xs font-semibold text-stone-900 shadow-md hover:brightness-110 transition"
        >
          I Understand & Respect IP Rights
        </button>
      </div>
    </div>
  );
};
