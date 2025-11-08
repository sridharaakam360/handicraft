import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
      >
        <span className="text-lg font-semibold text-brand-dark">{question}</span>
        <span className="transform transition-transform duration-300">
          {isOpen ? (
            <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>
          ) : (
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-4 pt-0 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};


const FAQPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 mt-2">Find answers to common questions about our products and services.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <FAQItem question="What materials are used in your handicrafts?">
            <p>Our products are made from authentic, high-quality materials. We specialize in Panchaloha (an alloy of five metals) for bronze statues, aged teakwood and rosewood for wooden sculptures, and pure brass for our lamps and pooja items. Our Tanjore paintings use 22-karat gold foil and semi-precious stones.</p>
          </FAQItem>
          <FAQItem question="How do you ensure the authenticity of the products?">
            <p>We work directly with traditional artisan families and co-operatives in South India who have been practicing their craft for generations. Each piece comes with a certificate of authenticity detailing its origin and the materials used.</p>
          </FAQItem>
          <FAQItem question="Do you ship internationally?">
            <p>Yes, we ship our handicrafts worldwide. We use trusted courier partners and provide robust packaging to ensure your order arrives safely. Shipping costs and delivery times vary by destination.</p>
          </FAQItem>
          <FAQItem question="How should I care for my handicraft?">
            <p>Care instructions vary by material. For bronze and brass, regular dusting and occasional polishing with a soft cloth is recommended. Wooden items should be kept away from direct sunlight and moisture. Detailed care instructions are provided with every purchase.</p>
          </FAQItem>
           <FAQItem question="What is your return policy?">
            <p>We offer a 15-day return policy for any item that is damaged upon arrival or does not match its description. Please contact our customer service team with photos of the issue to initiate a return or exchange. Custom-made items are non-refundable.</p>
          </FAQItem>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
