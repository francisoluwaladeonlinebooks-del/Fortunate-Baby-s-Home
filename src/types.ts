export type Currency = 'NGN' | 'USD';

export type ScentFamily = 'floral' | 'oud' | 'fresh' | 'oriental' | 'woody' | 'gourmand';

export type ProductCategory = 'all' | 'perfume' | 'skincare' | 'combo' | 'baby';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'perfume' | 'skincare' | 'combo' | 'baby';
  scentFamily?: ScentFamily;
  priceNGN: number;
  priceUSD: number;
  originalPriceNGN?: number;
  originalPriceUSD?: number;
  image: string;
  secondaryImage?: string;
  video?: string;
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isFeatured?: boolean;
  volume: string;
  sizes?: string[];
  stock: number;
  notes?: {
    top: string[];
    heart: string[];
    base: string[];
  };
  description: string;
  howToUse?: string;
  ingredients?: string;
  longevity?: string;
  sillage?: string;
  sku: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface AnalyticsEvent {
  id: string;
  timestamp: number;
  type: 'page_view' | 'product_view' | 'add_to_cart' | 'checkout_init' | 'whatsapp_order' | 'search';
  details?: Record<string, any>;
}

export interface OrderRecord {
  id: string;
  orderNumber: string;
  date: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: {
    productName: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  currency: Currency;
  paymentMethod: 'whatsapp' | 'bank_transfer' | 'online_card';
  status: 'Pending' | 'Confirmed' | 'Dispatched' | 'Delivered';
}
