import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Title, SimpleGrid, Text } from '@mantine/core';
import { CATEGORIES } from '../constants';
import type { Category } from '../types';

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
    <Link to={`/products?category=${encodeURIComponent(category.name)}`} style={{ textDecoration: 'none' }}>
        <Box
            style={{
                position: 'relative',
                height: 384,
                borderRadius: 8,
                overflow: 'hidden',
                cursor: 'pointer',
            }}
        >
            <img
                src={category.imageUrl}
                alt={category.name}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
            <Box
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.5rem',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'}
            >
                <div>
                    <Title order={3} size="1.5rem" c="white" ff="Georgia, serif">
                        {category.name}
                    </Title>
                    <Text c="#f7941d">
                        {category.productCount} products
                    </Text>
                </div>
            </Box>
        </Box>
    </Link>
);

const CategoryShowcase: React.FC = () => {
    return (
        <Box component="section" py={48} style={{ backgroundColor: '#fef3e3' }}>
            <Container size="xl">
                <Title
                    order={2}
                    size="2rem"
                    ff="Georgia, serif"
                    fw={700}
                    c="#3a0e0d"
                    ta="center"
                    mb="xl"
                >
                    Shop by Category
                </Title>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {CATEGORIES.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};

export default CategoryShowcase;
