import type { Product, Category, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Bronze Statues', path: '/products?category=Bronze Statues' },
  { name: 'Electronics', path: '/products?category=Electronics' },
  { name: 'Furniture', path: '/products?category=Furniture' },
  { name: 'Puja Items', path: '/products?category=Puja Items' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Nataraja Bronze Statue', price: 24000, originalPrice: 28000, imageUrl: '/assests/bronzeStatue/natrajan.png', category: 'Bronze Statues', description: 'Exquisite bronze statue of Lord Shiva as Nataraja, the cosmic dancer. Handcrafted using traditional lost-wax technique, this masterpiece represents the eternal dance of creation and destruction.' },
  { id: 2, name: 'Ganesh Bronze Idol', price: 18500, imageUrl: '/assests/bronzeStatue/ganesha.png', category: 'Bronze Statues', description: 'Beautiful bronze idol of Lord Ganesha, the remover of obstacles. Perfect for home temples and pooja rooms, crafted with intricate details and traditional artistry.' },
  { id: 3, name: 'Traditional Kuthu Vilakku', price: 8500, imageUrl: '/assests/bronzeStatue/kuthuvilakku.png', category: 'Bronze Statues', description: 'Traditional oil lamp (Kuthu Vilakku) with elegant design. A symbol of prosperity and light, perfect for auspicious occasions and daily worship.' },

  { id: 4, name: 'LED Smart TV 43 inch', price: 28999, originalPrice: 35999, imageUrl: '/assests/electronics/tv.png', category: 'Electronics', description: 'Full HD LED Smart TV with built-in WiFi, multiple HDMI ports, and USB connectivity. Enjoy stunning picture quality and smart features for your entertainment needs.' },
  { id: 5, name: 'Refrigerator', price: 16500, imageUrl: '/assests/electronics/fridge.png', category: 'Electronics', description: 'Energy-efficient refrigerator with ample storage space. Features adjustable shelves, vegetable crisper, and quick cooling technology.' },
  { id: 6, name: 'Mixer Grinder', price: 4500, imageUrl: '/assests/electronics/mixer.png', category: 'Electronics', description: 'Powerful mixer grinder for all your kitchen needs. Comes with multiple jars for grinding, blending, and mixing.' },

  { id: 7, name: 'Sofa Set 3+2', price: 38000, originalPrice: 42000, imageUrl: '/assests/furniture/sofa.png', category: 'Furniture', description: 'Comfortable 5-seater sofa set with premium fabric upholstery. Modern design with sturdy wooden frame, ideal for your living room.' },
  { id: 8, name: 'Wooden Bed', price: 25000, imageUrl: '/assests/furniture/bed.png', category: 'Furniture', description: 'Sturdy wooden bed with a classic design. Provides excellent support and adds a touch of elegance to your bedroom.' },
  { id: 9, name: 'Wooden Wardrobe', price: 32000, imageUrl: '/assests/furniture/wardrobe.png', category: 'Furniture', description: 'Spacious wooden wardrobe with multiple compartments. Perfect for organizing your clothes and accessories.' },

  { id: 10, name: 'Brass Pooja Thali Set', price: 2800, imageUrl: '/assests/poojaItems/poojaPlate.png', category: 'Puja Items', description: 'Complete brass pooja thali set including plates, bowls, and accessories. Perfect for daily worship and special occasions, crafted with traditional designs.' },
  { id: 11, name: 'Brass Bell', price: 850, imageUrl: '/assests/poojaItems/bell.png', category: 'Puja Items', description: 'Traditional brass bell with a resonant sound. Essential for pooja rituals and creating a spiritual ambiance.' },
  { id: 12, name: 'Pooja Basket', price: 1200, imageUrl: '/assests/poojaItems/poojaBasket.png', category: 'Puja Items', description: 'Beautifully woven pooja basket for carrying flowers and offerings. Durable and lightweight, perfect for temple visits.' },
];

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Bronze Statues', imageUrl: '/assests/bronzeStatue/natrajan.png', productCount: 25 },
  { id: 2, name: 'Electronics', imageUrl: '/assests/electronics/tv.png', productCount: 40 },
  { id: 3, name: 'Furniture', imageUrl: '/assests/furniture/sofa.png', productCount: 35 },
  { id: 4, name: 'Puja Items', imageUrl: '/assests/poojaItems/poojaPlate.png', productCount: 50 },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: "Excellent quality products and great service! The bronze statue I purchased is absolutely stunning.", author: "Rajesh Kumar", location: "Kumbakonam" },
  { id: 2, quote: "Best place in Kumbakonam for electronics and furniture. Very reasonable prices and helpful staff.", author: "Meena Sundaram", location: "Thanjavur" },
  { id: 3, quote: "Authentic brass pooja items with traditional designs. Highly recommended for all your religious needs!", author: "Venkatesh Iyer", location: "Trichy" },
];