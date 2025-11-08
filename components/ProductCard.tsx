
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
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
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-brand-dark mb-2 truncate">{product.name}</h3>
                <div className="flex justify-center items-center space-x-2 mb-4">
                    <p className="text-xl font-bold text-brand-primary">${product.price.toFixed(2)}</p>
                    {product.originalPrice && (
                        <p className="text-md text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                    )}
                </div>
                <button className="w-full bg-brand-primary text-white py-2 px-4 rounded-full font-bold hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center space-x-2">
                    <ShoppingBagIcon className="w-5 h-5"/>
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
