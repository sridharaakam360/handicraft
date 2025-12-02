import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Container, Grid, Image, Title, Text, Group, Button, ActionIcon, Stack, Anchor } from '@mantine/core';
import { PRODUCTS } from '../constants';
import ProductGrid from '../components/ProductGrid';

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

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Box style={{ backgroundColor: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box ta="center">
          <Title order={1} size="2.5rem" fw={700} c="#3a0e0d" mb="md">
            Product Not Found
          </Title>
          <Text c="dimmed" mb="xl">
            Sorry, we couldn't find the product you're looking for.
          </Text>
          <Button
            component={Link}
            to="/products"
            radius="xl"
            size="md"
            style={{ backgroundColor: '#6a1b1a' }}
            styles={{
              root: {
                '&:hover': {
                  backgroundColor: '#3a0e0d',
                }
              }
            }}
          >
            Back to Collection
          </Button>
        </Box>
      </Box>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const phoneNumber = "911234567890";
  const message = encodeURIComponent(`I'm interested in buying the product: ${product.name} (Price: ₹${product.price.toLocaleString('en-IN')})`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <Box style={{ backgroundColor: 'white' }}>
      <Container size="xl" py={48}>
        <Grid gutter="xl" align="flex-start">
          {/* Product Image */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image
              src={product.imageUrl.replace('400x400', '600x600')}
              alt={product.name}
              radius="md"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </Grid.Col>

          {/* Product Details */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Title order={1} size="2.5rem" ff="Georgia, serif" fw={700} c="#3a0e0d">
                {product.name}
              </Title>
              <Group gap="md">
                <Text size="2rem" fw={700} c="#6a1b1a">
                  ₹{product.price.toLocaleString('en-IN')}
                </Text>
                {product.originalPrice && (
                  <Text size="xl" c="dimmed" td="line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </Text>
                )}
              </Group>
              <div>
                <Title order={2} size="1.25rem" fw={700} c="#3a0e0d" mb="xs">
                  Description
                </Title>
                <Text c="#374151" style={{ lineHeight: 1.6 }}>
                  {product.description}
                </Text>
              </div>

              <Group gap="md" pt="md">
                <Button
                  fullWidth
                  radius="xl"
                  size="lg"
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
                  leftSection={<ShoppingBagIcon style={{ width: 24, height: 24 }} />}
                >
                  Add to Cart
                </Button>
                <ActionIcon
                  component="a"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xl"
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
                  <WhatsappIcon style={{ width: 24, height: 24 }} />
                </ActionIcon>
              </Group>

              <Box style={{ borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem', marginTop: '1.5rem' }}>
                <Text>
                  <Text component="span" fw={600} c="#1f2937">Category: </Text>
                  <Anchor component={Link} to={`/products?category=${product.category}`} c="#6a1b1a">
                    {product.category}
                  </Anchor>
                </Text>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {relatedProducts.length > 0 && (
        <Box style={{ backgroundColor: '#fef3e3' }}>
          <ProductGrid title="You might also like" products={relatedProducts} />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetailPage;
