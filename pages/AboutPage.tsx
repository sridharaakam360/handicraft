import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">About SI Handicrafts</h1>
          <p className="text-lg text-gray-600 mb-8">
            Preserving Centuries of Tradition in Every Masterpiece
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <img 
              src="https://source.unsplash.com/600x400/?indian,artisan,craft" 
              alt="Artisan at work"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="text-gray-700 space-y-4">
            <h2 className="text-2xl font-serif font-bold text-brand-primary">Our Story</h2>
            <p>
              South Indian Handicrafts was born from a deep love and respect for the timeless artistry of our homeland. We witnessed the incredible skill of local artisans, whose talents have been passed down through generations, and felt a calling to share their magnificent creations with the world.
            </p>
            <p>
              Our journey began in the temple towns of Tamil Nadu, sourcing authentic bronze statues, and soon expanded to embrace the rich diversity of wooden sculptures from Kerala, radiant brass lamps, and the divine Tanjore paintings that adorn sacred spaces.
            </p>
             <h2 className="text-2xl font-serif font-bold text-brand-primary mt-6">Our Mission</h2>
            <p>
              Our mission is twofold: to bring you authentic, high-quality handcrafted items that carry the essence of South Indian culture, and to support the artisan communities that are the custodians of this precious heritage. By choosing SI Handicrafts, you are not just buying a product; you are becoming part of a story and helping to sustain a legacy of unparalleled craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
