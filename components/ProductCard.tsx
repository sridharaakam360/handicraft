import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Group, Badge, Stack } from '@mantine/core';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'box-shadow 0.3s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
        >
            <Card.Section
                component={Link}
                to={`/products/${product.id}`}
                style={{ position: 'relative', overflow: 'hidden' }}
            >
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={224}
                    style={{
                        transition: 'transform 0.5s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {product.originalPrice && (
                    <Badge
                        color="orange"
                        variant="filled"
                        style={{
                            position: 'absolute',
                            top: 12,
                            left: 12,
                        }}
                    >
                        SALE
                    </Badge>
                )}
            </Card.Section>

            <Stack gap="xs" mt="md" style={{ flex: 1, textAlign: 'center' }}>
                <Text
                    fw={600}
                    size="lg"
                    c="#3a0e0d"
                    component={Link}
                    to={`/products/${product.id}`}
                    style={{
                        textDecoration: 'none',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {product.name}
                </Text>
                <Group justify="center" gap="xs">
                    <Text size="xl" fw={700} c="#6a1b1a">
                        ₹{product.price.toLocaleString('en-IN')}
                    </Text>
                    {product.originalPrice && (
                        <Text size="md" c="dimmed" td="line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                        </Text>
                    )}
                </Group>
            </Stack>
        </Card>
    );
};

export default ProductCard;