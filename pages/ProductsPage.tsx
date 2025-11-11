import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

interface ProductsPageProps {
  searchTerm: string;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ searchTerm }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'All';

  const handleCategoryChange = (category: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newSearchParams.delete('category');
    } else {
      newSearchParams.set('category', category);
    }
    setSearchParams(newSearchParams, { replace: true });
  };

  // Dynamically generate categories from product data
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = PRODUCTS
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="pt-8 pb-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-brand-dark">Our Collection</h1>
          <p className="text-gray-600 mt-2">Browse through our exquisite collection of handcrafted items.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Sidebar for filters */}
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <div className="p-4 rounded-lg border bg-gray-50 md:bg-transparent md:border-0 md:p-0">
                <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Categories</h2>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                          selectedCategory === category
                            ? 'bg-brand-primary text-white font-semibold shadow'
                            : 'text-gray-700 hover:bg-brand-light hover:text-brand-dark'
                        }`}
                        aria-pressed={selectedCategory === category}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600">No products found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
