import React, { useState, useEffect } from 'react';
import { Product, CartItem, Currency, ProductCategory, Review, OrderRecord } from './types';
import { INITIAL_PRODUCTS, INITIAL_REVIEWS } from './data/products';
import { analytics } from './services/analytics';
import { backupService } from './services/backup';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { AnalyticsModal } from './components/AnalyticsModal';
import { BackupModal } from './components/BackupModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { CopyrightProtection } from './components/CopyrightProtection';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [products] = useState<Product[]>(INITIAL_PRODUCTS);
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('fortunate_reviews');
      return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    } catch {
      return INITIAL_REVIEWS;
    }
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('fortunate_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState<Currency>(() => {
    try {
      return (localStorage.getItem('fortunate_currency') as Currency) || 'NGN';
    } catch {
      return 'NGN';
    }
  });

  // Routing State: 'home' | 'products' | 'about'
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'about'>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('products') || hash.includes('shop')) return 'products';
    if (hash.includes('about') || hash.includes('contact')) return 'about';
    return 'home';
  });

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [isBackupOpen, setIsBackupOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('products') || hash.includes('shop')) {
        setCurrentPage('products');
      } else if (hash.includes('about') || hash.includes('contact')) {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'products' | 'about') => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    analytics.logEvent('page_view', { page });
  };

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('fortunate_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Persist currency
  useEffect(() => {
    try {
      localStorage.setItem('fortunate_currency', currency);
    } catch {
      // ignore
    }
  }, [currency]);

  // Persist reviews
  useEffect(() => {
    try {
      localStorage.setItem('fortunate_reviews', JSON.stringify(reviews));
    } catch {
      // ignore
    }
  }, [reviews]);

  // Initial analytics & automated backup check
  useEffect(() => {
    analytics.logEvent('page_view', { page: currentPage });
    backupService.runAutomatedBackupCheck();
  }, []);

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'NGN' ? 'USD' : 'NGN'));
  };

  const handleAddToCart = (product: Product, quantity = 1, selectedSize?: string) => {
    const sizeToUse = selectedSize || product.sizes?.[0] || product.volume;
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === sizeToUse
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === sizeToUse
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedSize: sizeToUse }];
    });

    analytics.logEvent('add_to_cart', {
      productId: product.id,
      productName: product.name,
      price: currency === 'NGN' ? product.priceNGN : product.priceUSD,
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutSuccess = (orderData: any) => {
    const newOrder: OrderRecord = {
      id: 'ord_' + Math.random().toString(36).substring(2, 9),
      orderNumber: orderData.orderNumber,
      date: new Date().toLocaleDateString('en-GB'),
      customerName: orderData.customerName,
      customerPhone: orderData.customerPhone,
      customerAddress: orderData.customerAddress,
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      currency: orderData.currency,
      paymentMethod: orderData.paymentMethod,
      status: 'Pending',
    };

    backupService.saveOrder(newOrder);

    analytics.logEvent(
      orderData.paymentMethod === 'whatsapp' ? 'whatsapp_order' : 'checkout_init',
      {
        orderNumber: newOrder.orderNumber,
        total: newOrder.totalAmount,
      }
    );

    setCart([]);
  };

  const handleAddReview = (newReview: Omit<Review, 'id' | 'date' | 'verified'>) => {
    const review: Review = {
      ...newReview,
      id: 'rev_' + Math.random().toString(36).substring(2, 9),
      date: 'Just now',
      verified: true,
    };
    setReviews((prev) => [review, ...prev]);
  };

  const totalCartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans">
      {/* Offline Alert Badge */}
      <OfflineIndicator />

      {/* Anti-Scraping Copyright Guard */}
      <CopyrightProtection />

      {/* Global Header & Navigation with separate page triggers */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        cartCount={totalCartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => navigateTo('products')}
      />

      {/* Main Separate Pages */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            products={products}
            currency={currency}
            onNavigate={navigateTo}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onSelectCategoryFilter={(cat) => setSelectedCategory(cat)}
          />
        )}

        {currentPage === 'products' && (
          <ProductPage
            products={products}
            currency={currency}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />
        )}

        {currentPage === 'about' && <AboutPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
        onOpenBackup={() => setIsBackupOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        currency={currency}
        reviews={reviews}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onAddReview={handleAddReview}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckoutSuccess={handleCheckoutSuccess}
      />

      {/* System Analytics Modal */}
      <AnalyticsModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
      />

      {/* System Backup & Security Modal */}
      <BackupModal
        isOpen={isBackupOpen}
        onClose={() => setIsBackupOpen(false)}
      />
    </div>
  );
}
