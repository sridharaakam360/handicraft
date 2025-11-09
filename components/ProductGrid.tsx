
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../src/types';
import ProductCard from './ProductCard';

interface ProductGridProps {
    title: string;
    products: Product[];
    showMoreLink?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products, showMoreLink }) => {
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-dark">{title}</h2>
                    {showMoreLink && (
                        <Link to={showMoreLink} className="text-brand-primary font-semibold hover:text-brand-secondary">
                            View All &rarr;
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGrid;
