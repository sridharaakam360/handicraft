import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const WhatsappIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.16 14.2c-.28-.14-1.64-.81-1.9-.9s-.45-.14-.64.14c-.19.27-.72.9-.88 1.08-.16.19-.32.21-.6.07-.27-.14-1.14-.42-2.17-1.34-.81-.71-1.36-1.59-1.52-1.86s-.02-.42.12-.56c.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.5s-.64-1.54-.88-2.1c-.24-.56-.49-.48-.64-.49-.16 0-.36-.01-.54-.01s-.46.07-.69.36c-.23.29-.92 1.02-.92 2.49s.94 2.9 1.07 3.1c.13.2 1.86 2.96 4.54 4.03.65.26 1.23.42 1.66.53.71.19 1.36.16 1.86-.09.57-.29 1.64-1.05 1.88-1.42.24-.37.24-.69.17-.83-.07-.13-.26-.22-.54-.36z"/>
    </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const phoneNumber = "911234567890";
    const message = encodeURIComponent(`I'm interested in buying the product: ${product.name} (Price: ₹${product.price.toLocaleString('en-IN')})`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col">
            <Link to={`/products/${product.id}`} className="block">
                <div className="relative overflow-hidden">
                    <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                     {product.originalPrice && (
                        <span className="absolute top-3 left-3 bg-brand-secondary text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
                    )}
                </div>
            </Link>
            <div className="p-4 text-center flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-brand-dark mb-2 truncate">
                    <Link to={`/products/${product.id}`} className="hover:text-brand-primary">{product.name}</Link>
                </h3>
                <div className="flex justify-center items-center space-x-2">
                    <p className="text-xl font-bold text-brand-primary">₹{product.price.toLocaleString('en-IN')}</p>
                    {product.originalPrice && (
                        <p className="text-md text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
                    )}
                </div>
                <div className="mt-auto pt-4 flex items-center space-x-2">
                    <button className="flex-1 bg-brand-primary text-white py-2 px-4 rounded-full font-bold hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center space-x-2">
                        <ShoppingBagIcon className="w-5 h-5"/>
                        <span>Add to Cart</span>
                    </button>
                    <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Buy on WhatsApp"
                        className="flex-shrink-0 bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition-colors duration-300"
                    >
                        <WhatsappIcon className="w-5 h-5"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;