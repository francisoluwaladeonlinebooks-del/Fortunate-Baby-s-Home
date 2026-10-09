import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, CreditCard, Sparkles, Check, Truck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckoutSuccess: (orderData: any) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onCheckoutSuccess,
}) => {
  if (!isOpen) return null;

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  // Checkout modal state
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentChoice, setPaymentChoice] = useState<'whatsapp' | 'bank_transfer'>('whatsapp');
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  // Subtotal calculation
  const subtotalNGN = items.reduce((acc, item) => acc + item.product.priceNGN * item.quantity, 0);
  const subtotalUSD = items.reduce((acc, item) => acc + item.product.priceUSD * item.quantity, 0);

  const discountMultiplier = promoApplied ? 0.1 : 0;
  const discountNGN = subtotalNGN * discountMultiplier;
  const discountUSD = subtotalUSD * discountMultiplier;

  const totalNGN = subtotalNGN - discountNGN;
  const totalUSD = subtotalUSD - discountUSD;

  // Free shipping threshold: ₦75,000 or $75
  const freeShippingThreshold = currency === 'NGN' ? 75000 : 75;
  const currentTotal = currency === 'NGN' ? subtotalNGN : subtotalUSD;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - currentTotal);
  const progressPercent = Math.min(100, Math.round((currentTotal / freeShippingThreshold) * 100));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'WELCOME10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try WELCOME10 for 10% off.');
    }
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    const itemList = items
      .map(
        (i) =>
          `• ${i.product.name} (${i.selectedSize}) x ${i.quantity} = ${
            currency === 'NGN'
              ? `₦${(i.product.priceNGN * i.quantity).toLocaleString()}`
              : `$${(i.product.priceUSD * i.quantity).toFixed(2)}`
          }`
      )
      .join('\n');

    const totalStr =
      currency === 'NGN'
        ? `₦${totalNGN.toLocaleString()}`
        : `$${totalUSD.toFixed(2)}`;

    const message = encodeURIComponent(
      `🛍️ *NEW ORDER - FORTUNATE BABY'S HOME*\n\n` +
      `*Customer:* ${customerName || 'Online Shopper'}\n` +
      `*Phone:* ${customerPhone || 'N/A'}\n` +
      `*Delivery Address:* ${customerAddress || 'Akure / Nigeria'}\n\n` +
      `*Items:*\n${itemList}\n\n` +
      (promoApplied ? `*Coupon:* WELCOME10 (-10% applied)\n` : '') +
      `*Total Amount:* ${totalStr}\n\n` +
      `Please provide bank details or confirm delivery timeline to my address. Thank you!`
    );

    const orderNumber = 'LX-' + Math.floor(100000 + Math.random() * 900000);
    onCheckoutSuccess({
      orderNumber,
      customerName: customerName || 'Valued Client',
      customerPhone,
      customerAddress,
      items: items.map((i) => ({
        productName: i.product.name,
        quantity: i.quantity,
        price: currency === 'NGN' ? i.product.priceNGN : i.product.priceUSD,
      })),
      totalAmount: currency === 'NGN' ? totalNGN : totalUSD,
      currency,
      paymentMethod: 'whatsapp',
    });

    window.open(`https://wa.me/2348073432298?text=${message}`, '_blank');
    setIsCheckingOut(false);
  };

  const handleDirectOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !customerAddress) return;

    if (paymentChoice === 'whatsapp') {
      handleWhatsAppCheckout();
      return;
    }

    const orderNumber = 'LX-' + Math.floor(100000 + Math.random() * 900000);
    onCheckoutSuccess({
      orderNumber,
      customerName,
      customerPhone,
      customerAddress,
      items: items.map((i) => ({
        productName: i.product.name,
        quantity: i.quantity,
        price: currency === 'NGN' ? i.product.priceNGN : i.product.priceUSD,
      })),
      totalAmount: currency === 'NGN' ? totalNGN : totalUSD,
      currency,
      paymentMethod: 'bank_transfer',
    });

    setOrderComplete(orderNumber);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#FBF9F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#ECE7DE] relative">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#F7F4EE]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8C6430]" />
            <h3 className="font-serif text-lg font-medium text-stone-900">
              Your Shopping Bag ({items.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-stone-200 text-stone-500 hover:text-black transition"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#EFE9DF] px-5 py-3 border-b border-stone-200 text-xs">
          <div className="flex items-center justify-between text-stone-700 font-medium mb-1.5">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#8C6430]" />
              {remainingForFreeShipping > 0
                ? `Add ${currency === 'NGN' ? `₦${remainingForFreeShipping.toLocaleString()}` : `$${remainingForFreeShipping.toFixed(2)}`} for FREE delivery`
                : '🎉 You have unlocked FREE DELIVERY!'}
            </span>
            <span className="font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full bg-stone-300 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-[#AA7C11] h-1.5 transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F3EFE9] border border-stone-300 flex items-center justify-center text-stone-400">
                <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h4 className="font-serif text-xl text-stone-800">Your bag is empty</h4>
              <p className="text-xs text-stone-500 max-w-xs font-light">
                Discover our signature flacons or curated skincare combos and scent your personal story.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#141312] text-[#F3EFEA] text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-stone-800 transition"
              >
                Explore Fragrances
              </button>
            </div>
          ) : (
            items.map((item) => {
              const itemTotal =
                currency === 'NGN'
                  ? `₦${(item.product.priceNGN * item.quantity).toLocaleString()}`
                  : `$${(item.product.priceUSD * item.quantity).toFixed(2)}`;

              return (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-white rounded-2xl border border-stone-200/90 shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-18 h-22 object-cover rounded-xl bg-stone-100 shrink-0"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-medium text-stone-900 leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-stone-400 hover:text-red-600 p-1 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-stone-500 uppercase tracking-wider block mt-0.5">
                        Size: {item.selectedSize}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50 text-xs">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 hover:bg-stone-200 text-stone-700"
                        >
                          -
                        </button>
                        <span className="px-2 font-semibold text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 hover:bg-stone-200 text-stone-700"
                        >
                          +
                        </button>
                      </div>

                      <span className="text-xs font-bold text-stone-900">
                        {itemTotal}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Summary & Checkout Actions */}
        {items.length > 0 && (
          <div className="p-5 bg-white border-t border-stone-200 space-y-4 shadow-lg">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Discount code (e.g. WELCOME10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
                className="flex-1 px-3 py-2 bg-[#F7F4EE] border border-stone-200 rounded-xl text-xs uppercase focus:outline-hidden focus:border-[#C5A880]"
              />
              <button
                type="submit"
                disabled={promoApplied}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-black transition disabled:opacity-50"
              >
                {promoApplied ? 'Applied' : 'Apply'}
              </button>
            </form>

            {promoApplied && (
              <p className="text-[11px] text-emerald-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                <span>WELCOME10 applied (10% discount off subtotal)</span>
              </p>
            )}
            {promoError && (
              <p className="text-[11px] text-red-600">{promoError}</p>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>
                  {currency === 'NGN'
                    ? `₦${subtotalNGN.toLocaleString()}`
                    : `$${subtotalUSD.toFixed(2)}`}
                </span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-emerald-700">
                  <span>VIP Discount (10%)</span>
                  <span>
                    -{currency === 'NGN'
                      ? `₦${discountNGN.toLocaleString()}`
                      : `$${discountUSD.toFixed(2)}`}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {remainingForFreeShipping === 0
                    ? 'FREE'
                    : currency === 'NGN'
                    ? '₦2,500 (Akure standard)'
                    : '$10.00'}
                </span>
              </div>
              <div className="flex justify-between font-bold text-sm sm:text-base text-stone-900 pt-2 border-t border-stone-200">
                <span>Estimated Total</span>
                <span>
                  {currency === 'NGN'
                    ? `₦${(totalNGN + (remainingForFreeShipping === 0 ? 0 : 2500)).toLocaleString()}`
                    : `$${(totalUSD + (remainingForFreeShipping === 0 ? 0 : 10)).toFixed(2)}`}
                </span>
              </div>
            </div>

            {/* Dual Checkout Buttons */}
            <div className="space-y-2 pt-1">
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest font-semibold bg-[#141312] text-[#F3EFEA] hover:bg-black flex items-center justify-center gap-2 shadow-md transition"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-2 shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant 1-Tap WhatsApp Order</span>
              </button>
            </div>
          </div>
        )}

        {/* Detailed Checkout Dialog Modal */}
        {isCheckingOut && (
          <div className="absolute inset-0 z-30 bg-[#FBF9F5] p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Customer & Delivery Details
                </h3>
                <button
                  onClick={() => setIsCheckingOut(false)}
                  className="p-1 text-stone-500 hover:text-black"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {orderComplete ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-stone-900">Order Confirmed!</h4>
                  <p className="text-xs text-stone-600">
                    Your order reference: <strong className="font-mono text-stone-900">{orderComplete}</strong>
                  </p>
                  <div className="p-4 bg-[#F5F1E9] rounded-2xl text-left text-xs space-y-2 border border-stone-200">
                    <p className="font-semibold text-stone-800">Bank Transfer Details (Nigeria):</p>
                    <p className="text-stone-600">Bank: <strong>First Bank / Zenith Bank</strong></p>
                    <p className="text-stone-600">Account Name: <strong>Fortunate Baby's Home</strong></p>
                    <p className="text-stone-600">Account Number: <strong>2034981120</strong></p>
                    <p className="text-[11px] text-stone-500">Please send your transfer proof to WhatsApp 08073432298 for immediate dispatch.</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsCheckingOut(false);
                      setOrderComplete(null);
                      onClose();
                    }}
                    className="w-full py-3 bg-[#141312] text-white rounded-xl text-xs font-semibold uppercase tracking-wider"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDirectOrderSubmit} className="mt-5 space-y-4 text-xs">
                  <div>
                    <label className="font-semibold text-stone-800 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adebayo Olumide"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-stone-800 block mb-1">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 08073432298"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-stone-800 block mb-1">
                      Delivery Address in Akure / State *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="House address, street, landmark, city"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="font-semibold text-stone-800 block mb-1">
                      Payment Preference
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentChoice('whatsapp')}
                        className={`p-3 rounded-xl border text-center transition ${
                          paymentChoice === 'whatsapp'
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold'
                            : 'border-stone-200 bg-white text-stone-700'
                        }`}
                      >
                        <MessageCircle className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                        <span>WhatsApp Confirmation</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentChoice('bank_transfer')}
                        className={`p-3 rounded-xl border text-center transition ${
                          paymentChoice === 'bank_transfer'
                            ? 'border-stone-900 bg-stone-900 text-white font-semibold'
                            : 'border-stone-200 bg-white text-stone-700'
                        }`}
                      >
                        <CreditCard className="w-4 h-4 mx-auto mb-1" />
                        <span>Direct Bank Transfer</span>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#141312] text-white rounded-xl font-semibold uppercase tracking-wider hover:bg-black shadow-md transition"
                    >
                      {paymentChoice === 'whatsapp'
                        ? 'Confirm & Open WhatsApp'
                        : 'Submit Order & View Bank Details'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
