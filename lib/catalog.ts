import { Product, Brand } from '@/types';

// Legacy export for backward compatibility (cached builds)
export const LUXURY_BRANDS: Brand[] = [];

// Popular brands across ALL price ranges
export const POPULAR_BRANDS: Brand[] = [
  // Budget ($-$$)
  { id: 'uniqlo', name: 'Uniqlo', priceRange: '$', aesthetic: 'basics' },
  { id: 'zara', name: 'Zara', priceRange: '$$', aesthetic: 'trendy' },
  { id: 'hm', name: 'H&M', priceRange: '$', aesthetic: 'fast-fashion' },
  { id: 'muji', name: 'Muji', priceRange: '$$', aesthetic: 'minimalist' },
  { id: 'target', name: 'Target', priceRange: '$', aesthetic: 'casual' },

  // Mid-Range ($$)
  { id: 'everlane', name: 'Everlane', priceRange: '$$', aesthetic: 'transparent' },
  { id: 'cos', name: 'COS', priceRange: '$$', aesthetic: 'minimalist' },
  { id: 'aritzia', name: 'Aritzia', priceRange: '$$', aesthetic: 'contemporary' },
  { id: 'reformation', name: 'Reformation', priceRange: '$$$', aesthetic: 'sustainable' },
  { id: 'madewell', name: 'Madewell', priceRange: '$$', aesthetic: 'casual' },
  { id: 'jcrew', name: 'J.Crew', priceRange: '$$', aesthetic: 'preppy' },
  { id: 'banana-republic', name: 'Banana Republic', priceRange: '$$', aesthetic: 'business' },

  // Premium ($$$)
  { id: 'nordstrom', name: 'Nordstrom', priceRange: '$$-$$$', aesthetic: 'department' },
  { id: 'bloomingdales', name: 'Bloomingdale\'s', priceRange: '$$-$$$', aesthetic: 'department' },
  { id: 'shopbop', name: 'Shopbop', priceRange: '$$-$$$', aesthetic: 'curated' },
  { id: 'ssense', name: 'SSENSE', priceRange: '$$-$$$$', aesthetic: 'designer' },

  // Luxury ($$$$)
  { id: 'net-a-porter', name: 'Net-a-Porter', priceRange: '$$$$', aesthetic: 'luxury' },
  { id: 'matches', name: 'Matches Fashion', priceRange: '$$$$', aesthetic: 'luxury' },
  { id: 'farfetch', name: 'Farfetch', priceRange: '$$-$$$$', aesthetic: 'boutique' },
  { id: 'mr-porter', name: 'Mr Porter', priceRange: '$$$$', aesthetic: 'mens-luxury' },
  { id: 'mytheresa', name: 'Mytheresa', priceRange: '$$$$', aesthetic: 'luxury' },

  // Athletic/Street
  { id: 'nike', name: 'Nike', priceRange: '$$', aesthetic: 'athletic' },
  { id: 'adidas', name: 'Adidas', priceRange: '$$', aesthetic: 'athletic' },
  { id: 'lululemon', name: 'Lululemon', priceRange: '$$$', aesthetic: 'athleisure' },
  { id: 'alo', name: 'Alo Yoga', priceRange: '$$$', aesthetic: 'athleisure' },
  { id: 'outdoor-voices', name: 'Outdoor Voices', priceRange: '$$', aesthetic: 'active' },

  // Sustainable/Ethical
  { id: 'patagonia', name: 'Patagonia', priceRange: '$$$', aesthetic: 'outdoor' },
  { id: 'eileen-fisher', name: 'Eileen Fisher', priceRange: '$$$', aesthetic: 'sustainable' },
  { id: 'kotn', name: 'Kotn', priceRange: '$$', aesthetic: 'ethical' },
  { id: 'pact', name: 'Pact', priceRange: '$$', aesthetic: 'organic' },
];

// Expanded style options
export const STYLE_OPTIONS = [
  { id: 'minimalist', label: 'Minimalist', description: 'Clean, simple, timeless', icon: '◯' },
  { id: 'casual', label: 'Casual', description: 'Relaxed, comfortable', icon: '●' },
  { id: 'business', label: 'Business', description: 'Professional, polished', icon: '◆' },
  { id: 'trendy', label: 'Trendy', description: 'Fashion-forward, current', icon: '▲' },
  { id: 'classic', label: 'Classic', description: 'Traditional, enduring', icon: '■' },
  { id: 'bohemian', label: 'Bohemian', description: 'Free-spirited, artistic', icon: '✿' },
  { id: 'athleisure', label: 'Athleisure', description: 'Sporty, comfortable', icon: '◎' },
  { id: 'romantic', label: 'Romantic', description: 'Soft, feminine', icon: '♡' },
];

// Diverse product catalog across price ranges
export const CURATED_PRODUCTS: Product[] = [
  // Budget Tops ($25-75)
  {
    id: 'uniqlo-airism-tee',
    name: 'AIRism Cotton T-Shirt',
    brand: 'Uniqlo',
    price: 29,
    category: 'tops',
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    productUrl: 'https://uniqlo.com/airism-tee',
    scores: { minimalist: 85, casual: 90, business: 30, classic: 70, trendy: 40, bohemian: 20, athleisure: 60, romantic: 30 }
  },
  {
    id: 'everlane-box-tee',
    name: 'Organic Cotton Box-Cut Tee',
    brand: 'Everlane',
    price: 38,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop',
    productUrl: 'https://everlane.com/box-cut-tee',
    scores: { minimalist: 90, casual: 85, business: 35, classic: 75, trendy: 50, bohemian: 30, athleisure: 40, romantic: 35 }
  },
  {
    id: 'zara-basic-shirt',
    name: 'Basic Poplin Shirt',
    brand: 'Zara',
    price: 49,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=400&fit=crop',
    productUrl: 'https://zara.com/basic-shirt',
    scores: { minimalist: 75, casual: 70, business: 80, classic: 85, trendy: 60, bohemian: 25, athleisure: 20, romantic: 40 }
  },
  {
    id: 'cos-knit-sweater',
    name: 'Relaxed Wool Sweater',
    brand: 'COS',
    price: 89,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400&h=400&fit=crop',
    productUrl: 'https://cos.com/wool-sweater',
    scores: { minimalist: 95, casual: 80, business: 65, classic: 80, trendy: 45, bohemian: 35, athleisure: 30, romantic: 55 }
  },

  // Mid-Range Tops ($75-150)
  {
    id: 'aritzia-babaton-blouse',
    name: 'Babaton Silk Blouse',
    brand: 'Aritzia',
    price: 128,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    productUrl: 'https://aritzia.com/babaton-blouse',
    scores: { minimalist: 70, casual: 60, business: 90, classic: 85, trendy: 70, bohemian: 40, athleisure: 20, romantic: 75 }
  },
  {
    id: 'reformation-cashmere',
    name: 'Cashmere Crew Sweater',
    brand: 'Reformation',
    price: 168,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop',
    productUrl: 'https://reformation.com/cashmere',
    scores: { minimalist: 80, casual: 85, business: 60, classic: 75, trendy: 65, bohemian: 50, athleisure: 35, romantic: 80 }
  },
  {
    id: 'lululemon-define-jacket',
    name: 'Define Jacket',
    brand: 'Lululemon',
    price: 128,
    category: 'outerwear',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    productUrl: 'https://lululemon.com/define-jacket',
    scores: { minimalist: 60, casual: 85, business: 20, classic: 50, trendy: 75, bohemian: 15, athleisure: 100, romantic: 20 }
  },

  // Premium/Luxury Tops ($150-500)
  {
    id: 'vince-cashmere',
    name: 'Essential Cashmere Sweater',
    brand: 'Vince',
    price: 345,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&h=400&fit=crop',
    productUrl: 'https://vince.com/cashmere',
    scores: { minimalist: 95, casual: 80, business: 85, classic: 90, trendy: 40, bohemian: 30, athleisure: 25, romantic: 70 }
  },
  {
    id: 'toteme-ribbed-tee',
    name: 'Ribbed Modal T-Shirt',
    brand: 'Totême',
    price: 150,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop',
    productUrl: 'https://toteme-studio.com/ribbed-tee',
    scores: { minimalist: 98, casual: 85, business: 50, classic: 80, trendy: 55, bohemian: 25, athleisure: 35, romantic: 50 }
  },
  {
    id: 'the-row-shirt',
    name: 'Silk Charmeuse Shirt',
    brand: 'The Row',
    price: 890,
    category: 'tops',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=400&fit=crop',
    productUrl: 'https://therow.com/silk-shirt',
    scores: { minimalist: 100, casual: 60, business: 95, classic: 90, trendy: 30, bohemian: 25, athleisure: 10, romantic: 60 }
  },

  // Bottoms - Budget
  {
    id: 'uniqlo-wide-pants',
    name: 'Wide Fit Pleated Pants',
    brand: 'Uniqlo',
    price: 49,
    category: 'bottoms',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    productUrl: 'https://uniqlo.com/wide-pants',
    scores: { minimalist: 80, casual: 85, business: 60, classic: 75, trendy: 70, bohemian: 45, athleisure: 40, romantic: 35 }
  },
  {
    id: 'everlane-jeans',
    name: 'The Way-High Jean',
    brand: 'Everlane',
    price: 98,
    category: 'bottoms',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    productUrl: 'https://everlane.com/way-high-jean',
    scores: { minimalist: 75, casual: 90, business: 25, classic: 80, trendy: 80, bohemian: 40, athleisure: 30, romantic: 30 }
  },
  {
    id: 'zara-tailored-trousers',
    name: 'Tailored Straight Trousers',
    brand: 'Zara',
    price: 69,
    category: 'bottoms',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    productUrl: 'https://zara.com/tailored-trousers',
    scores: { minimalist: 70, casual: 65, business: 85, classic: 80, trendy: 75, bohemian: 25, athleisure: 20, romantic: 35 }
  },

  // Bottoms - Mid/Premium
  {
    id: 'aritzia-effortless-pant',
    name: 'Effortless Pant',
    brand: 'Aritzia',
    price: 148,
    category: 'bottoms',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
    productUrl: 'https://aritzia.com/effortless-pant',
    scores: { minimalist: 85, casual: 80, business: 90, classic: 85, trendy: 70, bohemian: 30, athleisure: 35, romantic: 40 }
  },
  {
    id: 'agolde-jeans',
    name: '90s Pinch Waist Jeans',
    brand: 'Agolde',
    price: 188,
    category: 'bottoms',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    productUrl: 'https://agolde.com/90s-jeans',
    scores: { minimalist: 70, casual: 95, business: 20, classic: 75, trendy: 95, bohemian: 50, athleisure: 25, romantic: 35 }
  },
  {
    id: 'the-row-ginza-pants',
    name: 'Ginza Straight Pants',
    brand: 'The Row',
    price: 990,
    category: 'bottoms',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    productUrl: 'https://therow.com/ginza-pants',
    scores: { minimalist: 100, casual: 50, business: 95, classic: 90, trendy: 40, bohemian: 20, athleisure: 10, romantic: 35 }
  },

  // Dresses
  {
    id: 'reformation-dress',
    name: 'Juliette Dress',
    brand: 'Reformation',
    price: 248,
    category: 'dresses',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    productUrl: 'https://reformation.com/juliette-dress',
    scores: { minimalist: 60, casual: 70, business: 50, classic: 70, trendy: 85, bohemian: 80, athleisure: 15, romantic: 95 }
  },
  {
    id: 'zara-slip-dress',
    name: 'Satin Slip Dress',
    brand: 'Zara',
    price: 59,
    category: 'dresses',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    productUrl: 'https://zara.com/slip-dress',
    scores: { minimalist: 75, casual: 65, business: 40, classic: 75, trendy: 80, bohemian: 60, athleisure: 20, romantic: 85 }
  },

  // Shoes - Casual/Athletic
  {
    id: 'nike-air-force',
    name: 'Air Force 1',
    brand: 'Nike',
    price: 110,
    category: 'shoes',
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop',
    productUrl: 'https://nike.com/air-force-1',
    scores: { minimalist: 70, casual: 100, business: 10, classic: 90, trendy: 85, bohemian: 30, athleisure: 90, romantic: 15 }
  },
  {
    id: 'adidas-samba',
    name: 'Samba OG',
    brand: 'Adidas',
    price: 100,
    category: 'shoes',
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1528701800489-20be3c17f07b?w=400&h=400&fit=crop',
    productUrl: 'https://adidas.com/samba',
    scores: { minimalist: 80, casual: 95, business: 15, classic: 85, trendy: 90, bohemian: 35, athleisure: 70, romantic: 20 }
  },

  // Shoes - Business Professional
  {
    id: 'cole-haan-pumps',
    name: 'Grand Ambition Pump',
    brand: 'Cole Haan',
    price: 180,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://colehaan.com/grand-ambition',
    scores: { minimalist: 80, casual: 40, business: 95, classic: 90, trendy: 60, bohemian: 20, athleisure: 10, romantic: 70 }
  },
  {
    id: 'sam-edelman-pumps',
    name: 'Hazel Pointed Toe Pump',
    brand: 'Sam Edelman',
    price: 140,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://samedelman.com/hazel',
    scores: { minimalist: 75, casual: 35, business: 90, classic: 85, trendy: 70, bohemian: 25, athleisure: 5, romantic: 75 }
  },
  {
    id: 'everlane-day-glove',
    name: 'The Day Glove',
    brand: 'Everlane',
    price: 165,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://everlane.com/day-glove',
    scores: { minimalist: 90, casual: 80, business: 85, classic: 85, trendy: 50, bohemian: 40, athleisure: 30, romantic: 60 }
  },
  {
    id: 'nordstrom-loafers',
    name: 'Leather Penny Loafer',
    brand: 'Nordstrom',
    price: 120,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://nordstrom.com/penny-loafer',
    scores: { minimalist: 85, casual: 70, business: 90, classic: 95, trendy: 50, bohemian: 30, athleisure: 10, romantic: 55 }
  },
  {
    id: 'banana-republic-oxfords',
    name: 'Leather Oxford Flat',
    brand: 'Banana Republic',
    price: 128,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://bananarepublic.com/oxford-flat',
    scores: { minimalist: 90, casual: 60, business: 95, classic: 90, trendy: 45, bohemian: 20, athleisure: 5, romantic: 50 }
  },

  // Shoes - Luxury
  {
    id: 'manolo-blahnik',
    name: 'Hangisi Pump',
    brand: 'Manolo Blahnik',
    price: 995,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://manoloblahnik.com/hangisi',
    scores: { minimalist: 70, casual: 30, business: 95, classic: 95, trendy: 60, bohemian: 35, athleisure: 5, romantic: 90 }
  },
  {
    id: 'margiela-tabi',
    name: 'Tabi Ankle Boots',
    brand: 'Maison Margiela',
    price: 1080,
    category: 'shoes',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    productUrl: 'https://farfetch.com/margiela-tabi',
    scores: { minimalist: 75, casual: 70, business: 60, classic: 60, trendy: 95, bohemian: 45, athleisure: 20, romantic: 40 }
  },

  // Accessories
  {
    id: 'muji-tote',
    name: 'Canvas Tote Bag',
    brand: 'Muji',
    price: 25,
    category: 'accessories',
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    productUrl: 'https://muji.com/canvas-tote',
    scores: { minimalist: 95, casual: 90, business: 40, classic: 80, trendy: 30, bohemian: 50, athleisure: 40, romantic: 25 }
  },
  {
    id: 'lemaire-croissant',
    name: 'Croissant Bag',
    brand: 'Lemaire',
    price: 890,
    category: 'accessories',
    gender: 'unisex',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
    productUrl: 'https://lemaire.fr/croissant',
    scores: { minimalist: 95, casual: 85, business: 70, classic: 75, trendy: 80, bohemian: 55, athleisure: 30, romantic: 75 }
  },

  // Outerwear
  {
    id: 'uniqlo-ultra-light',
    name: 'Ultra Light Down Jacket',
    brand: 'Uniqlo',
    price: 69,
    category: 'outerwear',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    productUrl: 'https://uniqlo.com/ultra-light-down',
    scores: { minimalist: 80, casual: 90, business: 30, classic: 75, trendy: 50, bohemian: 25, athleisure: 60, romantic: 20 }
  },
  {
    id: 'toteme-coat',
    name: 'Signature Wool Coat',
    brand: 'Totême',
    price: 990,
    category: 'outerwear',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    productUrl: 'https://toteme-studio.com/wool-coat',
    scores: { minimalist: 98, casual: 60, business: 85, classic: 90, trendy: 40, bohemian: 25, athleisure: 15, romantic: 50 }
  },
  {
    id: 'patagonia-fleece',
    name: 'Retro Pile Fleece',
    brand: 'Patagonia',
    price: 139,
    category: 'outerwear',
    gender: 'womens',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    productUrl: 'https://patagonia.com/retro-pile',
    scores: { minimalist: 40, casual: 95, business: 10, classic: 60, trendy: 70, bohemian: 60, athleisure: 85, romantic: 20 }
  },

  // === MENS PRODUCTS ===
  // Mens Tops
  {
    id: 'uniqlo-mens-tee',
    name: 'Supima Cotton Crew Neck',
    brand: 'Uniqlo',
    price: 19,
    category: 'tops',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    productUrl: 'https://uniqlo.com/supima-tee',
    scores: { minimalist: 85, casual: 95, business: 20, classic: 75, trendy: 40, bohemian: 20, athleisure: 50, romantic: 10 }
  },
  {
    id: 'jcrew-mens-oxford',
    name: 'Slim Flex Oxford Shirt',
    brand: 'J.Crew',
    price: 79,
    category: 'tops',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400&h=400&fit=crop',
    productUrl: 'https://jcrew.com/oxford-shirt',
    scores: { minimalist: 70, casual: 75, business: 90, classic: 90, trendy: 50, bohemian: 15, athleisure: 20, romantic: 15 }
  },
  {
    id: 'cos-mens-knit',
    name: 'Merino Wool Sweater',
    brand: 'COS',
    price: 89,
    category: 'tops',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?w=400&h=400&fit=crop',
    productUrl: 'https://cos.com/merino-sweater',
    scores: { minimalist: 95, casual: 80, business: 70, classic: 85, trendy: 45, bohemian: 20, athleisure: 25, romantic: 15 }
  },

  // Mens Bottoms
  {
    id: 'levis-501-mens',
    name: '501 Original Fit Jeans',
    brand: "Levi's",
    price: 98,
    category: 'bottoms',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    productUrl: 'https://levis.com/501',
    scores: { minimalist: 60, casual: 100, business: 10, classic: 95, trendy: 60, bohemian: 50, athleisure: 30, romantic: 10 }
  },
  {
    id: 'bonobos-chinos',
    name: 'Stretch Chino Pants',
    brand: 'Bonobos',
    price: 99,
    category: 'bottoms',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    productUrl: 'https://bonobos.com/chinos',
    scores: { minimalist: 75, casual: 80, business: 85, classic: 85, trendy: 55, bohemian: 20, athleisure: 30, romantic: 10 }
  },

  // Mens Shoes
  {
    id: 'nike-af1-mens',
    name: 'Air Force 1',
    brand: 'Nike',
    price: 110,
    category: 'shoes',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop',
    productUrl: 'https://nike.com/air-force-1',
    scores: { minimalist: 70, casual: 100, business: 10, classic: 90, trendy: 85, bohemian: 25, athleisure: 80, romantic: 10 }
  },
  {
    id: 'clarks-desert-boot',
    name: 'Desert Boot',
    brand: 'Clarks',
    price: 130,
    category: 'shoes',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    productUrl: 'https://clarks.com/desert-boot',
    scores: { minimalist: 80, casual: 85, business: 60, classic: 95, trendy: 50, bohemian: 70, athleisure: 20, romantic: 20 }
  },
  {
    id: 'allen-edmonds-park',
    name: 'Park Avenue Oxford',
    brand: 'Allen Edmonds',
    price: 395,
    category: 'shoes',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    productUrl: 'https://allenedmonds.com/park-avenue',
    scores: { minimalist: 85, casual: 20, business: 100, classic: 100, trendy: 30, bohemian: 10, athleisure: 5, romantic: 15 }
  },

  // Mens Outerwear
  {
    id: 'uniqlo-mens-coat',
    name: 'Wool Cashmere Coat',
    brand: 'Uniqlo',
    price: 149,
    category: 'outerwear',
    gender: 'mens',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    productUrl: 'https://uniqlo.com/wool-coat',
    scores: { minimalist: 90, casual: 70, business: 90, classic: 90, trendy: 45, bohemian: 15, athleisure: 10, romantic: 10 }
  },
];

// Aspirational Inspiration boards - fashion-forward and visually striking
export const INSPIRATION_BOARDS = [
  {
    id: 'avant-garde-editorial',
    name: 'Avant-Garde Editorial',
    description: 'Dramatic silhouettes and architectural shapes. For the bold and unconventional.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=600&fit=crop',
    styles: ['avant-garde', 'trendy'],
    brands: ['maison-margiela', 'yohji-yamamoto', 'comme-des-garcons'],
    budgetRange: 1500,
    tag: 'Editorial'
  },
  {
    id: 'old-money-elegance',
    name: 'Old Money Elegance',
    description: 'Quiet luxury with impeccable tailoring. Inherited wealth aesthetic.',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=600&fit=crop',
    styles: ['classic', 'luxury'],
    brands: ['the-row', 'loro-piana', 'brunello-cucinelli'],
    budgetRange: 2000,
    tag: 'Quiet Luxury'
  },
  {
    id: 'parisian-rhapsody',
    name: 'Parisian Rhapsody',
    description: 'Effortlessly chic with a touch of romance. The Saint-Germain mood.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=600&fit=crop',
    styles: ['romantic', 'minimalist'],
    brands: ['lemaire', 'rouje', 'sezane'],
    budgetRange: 400,
    tag: 'French Chic'
  },
  {
    id: 'tokyo-street-style',
    name: 'Tokyo Street Style',
    description: 'Eclectic layers and unexpected combinations. Harajuku meets minimalism.',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=600&fit=crop',
    styles: ['trendy', 'bohemian'],
    brands: ['issey-miyake', 'y-3', 'sacai'],
    budgetRange: 800,
    tag: 'Street Style'
  },
  {
    id: 'coastal-grandmother',
    name: 'Coastal Grandmother',
    description: 'Relaxed elegance in natural linens. Nancy Meyers aesthetic.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop',
    styles: ['casual', 'romantic'],
    brands: ['toteme', 'auralee', 'lauren-manoogian'],
    budgetRange: 600,
    tag: 'Relaxed Luxury'
  },
  {
    id: 'dark-academia',
    name: 'Dark Academia',
    description: 'Intellectual romanticism with vintage appeal. Oxford meets gothic.',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=600&fit=crop',
    styles: ['classic', 'vintage'],
    brands: ['jil-sander', 'theory', 'acne-studios'],
    budgetRange: 500,
    tag: 'Intellectual'
  }
];

// IMPROVED matching algorithm - stricter and more accurate
export function matchProducts(
  products: Product[],
  preferences: {
    styles: string[];
    brands: string[];
    budget: number;
    gender: string;
    categories: string[];
    strictBrands: boolean;
  }
): Product[] {
  // STRICT Filter by category AND gender first
  let filtered = products.filter(product => {
    // Gender filter - MUST match
    if (preferences.gender) {
      if (product.gender !== 'unisex' && product.gender !== preferences.gender) {
        return false;
      }
    }

    // Category filter - MUST match one of selected
    if (preferences.categories.length > 0) {
      if (!preferences.categories.includes(product.category)) {
        return false;
      }
    }
    
    // Budget filter - MUST be within budget range
    // Allow 20% over budget for flexibility
    if (product.price > preferences.budget * 1.25) {
      return false;
    }
    
    // Brand filter (only if strict mode)
    if (preferences.strictBrands && preferences.brands.length > 0) {
      const brandMatch = preferences.brands.some(b => 
        product.brand.toLowerCase().replace(/\s+/g, '-') === b ||
        product.brand.toLowerCase() === b.toLowerCase()
      );
      if (!brandMatch) return false;
    }
    
    return true;
  });
  
  // If no products match strict filters, relax budget constraint slightly
  if (filtered.length === 0 && preferences.categories.length > 0) {
    filtered = products.filter(product => {
      if (preferences.gender && product.gender !== 'unisex' && product.gender !== preferences.gender) {
        return false;
      }
      if (!preferences.categories.includes(product.category)) {
        return false;
      }
      // Relax budget to 50% over
      return product.price <= preferences.budget * 1.5;
    });
  }
  
  // Score remaining products with weighted preferences
  let scored = filtered.map(product => {
    let score = 0;
    
    // Style matching (0-50 points) - HIGHEST WEIGHT
    if (preferences.styles.length > 0) {
      const styleScores = preferences.styles.map(style => 
        product.scores[style as keyof typeof product.scores] || 0
      );
      // Use minimum score to ensure ALL preferred styles are matched well
      const minStyleScore = Math.min(...styleScores);
      const avgStyleScore = styleScores.reduce((a, b) => a + b, 0) / styleScores.length;
      // Weight minimum score more heavily to avoid mismatches
      score += (minStyleScore * 0.6 + avgStyleScore * 0.4) / 100 * 50;
    } else {
      score += 25; // Neutral if no styles selected
    }
    
    // Budget matching (0-25 points)
    if (product.price <= preferences.budget) {
      // Prefer items that are good value (closer to budget cap)
      const valueRatio = product.price / preferences.budget;
      score += 15 + (valueRatio * 10); // 15-25 points
    } else {
      // Small penalty for over budget
      const overBudgetRatio = (product.price - preferences.budget) / preferences.budget;
      score += Math.max(0, 15 - (overBudgetRatio * 30));
    }
    
    // Brand preference bonus (0-15 points)
    if (preferences.brands.length > 0) {
      const brandMatch = preferences.brands.some(b => 
        product.brand.toLowerCase().replace(/\s+/g, '-') === b.toLowerCase() ||
        product.brand.toLowerCase() === b.toLowerCase()
      );
      if (brandMatch) {
        score += 15;
      }
    } else {
      score += 7; // Neutral
    }
    
    // Category match bonus (0-10 points) - small bonus for exact match
    if (preferences.categories.includes(product.category)) {
      score += 10;
    }
    
    return { ...product, matchScore: Math.round(score) };
  });
  
  // Sort by score descending
  scored.sort((a, b) => (b as any).matchScore - (a as any).matchScore);
  
  // Return top matches with higher minimum threshold
  // Only return items that are actually good matches
  const minScore = preferences.styles.length > 0 ? 50 : 30;
  return scored.filter((p: any) => p.matchScore >= minScore) as Product[];
}

export function generateMatchExplanation(
  product: Product,
  preferences: { styles: string[]; brands: string[] }
): string {
  const reasons: string[] = [];

  // Top matching styles
  if (preferences.styles.length > 0) {
    const styleScores = preferences.styles.map(style => ({
      style,
      score: product.scores[style as keyof typeof product.scores] || 0
    }));
    styleScores.sort((a, b) => b.score - a.score);

    const topStyle = styleScores[0];
    if (topStyle.score >= 70) {
      reasons.push(`Perfect for ${topStyle.style} style`);
    } else if (topStyle.score >= 50) {
      reasons.push(`Good for ${topStyle.style} looks`);
    }
  }

  // Brand mention
  if (preferences.brands.length > 0) {
    const brandMatch = preferences.brands.some(b =>
      product.brand.toLowerCase().replace(/\s+/g, '-') === b
    );
    if (brandMatch) {
      reasons.push(`From your preferred brand`);
    }
  }

  // Category
  reasons.push(`${product.category} category match`);

  return reasons[0] || 'Matches your preferences';
}