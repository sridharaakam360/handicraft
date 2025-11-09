
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants/index';
import type { Category } from '../src/types';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <Link to="/products" className="relative block rounded-lg overflow-hidden group h-96">
        <img 
            src={category.imageUrl} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end p-6">
            <div>
                <h3 className="text-2xl font-bold text-white font-serif">{category.name}</h3>
                <p className="text-brand-secondary">{category.productCount} products</p>
            </div>
        </div>
    </Link>
);


const CategoryShowcase: React.FC = () => {
    return (
        <section className="py-12 bg-brand-light">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif font-bold text-brand-dark text-center mb-8">Shop by Category</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map(category => (
                       <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;
