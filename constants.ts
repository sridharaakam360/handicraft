import type { Product, Category, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Bronze Statues', path: '/products?category=Bronze' },
  { name: 'Wooden Sculptures', path: '/products?category=Wood' },
  { name: 'Brass Lamps', path: '/products?category=Brass' },
  { name: 'Tanjore Paintings', path: '/products?category=Painting' },
  { name: 'Pooja Items', path: '/products?category=Brass' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Dancing Ganesh Statue', price: 18750, originalPrice: 22500, imageUrl: 'https://source.unsplash.com/400x400/?ganesha,bronze,idol', category: 'Bronze', description: 'A magnificent bronze statue of Lord Ganesha in a dynamic dancing pose. This handcrafted masterpiece, made using the traditional lost-wax technique, captures the joyful essence of the deity. Perfect for home decor or as a spiritual centerpiece.' },
  { id: 2, name: 'Wooden Elephant Head', price: 13500, imageUrl: 'https://source.unsplash.com/400x400/?wooden,elephant,wall,art', category: 'Wood', description: 'Intricately carved from a single block of rosewood, this elephant head wall mount is a symbol of strength and wisdom. The detailed craftsmanship highlights the natural grain of the wood, making it a stunning piece of wall art for any room.' },
  { id: 3, name: 'Traditional Brass Lamp', price: 9000, imageUrl: 'https://source.unsplash.com/400x400/?traditional,brass,diya,lamp', category: 'Brass', description: 'Illuminate your home with this exquisite traditional Kuthu Vilakku (brass lamp). Handcrafted by skilled artisans from Tamil Nadu, its elegant design and radiant glow add a touch of divinity and tradition to any auspicious occasion.' },
  { id: 4, name: 'Lord Krishna Tanjore Painting', price: 33750, originalPrice: 37500, imageUrl: 'https://source.unsplash.com/400x400/?krishna,tanjore,painting', category: 'Painting', description: 'A divine Tanjore painting of Lord Krishna, adorned with 22-karat gold foil and semi-precious stones. This timeless piece of art, known for its rich colors and iconic composition, brings a sense of peace and spirituality to your living space.' },
  { id: 5, name: 'Nataraja Bronze Idol', price: 24000, imageUrl: 'https://source.unsplash.com/400x400/?nataraja,bronze,statue,india', category: 'Bronze', description: 'This stunning bronze idol depicts Lord Shiva as Nataraja, the cosmic dancer. Every detail, from the flowing locks to the surrounding circle of fire, is expertly crafted, representing the rhythm and harmony of life. A powerful and iconic piece.' },
  { id: 6, name: 'Hand-carved Wooden Panel', price: 21000, imageUrl: 'https://source.unsplash.com/400x400/?intricate,wood,carving,panel', category: 'Wood', description: 'A breathtaking wall panel, hand-carved from teak wood with intricate floral and traditional motifs. This piece showcases the exceptional skill of South Indian woodcarvers and serves as a magnificent focal point in any interior design.' },
  { id: 7, name: 'Peacock Brass Diya', price: 7125, originalPrice: 8250, imageUrl: 'https://source.unsplash.com/400x400/?peacock,diya,lamp,brass', category: 'Brass', description: 'An elegant brass oil lamp (diya) featuring a beautifully detailed peacock design. The peacock is a symbol of grace and beauty in Indian culture, making this lamp a perfect addition to your pooja room or as a decorative accent.' },
  { id: 8, name: 'Goddess Lakshmi Painting', price: 30000, imageUrl: 'https://source.unsplash.com/400x400/?lakshmi,tanjore,painting,gold', category: 'Painting', description: 'Invoke prosperity and fortune with this exquisite Tanjore painting of Goddess Lakshmi. Embellished with real gold foil and vibrant colors, this artwork is a masterpiece of devotional art, perfect for gifting or for your personal shrine.' },
];

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Bronze Collection', imageUrl: 'https://source.unsplash.com/500x700/?bronze,sculpture,india', productCount: 45 },
  { id: 2, name: 'Wooden Marvels', imageUrl: 'https://source.unsplash.com/500x700/?wood,carving,handicraft', productCount: 30 },
  { id: 3, name: 'Brass Luminance', imageUrl: 'https://source.unsplash.com/500x700/?brass,utensils,india', productCount: 60 },
  { id: 4, name: 'Tanjore Art', imageUrl: 'https://source.unsplash.com/500x700/?indian,painting,traditional,art', productCount: 25 },
];

export const TESTIMONIALS: Testimonial[] = [
    { id: 1, quote: "The craftsmanship is breathtaking! My Ganesh statue is the centerpiece of my home.", author: "Priya Sharma", location: "Mumbai, India" },
    { id: 2, quote: "Excellent quality and securely packaged. The wooden elephant head I ordered is simply stunning.", author: "John Davis", location: "New York, USA" },
    { id: 3, quote: "I'm so impressed with the detail on the Tanjore painting. It's a true work of art. Highly recommended!", author: "Aisha Khan", location: "Dubai, UAE" },
];