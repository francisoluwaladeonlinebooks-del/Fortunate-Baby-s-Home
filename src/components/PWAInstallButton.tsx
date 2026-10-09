import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share2, PlusSquare, X, Smartphone } from 'lucide-react';

interface Props {
  variant?: 'nav' | 'banner' | 'mobile';
}

export const PWAInstallButton: React.FC<Props> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed, hide
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    }
  };

  if (!isInstallable && !isIOS) {
    return null;
  }

  return (
    <>
      {variant === 'nav' ? (
        <button
          onClick={handleInstallClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide bg-[#161514] text-[#E8D5B5] hover:bg-[#25221F] border border-[#C5A880]/30 transition-all shadow-xs"
          title="Install Luxora App for instant offline access"
        >
          <Download className="w-3.5 h-3.5 text-[#C5A880]" />
          <span className="hidden sm:inline">Install App</span>
        </button>
      ) : variant === 'banner' ? (
        <div className="bg-[#1A1816] text-[#EFECE6] px-4 py-2 text-xs flex items-center justify-between border-b border-[#C5A880]/20">
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-[#C5A880]" />
            <span>Install Luxora App for rapid offline catalog & 1-tap orders</span>
          </div>
          <button
            onClick={handleInstallClick}
            className="px-3 py-1 bg-[#C5A880] text-black font-medium rounded-full text-xs hover:bg-[#b89566] transition"
          >
            Install
          </button>
        </div>
      ) : (
        <button
          onClick={handleInstallClick}
          className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg text-sm bg-[#161514] text-[#E8D5B5] border border-[#C5A880]/30 hover:bg-[#222]"
        >
          <Download className="w-4 h-4 text-[#C5A880]" />
          <span>Install Luxora on Your Device</span>
        </button>
      )}

      {/* iOS Safari Guided Install Dialog */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-sm rounded-2xl bg-[#1C1A17] border border-[#C5A880]/40 p-6 shadow-2xl text-[#F2EFE9] relative">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-[#292520] border border-[#C5A880]/40 flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
              <Download className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-serif text-center font-medium text-[#F3E7C4]">
              Install Luxora on iPhone / iPad
            </h3>
            <p className="mt-2 text-xs text-stone-300 text-center leading-relaxed">
              Experience lightning fast loading, offline shopping, and exclusive member notifications:
            </p>

            <div className="mt-4 space-y-3 bg-[#141312] p-4 rounded-xl border border-stone-800 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0">1</span>
                <span className="flex items-center gap-1.5">
                  Tap the <Share2 className="w-4 h-4 text-[#C5A880] inline" /> <strong>Share</strong> button in Safari toolbar.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0">2</span>
                <span className="flex items-center gap-1.5">
                  Scroll down & select <PlusSquare className="w-4 h-4 text-[#C5A880] inline" /> <strong>Add to Home Screen</strong>.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#C5A880] text-black font-bold flex items-center justify-center shrink-0">3</span>
                <span>Launch Luxora directly from your home screen anytime.</span>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#C5A880] to-[#DFC1A2] py-2.5 text-xs font-semibold text-stone-900 shadow-md hover:opacity-95 transition"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
};
