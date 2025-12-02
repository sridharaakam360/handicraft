import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Text, Group, Badge, Button, ActionIcon, Stack } from '@mantine/core';
import type { Product } from '../types';

const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

const WhatsappIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.16 14.2c-.28-.14-1.64-.81-1.9-.9s-.45-.14-.64.14c-.19.27-.72.9-.88 1.08-.16.19-.32.21-.6.07-.27-.14-1.14-.42-2.17-1.34-.81-.71-1.36-1.59-1.52-1.86s-.02-.42.12-.56c.13-.13.28-.34.42-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.5s-.64-1.54-.88-2.1c-.24-.56-.49-.48-.64-.49-.16 0-.36-.01-.54-.01s-.46.07-.69.36c-.23.29-.92 1.02-.92 2.49s.94 2.9 1.07 3.1c.13.2 1.86 2.96 4.54 4.03.65.26 1.23.42 1.66.53.71.19 1.36.16 1.86-.09.57-.29 1.64-1.05 1.88-1.42.24-.37.24-.69.17-.83-.07-.13-.26-.22-.54-.36z" />
    </svg>
);

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const phoneNumber = "911234567890";
    const message = encodeURIComponent(`I'm interested in buying the product: ${product.name} (Price: ₹${product.price.toLocaleString('en-IN')})`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

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

            <Group gap="xs" mt="md">
                <Button
                    fullWidth
                    radius="xl"
                    style={{
                        backgroundColor: '#6a1b1a',
                        flex: 1,
                    }}
                    styles={{
                        root: {
                            '&:hover': {
                                backgroundColor: '#3a0e0d',
                            }
                        }
                    }}
                    leftSection={<ShoppingBagIcon style={{ width: 20, height: 20 }} />}
                >
                    Add to Cart
                </Button>
                <ActionIcon
                    component="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    radius="xl"
                    style={{
                        backgroundColor: '#25D366',
                        color: 'white',
                    }}
                    styles={{
                        root: {
                            '&:hover': {
                                backgroundColor: '#1da851',
                            }
                        }
                    }}
                >
                    <WhatsappIcon style={{ width: 20, height: 20 }} />
                </ActionIcon>
            </Group>
        </Card>
    );
};

export default ProductCard;