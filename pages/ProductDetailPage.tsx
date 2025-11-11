
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductGrid from '../components/ProductGrid';

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

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/products" className="bg-brand-primary text-white font-bold py-2 px-6 rounded-full hover:bg-brand-dark transition-colors">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  const phoneNumber = "911234567890";
  const message = encodeURIComponent(`I'm interested in buying the product: ${product.name} (Price: ₹${product.price.toLocaleString('en-IN')})`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div>
            <img 
              src={product.imageUrl.replace('400x400', '600x600')} // Request a larger image
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-serif font-bold text-brand-dark">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <p className="text-3xl font-bold text-brand-primary">₹{product.price.toLocaleString('en-IN')}</p>
              {product.originalPrice && (
                <p className="text-xl text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</p>
              )}
            </div>
            <div>
                <h2 className="text-xl font-bold text-brand-dark mb-2">Description</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <button className="flex-1 bg-brand-primary text-white py-3 px-6 rounded-full font-bold hover:bg-brand-dark transition-colors duration-300 flex items-center justify-center space-x-2 text-lg">
                <ShoppingBagIcon className="w-6 h-6"/>
                <span>Add to Cart</span>
              </button>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Buy on WhatsApp"
                className="flex-shrink-0 bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <WhatsappIcon className="w-6 h-6"/>
              </a>
            </div>
            
            <div className="border-t pt-6 mt-6">
                <p><span className="font-semibold text-gray-800">Category:</span> <Link to={`/products?category=${product.category}`} className="text-brand-primary hover:underline">{product.category}</Link></p>
            </div>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
          <div className="bg-brand-light">
             <ProductGrid title="You might also like" products={relatedProducts} />
          </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
