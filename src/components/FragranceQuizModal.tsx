import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { Product } from '../types';

interface FragranceQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const FragranceQuizModal: React.FC<FragranceQuizModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('');
  const [intensity, setIntensity] = useState<string>('');

  const handleReset = () => {
    setStep(1);
    setMood('');
    setOccasion('');
    setIntensity('');
  };

  // Compute matched product
  let recommendedProduct = products[0];
  if (mood === 'sensual' || intensity === 'heavy') {
    recommendedProduct = products.find((p) => p.id === 'noir-intense') || products[0];
  } else if (mood === 'sweet') {
    recommendedProduct = products.find((p) => p.id === 'vanilla-voyage') || products[1];
  } else if (mood === 'royal') {
    recommendedProduct = products.find((p) => p.id === 'royal-oud') || products[3];
  } else if (mood === 'fresh') {
    recommendedProduct = products.find((p) => p.id === 'aqua-fresh') || products[2];
  } else {
    recommendedProduct = products.find((p) => p.id === 'bloom-essence') || products[1];
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E6DECE] text-stone-900">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-stone-500 hover:text-black"
          aria-label="Close Quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {step <= 3 ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6430]">
                FRAGRANCE CONSULTANT • STEP {step} OF 3
              </span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  What emotion or vibe do you wish to project?
                </h3>
                <div className="space-y-2 pt-2">
                  {[
                    { id: 'romantic', title: 'Romantic & Graceful', desc: 'Delicate Grasse petals & soft blush notes' },
                    { id: 'sensual', title: 'Sensual & Mysterious', desc: 'Dark orchid, spiced amber & midnight allure' },
                    { id: 'sweet', title: 'Warm, Sweet & Decadent', desc: 'Rich Bourbon vanilla & golden caramel' },
                    { id: 'royal', title: 'Prestige & Authority', desc: 'Cambodian agarwood & sovereign smoky resins' },
                    { id: 'fresh', title: 'Clean & Invigorating', desc: 'Crisp sea salt, bergamot & iced mint' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setMood(option.id);
                        setStep(2);
                      }}
                      className="w-full p-3.5 text-left rounded-2xl bg-white border border-stone-200 hover:border-[#C5A880] hover:bg-[#F8F5EE] transition flex items-center justify-between group"
                    >
                      <div>
                        <strong className="block text-sm text-stone-900">{option.title}</strong>
                        <span className="text-xs text-stone-500 font-light">{option.desc}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  When will you wear this fragrance most?
                </h3>
                <div className="space-y-2 pt-2">
                  {[
                    { id: 'daily', title: 'Daily Signature', desc: 'Work, meetings, errands & routine elegance' },
                    { id: 'evening', title: 'Evenings & Dates', desc: 'Candlelit dinners, night galas & intimate moments' },
                    { id: 'celebration', title: 'Weddings & Celebrations', desc: 'Sunday services, ovations & memorable milestones' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setOccasion(option.id);
                        setStep(3);
                      }}
                      className="w-full p-3.5 text-left rounded-2xl bg-white border border-stone-200 hover:border-[#C5A880] hover:bg-[#F8F5EE] transition flex items-center justify-between group"
                    >
                      <div>
                        <strong className="block text-sm text-stone-900">{option.title}</strong>
                        <span className="text-xs text-stone-500 font-light">{option.desc}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-normal text-stone-900">
                  What is your preferred projection (sillage)?
                </h3>
                <div className="space-y-2 pt-2">
                  {[
                    { id: 'moderate', title: 'Intimate & Subdued', desc: 'Gentle skin scent for close proximity' },
                    { id: 'moderate-plus', title: 'Balanced & Radiant', desc: 'Leaves an elegant trail without overwhelming' },
                    { id: 'heavy', title: 'Bold & Room-Filling', desc: 'Dominant 18+ hour beast mode projection' },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setIntensity(option.id);
                        setStep(4);
                      }}
                      className="w-full p-3.5 text-left rounded-2xl bg-white border border-stone-200 hover:border-[#C5A880] hover:bg-[#F8F5EE] transition flex items-center justify-between group"
                    >
                      <div>
                        <strong className="block text-sm text-stone-900">{option.title}</strong>
                        <span className="text-xs text-stone-500 font-light">{option.desc}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Step 4: Result */
          <div className="text-center space-y-5 animate-fadeIn">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6430] block">
              YOUR SCENT MATCH COMPLETED
            </span>
            <h3 className="font-serif text-3xl font-normal text-stone-900">
              {recommendedProduct.name}
            </h3>

            <div className="w-36 h-44 rounded-2xl overflow-hidden mx-auto shadow-xl border border-stone-200 bg-stone-100">
              <img
                src={recommendedProduct.image}
                alt={recommendedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
              {recommendedProduct.description}
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onSelectProduct(recommendedProduct);
                  onClose();
                }}
                className="w-full py-3 bg-[#141312] text-white rounded-xl text-xs uppercase tracking-widest font-semibold hover:bg-black transition shadow-md"
              >
                Inspect Fragrance Details
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-1.5 text-xs text-stone-500 hover:text-black py-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Retake Scent Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
