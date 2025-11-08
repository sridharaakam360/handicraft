
import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { PRODUCTS } from '../constants';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="pt-8 pb-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-brand-dark">Our Collection</h1>
          <p className="text-gray-600 mt-2">Browse through our exquisite collection of handcrafted items.</p>
        </div>
        <ProductGrid title="" products={PRODUCTS} />
      </div>
    </div>
  );
};

export default ProductsPage;
