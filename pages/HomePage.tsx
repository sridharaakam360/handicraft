import React from 'react';
import { Box } from '@mantine/core';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import CategoryShowcase from '../components/CategoryShowcase';
import Testimonials from '../components/Testimonials';
import { PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
    return (
        <Box>
            <HeroSection />
            <ProductGrid
                title="Featured Products"
                products={PRODUCTS.slice(0, 4)}
                showMoreLink="/products"
            />
            <CategoryShowcase />
            <ProductGrid
                title="New Arrivals"
                products={PRODUCTS.slice(4, 8)}
                showMoreLink="/products"
            />
            <Testimonials />
        </Box>
    );
};

export default HomePage;