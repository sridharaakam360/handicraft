import type { Product, Category, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Bronze Statues', path: '/products' },
  { name: 'Wooden Sculptures', path: '/products' },
  { name: 'Brass Lamps', path: '/products' },
  { name: 'Tanjore Paintings', path: '/products' },
  { name: 'Pooja Items', path: '/products' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Dancing Ganesh Statue', price: 250, originalPrice: 300, imageUrl: 'https://source.unsplash.com/400x400/?ganesha,statue,bronze', category: 'Bronze' },
  { id: 2, name: 'Wooden Elephant Head', price: 180, imageUrl: 'https://source.unsplash.com/400x400/?wooden,elephant,carving', category: 'Wood' },
  { id: 3, name: 'Traditional Brass Lamp', price: 120, imageUrl: 'https://source.unsplash.com/400x400/?brass,lamp,diya,india', category: 'Brass' },
  { id: 4, name: 'Lord Krishna Tanjore Painting', price: 450, originalPrice: 500, imageUrl: 'https://source.unsplash.com/400x400/?krishna,painting,indian,art', category: 'Painting' },
  { id: 5, name: 'Nataraja Bronze Idol', price: 320, imageUrl: 'https://source.unsplash.com/400x400/?shiva,nataraja,statue', category: 'Bronze' },
  { id: 6, name: 'Hand-carved Wooden Panel', price: 280, imageUrl: 'https://source.unsplash.com/400x400/?wooden,carving,panel,intricate', category: 'Wood' },
  { id: 7, name: 'Peacock Brass Diya', price: 95, originalPrice: 110, imageUrl: 'https://source.unsplash.com/400x400/?brass,peacock,lamp', category: 'Brass' },
  { id: 8, name: 'Goddess Lakshmi Painting', price: 400, imageUrl: 'https://source.unsplash.com/400x400/?lakshmi,painting,indian,gold', category: 'Painting' },
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