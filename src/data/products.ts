import { Product, Review } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. 100ml Vanilla Voyage (From Google Drive: "100ml vanilla Vovage 45,000")
  {
    id: 'vanilla-voyage',
    name: '100ml Vanilla Voyage Eau de Parfum',
    subtitle: 'Decadent Bourbon vanilla with golden amber warmth & creamy woods',
    category: 'perfume',
    scentFamily: 'gourmand',
    priceNGN: 45000,
    priceUSD: 95,
    originalPriceNGN: 50000,
    originalPriceUSD: 110,
    image: '/products/vanilla_voyage_100ml.jpg',
    rating: 5.0,
    reviewCount: 312,
    isBestSeller: true,
    isNewArrival: true,
    isFeatured: true,
    volume: '100ml',
    sizes: ['100ml'],
    stock: 15,
    notes: {
      top: ['Caramelized Brown Sugar', 'French Pear', 'Sweet Orange'],
      heart: ['Bourbon Vanilla Orchid', 'Toasted Almond', 'Cacao Butter'],
      base: ['Tonka Bean', 'Velvet Cashmere Wood', 'Golden Benzoin']
    },
    description: 'A luxurious gourmand masterpiece directly from our boutique. 100ml Vanilla Voyage is rich, comforting, and magnetic with authentic Bourbon vanilla pods kissed by warm caramel and golden woods.',
    howToUse: 'Spritz onto wrists, neck, and clothing for an irresistible, long-lasting scent trail that lingers for 16+ hours.',
    longevity: '16+ Hours',
    sillage: 'Magnetic & Long-Lasting',
    sku: 'FBH-VV-100'
  },

  // 2. 100ML COCKTAIL (From Google Drive: "100ML COCKTAIL 24,500")
  {
    id: 'cocktail-100ml',
    name: '100ML Cocktail Luxury Perfume',
    subtitle: 'Fruity-floral champagne sparkle for celebrations & events',
    category: 'perfume',
    scentFamily: 'floral',
    priceNGN: 24500,
    priceUSD: 65,
    originalPriceNGN: 28000,
    originalPriceUSD: 75,
    image: '/products/cocktail_100ml.jpg',
    rating: 4.9,
    reviewCount: 245,
    isBestSeller: true,
    isFeatured: true,
    volume: '100ml',
    sizes: ['100ml'],
    stock: 22,
    notes: {
      top: ['Fizzy Champagne', 'Passionfruit', 'Red Currant'],
      heart: ['Damask Rose', 'Sweet Osmanthus', 'Pink Peony'],
      base: ['White Cedar', 'Whipped Cream', 'Crystal Amber']
    },
    description: 'A joyful and effervescent designer fragrance. 100ML Cocktail delivers sparkling fruit notes and delicate floral petals, making every outing or celebration unforgettable.',
    howToUse: 'Ideal for special occasions, church, parties, and evening outings. Apply generously to pulse points.',
    longevity: '12 - 14 Hours',
    sillage: 'Radiant & Playful',
    sku: 'FBH-CKT-100'
  },

  // 3. Momento Riffs (From Google Drive: "Momento riffs 36,500")
  {
    id: 'momento-riffs',
    name: 'Momento Riffs Pour Homme & Femme',
    subtitle: 'Opulent Arabian luxury with smoky spices and woody depth',
    category: 'perfume',
    scentFamily: 'oriental',
    priceNGN: 36500,
    priceUSD: 85,
    originalPriceNGN: 42000,
    originalPriceUSD: 98,
    image: '/products/momento_riffs.jpg',
    rating: 4.9,
    reviewCount: 189,
    isBestSeller: true,
    isFeatured: true,
    volume: '100ml',
    sizes: ['100ml'],
    stock: 18,
    notes: {
      top: ['Nutmeg', 'Cinnamon Bark', 'Fresh Bergamot'],
      heart: ['Smoked Frankincense', 'Lavender Spike', 'Clove'],
      base: ['Precious Ambergris', 'Rich Sandalwood', 'Dark Leather']
    },
    description: 'A bold, sophisticated Arabian statement fragrance. Momento Riffs commands attention wherever you go with deeply blended spices, smoky incense, and noble wood notes.',
    howToUse: 'Spray onto collar, neck, and wrists for maximum presence throughout day and night.',
    longevity: '18+ Hours',
    sillage: 'Bold & Dominant',
    sku: 'FBH-MR-100'
  },

  // 4. Giorgio Black (From Google Drive: "Giorgio black 21,000")
  {
    id: 'giorgio-black',
    name: 'Giorgio Black Special Edition',
    subtitle: 'Classic Italian elegance with dark woody intensity',
    category: 'perfume',
    scentFamily: 'woody',
    priceNGN: 21000,
    priceUSD: 58,
    originalPriceNGN: 25000,
    originalPriceUSD: 68,
    image: '/products/giorgio_black.jpg',
    rating: 4.8,
    reviewCount: 410,
    isBestSeller: true,
    volume: '100ml',
    sizes: ['100ml'],
    stock: 25,
    notes: {
      top: ['Sicilian Lemon', 'Cardamom', 'Sage'],
      heart: ['Black Amber', 'Praline', 'Cinnamon'],
      base: ['Brazilian Rosewood', 'Black Patchouli', 'Ebony Wood']
    },
    description: 'A timeless, sophisticated woody fragrance. Giorgio Black balances crisp citrus accents with decadent black amber, sweet praline, and Brazilian rosewood.',
    howToUse: 'Versatile signature perfume suitable for both daily business meetings and evening dinners.',
    longevity: '12 - 14 Hours',
    sillage: 'Refined & Distinctive',
    sku: 'FBH-GB-100'
  },

  // 5. The Combo (From Google Drive: "the combo 19k" with real video!)
  {
    id: 'the-combo',
    name: 'The Ultimate Fragrance & Skincare Combo',
    subtitle: 'Curated beauty package: Designer spray, nourishing glow oil & body care',
    category: 'combo',
    priceNGN: 19000,
    priceUSD: 49,
    originalPriceNGN: 24000,
    originalPriceUSD: 62,
    image: '/products/the_combo_19k_thumb.jpg',
    video: '/products/the_combo_19k.mp4',
    rating: 5.0,
    reviewCount: 520,
    isBestSeller: true,
    isFeatured: true,
    volume: 'Complete Set',
    stock: 20,
    description: 'Our #1 best-selling gift and self-care combo package! Features our long-lasting fragrance spray paired with deeply hydrating glow essentials. Watch our real customer video demonstration directly in the viewer.',
    howToUse: 'Apply the body care oil right after shower to lock in moisture, then mist the perfume spray over pulse points for all-day radiance.',
    sku: 'FBH-CMB-19K'
  },

  // 6. Aqua Rich (From Google Drive: "Aqua rich 11000")
  {
    id: 'aqua-rich',
    name: 'Aqua Rich UV Watery Essence SPF50+',
    subtitle: 'Featherlight sunscreen & hydrating essence for radiant skin',
    category: 'skincare',
    priceNGN: 11000,
    priceUSD: 25,
    originalPriceNGN: 14000,
    originalPriceUSD: 32,
    image: '/products/aqua_rich.jpg',
    rating: 4.9,
    reviewCount: 380,
    isBestSeller: true,
    volume: '70g',
    stock: 35,
    description: 'An essential for tropical Nigerian weather. Aqua Rich UV Watery Essence protects your skin from intense sun damage with broad-spectrum SPF50+ while keeping your complexion supple and dewy without white cast.',
    howToUse: 'Apply generously to face and neck every morning 15 minutes before stepping outdoors.',
    ingredients: 'Hyaluronic Acid, Royal Jelly Extract, Citrus Fruit Extract, Advanced UV Filters.',
    sku: 'FBH-AQR-70'
  },

  // 7. Dr. Davey Lotion (From Google Drive: "Dr.Davey lotion 5000")
  {
    id: 'dr-davey-lotion',
    name: 'Dr. Davey Collagen Radiance & Firming Lotion',
    subtitle: 'Deep skin softening, gentle hydration for family & baby care',
    category: 'skincare',
    priceNGN: 5000,
    priceUSD: 14,
    originalPriceNGN: 6500,
    originalPriceUSD: 18,
    image: '/products/dr_davey_lotion.jpg',
    rating: 4.8,
    reviewCount: 650,
    isBestSeller: true,
    volume: '500ml',
    stock: 60,
    description: 'Enriched with active collagen and essential skin vitamins. Dr. Davey lotion deeply softens dry skin, improves elasticity, and maintains a healthy, supple barrier suitable for mothers, babies, and the whole family.',
    howToUse: 'Massage all over body twice daily after bath for 24-hour hydration and softness.',
    sku: 'FBH-DD-500'
  },

  // 8. PRO LAB (From Google Drive: "PRO LAB 9500")
  {
    id: 'pro-lab',
    name: 'PRO LAB Advanced Corrective Serum Complex',
    subtitle: 'Clinical strength brightening, spot clearing & texture refinement',
    category: 'skincare',
    priceNGN: 9500,
    priceUSD: 24,
    originalPriceNGN: 12500,
    originalPriceUSD: 30,
    image: '/products/pro_lab.jpg',
    rating: 4.8,
    reviewCount: 295,
    volume: '60ml',
    stock: 30,
    description: 'Formulated with concentrated dermatological actives to fade dark blemishes, clear hyperpigmentation, and enhance natural skin radiance with gentle, proven ingredients.',
    howToUse: 'Dispense 3 to 4 drops onto fingertips and pat gently into cleaned face and neck.',
    sku: 'FBH-PLB-60'
  },

  // 9. VC Oil (From Google Drive: "VC oil 1900")
  {
    id: 'vc-oil',
    name: 'VC Vitamin C Radiance Beauty Oil',
    subtitle: 'Pure concentrated botanical Vitamin C oil for skin glow & nourishment',
    category: 'skincare',
    priceNGN: 1900,
    priceUSD: 5,
    originalPriceNGN: 2500,
    originalPriceUSD: 7,
    image: '/products/vc_oil.jpg',
    rating: 4.9,
    reviewCount: 920,
    isBestSeller: true,
    volume: '30ml',
    stock: 85,
    description: 'Pure, concentrated antioxidant glow oil. Brightens dull complexions, hydrates dry lips and cuticles, and can be mixed into baby or adult lotions for extra glow and softness.',
    howToUse: 'Add 2 drops to your regular body cream or apply directly to facial high points and dry patches.',
    sku: 'FBH-VCO-30'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    productId: 'vanilla-voyage',
    author: 'Mrs. Folake Adebayo',
    location: 'Akure, Ondo State',
    rating: 5,
    title: 'The longevity of Vanilla Voyage is unmatched!',
    comment: 'I bought Vanilla Voyage at the Oka Aro New Town Market shop in Akure. The fragrance lasted on my dress for two days. Authentic quality, fast delivery!',
    date: '2 days ago',
    verified: true
  },
  {
    id: 'rev-2',
    productId: 'the-combo',
    author: 'Blessing K.',
    location: 'Ondo Road, Akure',
    rating: 5,
    title: 'Best combo deal in Akure!',
    comment: 'The 19k combo is such a great value. Ordered on WhatsApp and received it within 2 hours in Akure. The perfume spray and body oil pair wonderfully.',
    date: '4 days ago',
    verified: true
  },
  {
    id: 'rev-3',
    productId: 'dr-davey-lotion',
    author: 'Chioma O.',
    location: 'Akure Walk-in Customer',
    rating: 5,
    title: 'Super gentle on my baby and myself',
    comment: 'Dr. Davey lotion keeps my baby skin soft and glowing without rash. Fortunate Baby Home always sells 100% original items.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 'rev-4',
    productId: 'cocktail-100ml',
    author: 'Toyin A.',
    location: 'Lagos (Online order)',
    rating: 5,
    title: 'Cocktail 100ml smells like pure luxury',
    comment: 'Ordered from Lagos via WhatsApp. Package arrived safely wrapped. The sparkling fruity-rose notes are so elegant.',
    date: '2 weeks ago',
    verified: true
  }
];
