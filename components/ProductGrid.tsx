import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Title, SimpleGrid, Anchor, Group } from '@mantine/core';
import type { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductGridProps {
    title: string;
    products: Product[];
    showMoreLink?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ title, products, showMoreLink }) => {
    return (
        <Box py={48} style={{ backgroundColor: 'white' }}>
            <Container size="xl">
                <Group justify="space-between" mb="xl">
                    <Title order={2} size="2rem" ff="Georgia, serif" fw={700} c="#3a0e0d">
                        {title}
                    </Title>
                    {showMoreLink && (
                        <Anchor
                            component={Link}
                            to={showMoreLink}
                            c="#6a1b1a"
                            fw={600}
                            style={{ textDecoration: 'none' }}
                        >
                            View All →
                        </Anchor>
                    )}
                </Group>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default ProductGrid;
