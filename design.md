# LUXORA PERFUMES & FORTUNATE FRAGRANCE BOUTIQUE
## Visual Design & Architecture Specification (design.md)

Based on the official visual reference: `Perfume Website Design _ Luxury Fragrance Store UI/UX Inspiration` and business specifications from `Fortunate Baby's Home & Luxury Fragrances`.

---

### 1. Brand Identity & Creative Direction
* **Brand Name**: LUXORA PERFUMES (*by Fortunate Boutique*)
* **Store Location**: Oka Aro New Town Market, Akure, Ondo State, Nigeria
* **Contact & Ordering**: Direct WhatsApp Concierge (`+2348073432298` / `08073432298`)
* **Brand Philosophy**: *"Scent Your Story – Elegance in Every Note"*. Blending timeless Parisian perfumery elegance with Nigerian warmth and authentic boutique curation.
* **Core Offerings**: Luxury Eau de Parfums (100ml Cocktail, Vanilla Voyage, Momento Riffs, Giorgio Black, Noir Intense, Royal Oud), Premium Skincare (Aqua Rich, Dr. Davey Glow Lotion, VC Radiance Oil, PRO LAB), Curated Luxury Combos, and Mother & Baby Care.

---

### 2. Color Palette & Visual Tone
The visual identity embraces warm luxury, editorial minimalism, and high-contrast night aesthetics:

* **Primary Backgrounds**:
  * Champagne / Cream Ivory: `#FBF9F5` (Light section surface)
  * Warm Alabaster: `#F5F2EB` (Product card containers & subtle card fills)
  * Obsidian Luxe: `#111111` & `#181818` (Dark carousel for Best Sellers / Night mode)
  * Deep Charcoal: `#1F1F1F`
* **Accents & Precious Metals**:
  * Imperial Gold: `#C5A880` / `#D4AF37`
  * Rose Gold / Champagne Bronze: `#DFC1A2` / `#B89366`
  * Rich Truffle: `#2D2520`
* **Typography Colors**:
  * Obsidian Black: `#141312` (Headlines and primary editorial body)
  * Cashmere Gray: `#6E6B67` / `#73706B` (Secondary descriptions and scent notes)
  * Pure White: `#FFFFFF` (Text on dark carousel cards and CTAs)
  * Soft Gold: `#E6C594` (Badges and star ratings)

---

### 3. Typography Hierarchy
* **Editorial Serif (Headings & Hero)**:
  * Font Family: `Playfair Display`, `Cormorant Garamond`, serif
  * Hero Title: `text-5xl md:text-7xl font-serif font-light tracking-tight`
  * Sub-headings & Section Titles: `text-2xl md:text-3xl font-serif tracking-normal`
  * Cursive / Script Accents: Italian style italicized notes (e.g. *"in Every Note"*)
* **Modern Clean Sans-Serif (Navigation, Specs, Buttons)**:
  * Font Family: `Inter`, `Montserrat`, system-ui, sans-serif
  * Micro-kicker / Category Tags: `text-xs uppercase tracking-[0.25em] font-semibold text-amber-700`
  * Body Text: `text-sm md:text-base leading-relaxed text-stone-600`
  * CTAs: `text-xs uppercase tracking-[0.2em] font-medium`

---

### 4. Layout Architecture & Section Flow
Following the exact visual sequence of the reference design:

1. **Top Announcement Bar**:
   * Text: `✨ FREE SHIPPING ON ORDERS OVER ₦75,000 / $75 | 10% OFF YOUR FIRST ORDER - USE CODE: WELCOME10`
   * Dismissible close toggle, crisp micro-banner with high contrast.
2. **Global Header & Navigation**:
   * Centered or left-aligned stylized brand mark: `LUXORA PERFUMES` with ornamental diamond clover icon.
   * Navigation links: `HOME`, `SHOP`, `COLLECTIONS`, `BEST SELLERS`, `ABOUT US`, `JOURNAL`, `CONTACT`.
   * Action Icons: Currency Toggle (₦ NGN / $ USD), Search Bar, Account / WhatsApp Concierge, Shopping Cart with animated badge count, Offline status pill, and PWA Install Button.
3. **Hero Stage ("Scent Your Story / Elegance in Every Note")**:
   * Left Column: Micro-kicker `SCENT YOUR STORY`, editorial heading `Elegance in Every Note`, evocative description, dual primary CTAs (`SHOP NOW →` and `EXPLORE COLLECTIONS`), and 3 value pillars:
     * *PREMIUM QUALITY* (Finest ingredients)
     * *LONG LASTING* (Fragrance that stays)
     * *BEAUTIFUL GIFTING* (Perfect for every occasion)
   * Right Column: Floating high-resolution luxury perfume flacon against warm travertine stone and delicate blush petals, highlighted with circular `"NEW ARRIVAL - Discover Now"` floating badge.
4. **Value Proposition Strip (4 Trust Badges)**:
   * 🚚 *FREE SHIPPING* (On eligible orders)
   * 🔄 *EASY RETURNS* (Hassle-free policy)
   * 🔒 *SECURE PAYMENT* (100% safe checkout & WhatsApp verification)
   * 🎧 *DEDICATED SUPPORT* (Physical store & 24/7 WhatsApp concierge)
5. **"SHOP BY SCENT / Find Your Signature Scent"**:
   * Header with `"VIEW ALL COLLECTIONS →"`
   * 4 Scent Family Cards with arched or pristine square image containers:
     * **FLORAL**: Soft, romantic & elegant (`SHOP NOW →`)
     * **OUD**: Rich, deep & mysterious (`SHOP NOW →`)
     * **FRESH**: Clean, crisp & invigorating (`SHOP NOW →`)
     * **ORIENTAL**: Bold, warm & seductive (`SHOP NOW →`)
6. **"BEST SELLERS / Customer Favorites" (Dark Luxury Night Theater)**:
   * Dark textured obsidian background (`#111111`)
   * Left intro panel: `BEST SELLERS / Customer Favorites / Loved by thousands around the world` with `SHOP BEST SELLERS →` CTA and circular arrow carousel controls (`<` and `>`).
   * Product carousel cards:
     * **Noir Intense** (₦21,000 / $89.00) – ★★★★★ (1,250 reviews)
     * **Bloom Essence** (₦24,500 / $79.00) – ★★★★★ (980 reviews)
     * **Aqua Fresh** (₦11,000 / $75.00) – ★★★★★ (870 reviews)
     * **Royal Oud** (₦36,500 / $95.00) – ★★★★★ (1,150 reviews)
     * **Vanilla Voyage** (₦45,000) – ★★★★★ (2,100 reviews)
7. **Featured Inventory Catalog (Direct from Fortunate Store)**:
   * 100ml Cocktail Eau de Parfum, Dr. Davey Glow Lotion, Momento Riffs, PRO LAB Skincare, VC Vitamin C Oil, The Exclusive Luxury Combo.
   * Quick Add to Cart, Quick View modal with fragrance notes, direct WhatsApp 1-tap checkout.
8. **Editorial Trust & Press Strip**:
   * `AS SEEN IN`: *BAZAAR* · *ELLE* · *VOGUE* · *Esquire* · *GQ*
   * Badges: `MADE IN FRANCE / Crafted with expertise` & `VEGAN & CRUELTY FREE / Beauty with compassion`
9. **Physical Boutique Showcase (Oka Aro New Town Market, Akure)**:
   * Store address, phone inquiries (`08073432298`), pickup availability, opening hours, local Nigerian delivery information.
10. **Interactive Scent Quiz / Fragrance Finder**:
    * Scent profile selector: Mood, Occasion, Season, Fragrance Family recommendation engine.
11. **Newsletter & VIP Club**:
    * *"Be the first to know – Exclusive offers, new arrivals, and scent stories."*
    * Email capture form with instant 10% promo coupon code (`WELCOME10`).
    * Perks: Exclusive Offers, New Arrivals, Early Access, Style Tips.
12. **Global Footer & Compliance**:
    * Brand summary, navigation columns (Shop, Collections, Customer Care, Company).
    * Copyright © 2024–2026 Luxora Perfumes & Fortunate Boutique. All Rights Reserved.
    * Copyright protection, anti-scraping notice, DMCA badge, security protocols, system backup manager access.

---

### 5. Technical Requirements & Engineering Standards
* **Offline PWA Architecture**: Registered service worker caching app assets and product data; in-app install prompt for desktop & mobile; custom iOS installation guide.
* **Image Optimization & Lazy Loading**: Responsive image sizing, `loading="lazy"`, `decoding="async"`, and skeleton placeholders.
* **Search Engine Optimization (SEO)**: Pre-configured OpenGraph tags, dynamic meta descriptions, canonical URLs, XML Sitemap (`/sitemap.xml`), robots.txt (`/robots.txt`), and Schema.org JSON-LD (Store, Product, LocalBusiness, Breadcrumbs).
* **Analytics Engine**: Internal real-time event tracker (page views, impressions, add-to-cart, WhatsApp conversions, bounce rate) with an interactive dashboard.
* **Security & Automated Backups**: CSP safeguards, XSS sanitization, tamper-evident checkout, and one-click JSON/local automated data backup and restore.
* **Intellectual Property Protection**: Custom copyright modal on inspect/copy attempts, un-draggable images, watermark styling option, and legal terms.
