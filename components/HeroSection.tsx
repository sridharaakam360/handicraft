import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
    return (
        <div 
            className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white" 
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?indian,handicrafts,artisan')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
                    Timeless Artistry, <span className="text-brand-secondary">Divine Craftsmanship</span>
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
                    Discover authentic, handcrafted idols and art from the heart of South India.
                </p>
                <Link 
                    to="/products"
                    className="bg-brand-secondary text-brand-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                    Explore Collection
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;